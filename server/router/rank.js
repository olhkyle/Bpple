const express = require('express');
const router = express.Router();
const users = require('../mock-data/users');

// 사용자 랭킹
router.get('/', (req, res) => {
	const rankList = users.getUsersRank();

	res.send({ rankList });
});

module.exports = router;
