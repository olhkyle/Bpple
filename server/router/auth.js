const express = require('express');
const router = express.Router();
const users = require('../mock-data/users');
const jwt = require('jsonwebtoken');

const TOKEN = 'accessToken';

router.get('/auth', (req, res) => {
	const accessToken = req.cookies.accessToken;

	try {
		const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
		console.log(`😀 사용자 인증 성공`, decoded);
		res.send({ auth: 'success' });
	} catch (e) {
		console.error('😱 사용자 인증 실패..', e);
		res.status(401).send({ auth: 'fail' });
	}
});

router.post('/signin', (req, res) => {
	const { email, password } = req.body;

	console.log(email, password);

	console.log(req);
	// 401 Unauthorized
	if (!email || !password)
		return res
			.status(401)
			.send({ error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.' });

	const user = users.findUser(email, password);
	console.log('사용자 정보:', user);

	// 401 Unauthorized
	if (!user)
		return res.status(401).send({ error: '등록되지 않은 사용자입니다.' });

	const accessToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
		expiresIn: '1d',
	});

	// TODO : 쿠키명 바꿔서 상수화하기
	res.cookie(TOKEN, accessToken, {
		maxAge: 1000 * 60 * 60 * 24 * 7, // 7d
		httpOnly: true,
	});

	res.send({ email, username: user.name });
});

router.post('/signup', (req, res) => {
	const { userInfo } = req.body;

	if (users.findUserByEmail(userInfo.email))
		return res.status(401).send({ error: '이미 등록된 사용자입니다.' });

	users.createUser(userInfo);
	res.send({ message: '회원가입에 성공하였습니다.' });
});

router.get('/signout', (req, res) => {
	return res.clearCookie(TOKEN).end();
});

router.post('/checkemail', (req, res) => {
	const { email } = req.body;

	res.send({ duplicated: !!users.findUserByEmail(email) });
});

router.post('/checknickname', (req, res) => {
	const { nickName } = req.body;

	res.send({ duplicated: !!users.findUserByNickName(nickName) });
});

module.exports = router;
