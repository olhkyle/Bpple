// const bcrypt = require('bcrypt')

/*
Fake users database
user => { 
		firstName: string,
		lastName: string,
		country: string,
		birthDate: date,
		email: string,
		password: string,
		nickName: string,
		phoneNumber: string, 
	}
*/
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
	},
];

const findUserByEmail = (email) => users.find((user) => user.email === email);

const findUserByNickName = (nickName) =>
	users.find((user) => user.nickName === nickName);

const findUser = (email, password) =>
	users.find((user) => user.email === email && user.password === password);

const createUser = (userInfo) => {
	users = [...users, userInfo];
};

const getUsers = () => users;

module.exports = {
	findUser,
	createUser,
	findUserByEmail,
	findUserByNickName,
	getUsers,
};
