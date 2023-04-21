const express = require('express');
const router = express.Router();
const posts = require('../mock-data/posts');

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

module.exports = router;
