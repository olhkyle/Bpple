const express = require('express');
const router = express.Router();
const users = require('../mock-data/users');

// 사용자 프로필
router.post('/', (req, res) => {
	const { userId } = req.body;

	const {
		firstName,
		lastName,
		nickName,
		country,
		phoneNumber,
		products,
		point,
		level,
		avatarId,
		aboutMe,
	} = users.findUserByEmail(userId);

	console.log('## 프로필 fetch -', nickName);

	res.send({
		name: firstName + lastName,
		country,
		phoneNumber,
		products,
		point,
		level,
		avatarId,
		aboutMe,
	});
});

// TODO: 사용자 프로필 수정
router.patch('/edit', (req, res) => {
	const userInfo = req.body;

	console.log('## 프로필 수정', userInfo);

	res.send();
});

module.exports = router;
