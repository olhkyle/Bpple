const express = require('express');
const router = express.Router();

// 사용자 프로필
router.get('/:userid', (req, res) => {
	const { userid } = req.params;

	res.send({ hi: 'profile' });
});

// 사용자 커뮤니티 프로필
router.get('/community/:userid', (req, res) => {
	const { userid } = req.params;

	res.send();
});

// 사용자 프로필 수정
router.patch('/:userid', (req, res) => {
	const { userid } = req.params;

	res.send();
});

// 사용자 커뮤니티 프로필 수정
router.patch('/community/:userid', (req, res) => {
	const { userid } = req.params;

	res.send();
});

module.exports = router;
