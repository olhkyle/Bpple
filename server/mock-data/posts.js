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
		title: 'IOS 16.4 업데이트 후 앱 실행 시마다 셀룰러 네트워크가 자주 끊어짐',
		content: '',
		author: 'cooljp95@naver.com',
		avatarId: 'avatar-0',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'iPhone',
		completed: false,
	},
	{
		id: '2',
		title: '아이폰12 메인보드 고장이 연속으로 났습니다.',
		content: '',
		author: 'kylekwon.dev@gmail.com',
		avatarId: 'avatar-1',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'iPhone',
		completed: false,
	},
	{
		id: '3',
		title: '애플워치 건강 기능에 문제가 있어요',
		content: '',
		author: 'cooljp95@naver.com',
		avatarId: 'avatar-2',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'iphone',
		completed: false,
	},
	{
		id: '4',
		title: '에어팟 한쪽 귀가 안들리는데 충전을 잘못 한 걸까요?',
		content: '',
		author: 'kylekwon.dev@gmail.com',
		avatarId: 'avatar-3',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'iPhone',
		completed: true,
	},
	{
		id: '5',
		title:
			'집중모드 위치설정 기기변경을 하려하는데 예전 폰으로 위치 설정이 잡히는데 어떻게 하는게 좋을까요?',
		content: '',
		author: 'cooljp95@naver.com',
		avatarId: 'avatar-4',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'iPhone',
		completed: false,
	},
	{
		id: '6',
		title: 'm1 맥북에어 최대 충전속도가 어떻게 되나요?',
		content: '',
		author: 'kylekwon.dev@gmail.com',
		avatarId: 'avatar-5',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'Mac',
		completed: false,
	},
	{
		id: '7',
		title: '맥북 이미지 캡처로 외장하드에 사진 옮기기',
		content: '',
		author: 'kylekwon.dev@gmail.com',
		avatarId: 'avatar-6',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'Mac',
		completed: false,
	},
	{
		id: '8',
		title: '맥북의 경우 trade in 어떻게 가능한가요?',
		content: '',
		author: 'cooljp95@naver.com',
		avatarId: 'avatar-7',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'Mac',
		completed: true,
	},
	{
		id: '9',
		title: '맥북 잠자기 프리징현상',
		content: '',
		author: 'cooljp95@naver.com',
		avatarId: 'avatar-8',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'Mac',
		completed: false,
	},
	{
		id: '10',
		title: '맥북 프로 화면 닦을 때 권장사항 또는 주의해야할 점 궁금합니다',
		content: '',
		author: 'kylekwon.dev@gmail.com',
		avatarId: 'avatar-9',
		createAt: new Date(),
		updateAt: new Date(),
		category: 'Mac',
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

// Autocomplete Search Posts -> Max Count :5
const searchPost = (keyword) => {
	return posts.filter((post) => new RegExp(keyword, 'i').test(post.title));
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
