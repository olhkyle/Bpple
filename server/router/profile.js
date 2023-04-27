const express = require('express');
const router = express.Router();
const users = require('../mock-data/users');

// 사용자 프로필
router.post('/', (req, res) => {
	const { userId } = req.body;

	const user = users.findUserByEmail(userId);

	if (!user)
		return res.status(401).send({ error: '해당 사용자가 존재하지 않습니다.' });

	const {
		nickName,
		firstName,
		lastName,
		country,
		phoneNumber,
		products,
		point,
		level,
		avatarId,
		aboutMe,
		birthDate,
	} = user;

	res.send({
		nickName,
		name: firstName + lastName,
		country,
		phoneNumber,
		products,
		point,
		level,
		avatarId,
		aboutMe,
		birthDate,
	});
});

// 프로필 수정
router.post('/edit', (req, res) => {
	const userInfo = req.body;

	users.updateProfile(userInfo);
	res.send({ message: '회원 정보가 수정되었습니다.' });
});

module.exports = router;
