const { v4: uuidv4 } = require('uuid');
const comments = require('./comments');

/**
 * 	{
		id: uuidv,
		title: string,
		author: string,
		createAt: date,
		updateAt: date,
		comments: array[],
		category: string,
		completed: boolean,
	},
 */

/** Comment Data
 * 
 * const comment = {
	id: uuidv4(),
	author: 'cooljp95@naver.com',
	content: '',
	createAt: new Date(),
	updateAt: new Date(),
	certified: false,
};
 */

let posts = [
	{
		id: '1',
		title: '아이패드 고장났는데 이거 고쳐주셈',
		content: '',
		author: 'cooljp95@naver.com',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'iphone',
		completed: false,
	},
	{
		id: '2',
		title: '아이폰 고장났는데 이거 고쳐주셈',
		content: '',
		author: 'cooljp95@naver.com',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'iphone',
		completed: false,
	},
	{
		id: '3',
		title: '애플워치 고장났는데 이거 고쳐주셈',
		content: '',
		author: 'cooljp95@naver.com',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'iphone',
		completed: false,
	},
	{
		id: '4',
		title: '에어팟 고장났는데 이거 고쳐주셈',
		content: '',
		author: 'cooljp95@naver.com',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'iphone',
		completed: false,
	},
];

const getPosts = () => posts;

const getFilteredPosts = (category) => {
	return posts.filter((post) => post.category === category);
};

const getMyPosts = (author) => {
	return posts.filter((posts) => posts.author === author);
};

const getPost = (postId) => posts.find((post) => post.id === postId);

// TODO : 작성자 point 추가하기
const createPost = (postInfo) => {
	posts = [
		{
			...postInfo,
			id: uuidv4(),
			createAt: new Date(),
			comments: [],
			completed: false,
		},
		...posts,
	];
};

const updatePost = (postId, updateInfo) => {
	posts = posts.map((post) =>
		post.id === postId ? { ...post, ...updateInfo, updateAt: new Date() } : post
	);
};

const updateCompletedPost = (postId) => {
	posts = posts.map((post) =>
		post.id === postId ? { ...post, completed: true } : post
	);
};

// TODO : 작성자 point 차감하기
const deletePost = (postId) =>
	(posts = posts.filter(({ id }) => id !== postId));

const searchPost = (keyword) => {
	console.log(keyword);
	return posts.filter((post) => post.title.includes(keyword));
};

module.exports = {
	getPosts,
	getFilteredPosts,
	getMyPosts,
	getPost,
	searchPost,
	createPost,
	updatePost,
	updateCompletedPost,
	deletePost,
};
