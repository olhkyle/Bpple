const express = require('express');
const router = express.Router();

// 카테고리별 글 목록
router.get('/:categoryid', (req, res) => {
	res.send({ hi: 'posts' });
});

module.exports = router;
