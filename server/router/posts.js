const express = require('express');
const router = express.Router();
const posts = require('../mock-data/posts');
const comments = require('../mock-data/comments');
const users = require('../mock-data/users');

const PAGE_SIZE = 10;

// 카테고리별 글 목록
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
			commentLength: comments.getPostComments(post.id).length,
		})),
		toTallength: postList.length,
	});
});

// AutoComplete 검색결과
router.get('/search', (req, res) => {
	const { keyword } = req.query;

	const searchedPosts = posts.searchPost(keyword).slice(0, 5);

	res.send({
		posts: searchedPosts.map((searchedPost) => ({
			...searchedPost,
			avatarId: users.findUserByEmail(searchedPost.author).avatarId,
		})),
	});
});

router.post('/me', (req, res) => {
	const { userId } = req.body;

	const myPosts = posts.getMyPosts(userId);
	const user = users.findUserByEmail(userId);

	res.send({
		posts: myPosts.map((myPost) => ({
			...myPost,
			avatarId: user.avatarId,
			commentLength: comments.getPostComments(myPost.id).length,
		})),
	});
});

module.exports = router;
