// const bcrypt = require('bcrypt')

/* 
	Fake users database

	user => { 
		id : uuid
		firstName: string,
		lastName: string,
		country: string,
		birthDate: date,
		email: string,
		password: string,
		nickName: string,
		phoneNumber: string, 
		products : [],
		point : number
		level : number,
		avatar : string | null
	}

	product-type 목록 : 
		'ipad-basic', 'ipad-air', 'ipad-mini', 'ipad-pro',
  	'iphone-13', 'iphone-14', 'iphone-14-pro', 'iphone-se',
  	'macbook-air-m1', 'macbook-air-m2',
  	'macbook-pro-13', 'macbook-pro-14', 'macbook-pro-16',

	product: {
		type: string,
		// options: {}, // 상품 주문하기 기능 구현시 설정
	}
*/

// verify 시, 클라이언트에 전송할 데이터 :email, nickName, avatarId
// 랭크에 접근 시 : level, point
let users = [
	{
		firstName: '서',
		lastName: '준표',
		country: '대한민국',
		birthDate: new Date('1995-09-15'),
		email: 'cooljp95@naver.com',
		password: 'ABcdef12',
		nickName: '서준표',
		phoneNumber: '010-2395-9282',
		products: [],
		point: 100,
		level: 2,
		avatarId: 'avatar-2',
		aboutMe: '',
	},
	{
		firstName: '으',
		lastName: '아니',
		country: '대한민국',
		birthDate: new Date('1995-09-15'),
		email: 'cooljp95@gmail.com',
		password: 'ABcdef12',
		nickName: '서준표',
		phoneNumber: '010-2395-9282',
		products: [],
		point: 140,
		level: 2,
		avatarId: null,
		aboutMe: '',
	},
	{
		firstName: 'park',
		lastName: 'sunhwa',
		country: '대한민국',
		birthDate: new Date('1994-06-03'),
		email: 'qwer@qwer.ee',
		password: 'Qwer1234',
		nickName: '서나',
		phoneNumber: '010-1234-1234',
		products: [
			{ type: 'ipad-pro' },
			{ type: 'ipad-basic' },
			{ type: 'iphone-13' },
			{ type: 'iphone-14' },
			{ type: 'iphone-14-pro' },
			{ type: 'iphone-se' },
		],
		point: 10,
		level: 1,
		avatarId: 'avatar-1',
		aboutMe: '응애 나 아기 프엔',
	},
	{
		firstName: 'minhyuk',
		lastName: 'kwon',
		country: '대한민국',
		birthDate: new Date('1996-06-15'),
		email: 'kylekwon.dev@gmail.com',
		password: 'khm0912',
		nickName: '민혁',
		phoneNumber: '010-1111-0615',
		products: [
			{ type: 'ipad-pro' },
			{ type: 'iphone-13' },
			{ type: 'iphone-14' },
			{ type: 'iphone-14-pro' },
			{ type: 'iphone-se' },
		],
		point: 250,
		level: 3,
		avatarId: 'avatar-0',
		aboutMe: 'junior fe dev',
	},
	{
		firstName: '김',
		lastName: '이',
		country: '대한민국',
		birthDate: new Date('2000-01-02'),
		email: 'email2@email.com',
		password: 'Qwer1234',
		nickName: '김이',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 270,
		level: 3,
		avatarId: 'avatar-1',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡25',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email25@email.com',
		password: 'Qwer1234',
		nickName: '하하25',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 500,
		level: 4,
		avatarId: 'avatar-26',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡24',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email24@email.com',
		password: 'Qwer1234',
		nickName: '하하24',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 480,
		level: 4,
		avatarId: 'avatar-25',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡23',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email23@email.com',
		password: 'Qwer1234',
		nickName: '하하23',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 460,
		level: 4,
		avatarId: 'avatar-24',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡22',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email22@email.com',
		password: 'Qwer1234',
		nickName: '하하22',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 440,
		level: 4,
		avatarId: 'avatar-23',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡21',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email21@email.com',
		password: 'Qwer1234',
		nickName: '하하21',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 420,
		level: 4,
		avatarId: 'avatar-22',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡20',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email20@email.com',
		password: 'Qwer1234',
		nickName: '하하20',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 400,
		level: 4,
		avatarId: 'avatar-21',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡19',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email19@email.com',
		password: 'Qwer1234',
		nickName: '하하19',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 380,
		level: 4,
		avatarId: 'avatar-20',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡18',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email18@email.com',
		password: 'Qwer1234',
		nickName: '하하18',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 360,
		level: 4,
		avatarId: 'avatar-19',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡17',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email17@email.com',
		password: 'Qwer1234',
		nickName: '하하17',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 340,
		level: 4,
		avatarId: 'avatar-18',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡16',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email16@email.com',
		password: 'Qwer1234',
		nickName: '하하16',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 320,
		level: 4,
		avatarId: 'avatar-17',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡15',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email15@email.com',
		password: 'Qwer1234',
		nickName: '하하15',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 300,
		level: 4,
		avatarId: 'avatar-16',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡14',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email14@email.com',
		password: 'Qwer1234',
		nickName: '하하14',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 280,
		level: 3,
		avatarId: 'avatar-15',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡13',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email13@email.com',
		password: 'Qwer1234',
		nickName: '하하13',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 260,
		level: 3,
		avatarId: 'avatar-14',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡12',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email12@email.com',
		password: 'Qwer1234',
		nickName: '하하12',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 240,
		level: 3,
		avatarId: 'avatar-13',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡11',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email11@email.com',
		password: 'Qwer1234',
		nickName: '하하11',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 220,
		level: 3,
		avatarId: 'avatar-12',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡10',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email10@email.com',
		password: 'Qwer1234',
		nickName: '하하10',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 200,
		level: 3,
		avatarId: 'avatar-11',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡9',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email9@email.com',
		password: 'Qwer1234',
		nickName: '하하9',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 180,
		level: 2,
		avatarId: 'avatar-10',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡8',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email8@email.com',
		password: 'Qwer1234',
		nickName: '하하8',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 160,
		level: 2,
		avatarId: 'avatar-9',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡7',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email7@email.com',
		password: 'Qwer1234',
		nickName: '하하7',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 140,
		level: 2,
		avatarId: 'avatar-8',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡6',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email6@email.com',
		password: 'Qwer1234',
		nickName: '하하6',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 120,
		level: 2,
		avatarId: 'avatar-7',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡5',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email5@email.com',
		password: 'Qwer1234',
		nickName: '하하5',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 100,
		level: 2,
		avatarId: 'avatar-6',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡4',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email4@email.com',
		password: 'Qwer1234',
		nickName: '하하4',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 80,
		level: 1,
		avatarId: 'avatar-5',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡3',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email3@email.com',
		password: 'Qwer1234',
		nickName: '하하3',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 60,
		level: 1,
		avatarId: 'avatar-4',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡2',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email2@email.com',
		password: 'Qwer1234',
		nickName: '하하2',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 40,
		level: 1,
		avatarId: 'avatar-3',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡1',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email1@email.com',
		password: 'Qwer1234',
		nickName: '하하1',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 20,
		level: 1,
		avatarId: 'avatar-2',
		aboutMe: '',
	},
	{
		firstName: '김',
		lastName: '땡0',
		country: '대한민국',
		birthDate: new Date('2000-01-03'),
		email: 'email0@email.com',
		password: 'Qwer1234',
		nickName: '하하0',
		phoneNumber: '010-1234-1234',
		products: [],
		point: 0,
		level: 1,
		avatarId: 'avatar-1',
		aboutMe: '',
	},
];

