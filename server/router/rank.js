const express = require('express');
const router = express.Router();

// 사용자 랭킹
router.get('/', (req, res) => {
	res.send({ hi: 'rank' });
});

module.exports = router;
