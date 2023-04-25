const express = require('express');
const router = express.Router();
const posts = require('../mock-data/posts');
const comments = require('../mock-data/comments');
const users = require('../mock-data/users');

const PAGE_SIZE = 10;

const division = (array, n) => {
	let startIdx = 0;
	let divisionArray = [];

	for (let i = 0; i < Math.ceil(array.length / n); i++) {
		divisionArray = [...divisionArray, array.slice(startIdx, startIdx + n)];
		startIdx += n;
	}

	return divisionArray;
};

// 카테고리별 글 목록
router.get('/', (req, res) => {
	const { category, page } = req.query;

	const filteredPosts = posts.getFilteredPosts(category);

	res.send({
		posts: division(filteredPosts, PAGE_SIZE)[page - 1],
		toTallength: filteredPosts.length,
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
			comments: comments.getPostComments(myPost.id),
		})),
	});
});

module.exports = router;