const calcLevel = (point) => {
	return point < 100 ? 1 : point < 200 ? 2 : point < 300 ? 3 : 4;
};

const findUserByEmail = (email) => users.find((user) => user.email === email);

const findUserByNickName = (nickName) =>
	users.find((user) => user.nickName === nickName);

const findUser = (email, password) =>
	users.find((user) => user.email === email && user.password === password);

const createUser = (userInfo) => {
	users = [
		...users,
		{
			...userInfo,
			products: [],
			point: 0,
			level: 1,
			avatarId: null,
		},
	];
};

const getUsersRank = (topCount) => {
	console.log('[mock-data]', topCount);

	// TODO:알고리즘 수정
	const usersRank = users.sort((user1, user2) => user2.point - user1.point);

	return usersRank
		.slice(0, +topCount || 10)
		.map(
			({ firstName, lastName, nickName, point, level, avatarId }, index) => ({
				rank: index + 1,
				name: firstName + lastName,
				nickName,
				point,
				level,
				avatarId,
			})
		);
};

const updatePoint = (email, point) => {
	users = users.map((user) =>
		user.email === email
			? {
					...user,
					point: user.point + point,
					level: calcLevel(user.point + point),
			  }
			: user
	);
};

const updateProfile = ({ userInfo: { userId, ...newUserInfo } }) => {
	users = users.map((user) =>
		user.email === userId ? { ...user, ...newUserInfo } : user
	);
};

const addProduct = ({ userId, productInfo }) => {
	users = users.map((user) =>
		user.email === userId
			? {
					...user,
					products: [...user.products, { type: productInfo.productType }],
			  }
			: user
	);
};

const getUsers = () => users;

module.exports = {
	findUser,
	createUser,
	updateProfile,
	findUserByEmail,
	findUserByNickName,
	getUsers,
	getUsersRank,
	updatePoint,
	addProduct,
};
