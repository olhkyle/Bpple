const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const posts = require('../mock-data/posts');
const comments = require('../mock-data/comments');
const users = require('../mock-data/users');

const PAGE_SIZE = 10;

// GET | 카테고리별 글 목록
router.get('/', (req, res) => {
	const { category, page } = req.query;

	const startIdx = PAGE_SIZE * (page - 1);

	const postList = category
		? posts.getFilteredPosts(category)
		: posts.getPosts();

	const slicedPosts = postList.slice(startIdx, startIdx + PAGE_SIZE);

	res.send({
		posts: slicedPosts.map((post) => ({
			...post,
			avatarId: users.findUserByEmail(post.author).avatarId,
			commentsLength: comments.getPostComments(post.id).length,
		})),
		totalLength: postList.length,
	});
});

// GET | AutoComplete 검색 결과
router.get('/search', (req, res) => {
	const { keyword, category } = req.query;

	const filteredPosts = posts.getFilteredPosts(category);
	const searchedPosts = posts.searchPost(filteredPosts, keyword).slice(0, 5);

	res.send({
		posts: searchedPosts.map((searchedPost) => ({
			...searchedPost,
			avatarId: users.findUserByEmail(searchedPost.author).avatarId,
		})),
	});
});

// GET | 내가 작성한 글 목록
router.get('/me', (req, res) => {
	try {
		const accessToken = req.cookies.accessToken;

		const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
		const { email: userId } = users.findUserByEmail(decoded.email);

		const myPosts = posts.getMyPosts(userId);
		const user = users.findUserByEmail(userId);

		if (!user)
			return res
				.status(401)
				.send({ error: '해당 사용자가 존재하지 않습니다.' });

		res.send({
			posts: myPosts.map((myPost) => ({
				...myPost,
				avatarId: user.avatarId,
				commentsLength: comments.getPostComments(myPost.id).length,
			})),
		});
	} catch (e) {
		console.error('😱 사용자 인증 실패..', e);
		res.status(401).send({ auth: 'fail' });
	}
});

// GET | 사용자 프로필 - 글 목록
router.get('/profile/:nickName', (req, res) => {
	const { nickName } = req.params;

	const user = users.findUserByNickName(nickName);
	if (!user)
		return res.status(401).send({ error: '해당 사용자가 존재하지 않습니다.' });

	const userPosts = posts.getMyPosts(user.email);
	res.send({
		posts: userPosts.map((post) => ({
			...post,
			avatarId: user.avatarId,
			commentsLength: comments.getPostComments(post.id).length,
		})),
	});
});

module.exports = router;
