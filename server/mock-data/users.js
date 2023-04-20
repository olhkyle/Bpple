// const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid');

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
*/
let users = [
	{
		id: uuidv4(),
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
		level: 0,
		avatar: null,
	},
];

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
			id: uuidv4(),
			products: [],
			point: 0,
			level: 0,
			avatar: null,
		},
	];
};

const getUsers = () => users;

module.exports = {
	findUser,
	createUser,
	findUserByEmail,
	findUserByNickName,
	getUsers,
};
