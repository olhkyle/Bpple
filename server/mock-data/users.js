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
		point: 0,
		level: 1,
		avatarId: 'avatar-2',
		aboutMe: '',
	},
	{
		firstName: '아',
		lastName: '아아아',
		country: '대한민국',
		birthDate: new Date('1995-09-15'),
		email: 'cooljp95@daum.net',
		password: 'ABcdef12',
		nickName: '서준표',
		phoneNumber: '010-2395-9282',
		products: [],
		point: 100,
		level: 2,
		avatarId: null,
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
		point: 200,
		level: 3,
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
			{ type: 'ipad-pro' },
			{ type: 'iphone-13' },
			{ type: 'iphone-14' },
			{ type: 'iphone-14-pro' },
			{ type: 'iphone-se' },
		],
		point: 50,
		level: 2,
		avatarId: 'avatar-10',
		aboutMe: 'junior fe dev',
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

const getUsersRank = () =>
	users.sort((user1, user2) => user2.point - user1.point);

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
};
