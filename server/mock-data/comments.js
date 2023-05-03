const { v4: uuidv4 } = require('uuid');

let comments = [
	{
		id: uuidv4(),
		postId: '1',
		author: 'cooljp95@naver.com',
		content: `아이폰을 분실 후 분실한 아이폰을 통해 정보 유출되는게 걱정이셨군요.
		우선 나의 아이폰 찾기가 켜져 있다면 어떤 방법으로도 아이폰 안의 데이터에 접근을 할 수 없으니 걱정은 하지 않으셔도 됩니다.`,
		createAt: new Date('2022-12-01'),
		updateAt: new Date(),
		certified: true,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'cooljp95@naver.com',
		content: '음, 다음과 같이 해결해주시겠어요? ...',
		createAt: new Date('2022-12-24'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'kylekwon.dev@gmail.com',
		content:
			'Apple 지원 커뮤니티를 이용해주셔서 감사드리며, 문제가 잘 해결되기를 바랍니다.',
		createAt: new Date('2022-12-26'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'qwer@qwer.ee',
		content:
			'또한 분실하신 아이폰을 누군가 초기화하여 사용하려한다면 유석160님의 계정 비밀번호를 알아야만 활성화가 가능합니다.',
		createAt: new Date('2023-01-26'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'qwer@qwer.ee',
		content:
			'또한 분실하신 아이폰을 누군가 초기화하여 사용하려한다면 유석160님의 계정 비밀번호를 알아야만 활성화가 가능합니다.',
		createAt: new Date('2023-01-26'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'qwer@qwer.ee',
		content:
			'또한 분실하신 아이폰을 누군가 초기화하여 사용하려한다면 유석160님의 계정 비밀번호를 알아야만 활성화가 가능합니다.',
		createAt: new Date('2023-01-26'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'qwer@qwer.ee',
		content:
			'또한 분실하신 아이폰을 누군가 초기화하여 사용하려한다면 유석160님의 계정 비밀번호를 알아야만 활성화가 가능합니다.',
		createAt: new Date('2023-01-26'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'qwer@qwer.ee',
		content:
			'또한 분실하신 아이폰을 누군가 초기화하여 사용하려한다면 유석160님의 계정 비밀번호를 알아야만 활성화가 가능합니다.',
		createAt: new Date('2023-01-26'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'qwer@qwer.ee',
		content:
			'또한 분실하신 아이폰을 누군가 초기화하여 사용하려한다면 유석160님의 계정 비밀번호를 알아야만 활성화가 가능합니다.',
		createAt: new Date('2023-01-26'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'qwer@qwer.ee',
		content:
			'또한 분실하신 아이폰을 누군가 초기화하여 사용하려한다면 유석160님의 계정 비밀번호를 알아야만 활성화가 가능합니다.',
		createAt: new Date('2023-01-26'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'qwer@qwer.ee',
		content:
			'또한 분실하신 아이폰을 누군가 초기화하여 사용하려한다면 유석160님의 계정 비밀번호를 알아야만 활성화가 가능합니다.',
		createAt: new Date('2023-01-26'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'qwer@qwer.ee',
		content:
			'또한 분실하신 아이폰을 누군가 초기화하여 사용하려한다면 유석160님의 계정 비밀번호를 알아야만 활성화가 가능합니다.',
		createAt: new Date('2023-01-26'),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '3',
		author: 'kylekwon.dev@gmail.com',
		content: '음',
		createAt: new Date(),
		updateAt: new Date(),
		certified: true,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '5',
		author: 'cooljp95@naver.com',
		content: '음',
		createAt: new Date(),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '6',
		author: 'kylekwon.dev@gmail.com',
		content: 'hello',
		createAt: new Date(),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
];

const getComments = () => comments;
const getComment = (commentId) => comments.find(({ id }) => id === commentId);

const getPostComments = (postId) =>
	comments.filter((comment) => postId === comment.postId);

const createComment = (commentInfo) => {
	comments = [
		{
			...commentInfo,
			id: uuidv4(),
			certified: false,
			useful: false,
		},
		...comments,
	];
};

const updateUsefulComment = (commentId, useful) => {
	comments = comments.map((comment) =>
		comment.id === commentId ? { ...comment, useful } : comment
	);
};

const updateCertifiedComment = (commentId, certified) => {
	comments = comments.map((comment) =>
		comment.id === commentId ? { ...comment, certified } : comment
	);
};

const updateComment = (commentId, commentInfo) => {
	comments = comments.map((comment) =>
		comment.id === commentId
			? { ...comment, ...commentInfo, updateAt: new Date() }
			: comment
	);
};

const deleteComment = (commentId) => {
	comments = comments.filter((comment) => comment.id !== commentId);
};

module.exports = {
	getComments,
	getComment,
	getPostComments,
	createComment,
	updateComment,
	updateUsefulComment,
	updateCertifiedComment,
	deleteComment,
};
