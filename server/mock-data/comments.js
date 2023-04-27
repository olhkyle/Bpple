const { v4: uuidv4 } = require('uuid');

let comments = [
	{
		id: uuidv4(),
		postId: '1',
		author: 'cooljp95@naver.com',
		content: '아니요',
		createAt: new Date(),
		updateAt: new Date(),
		certified: false,
		useful: false,
	},
	{
		id: uuidv4(),
		postId: '1',
		author: 'cooljp95@naver.com',
		content: '음',
		createAt: new Date(),
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
		certified: false,
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

const getPostComments = (postId) =>
	comments.filter((comment) => postId === comment.postId);

const createComment = (commentInfo) => {
	comments = [
		{
			...commentInfo,
			id: uuidv4(),
			createAt: new Date(),
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
	getPostComments,
	createComment,
	updateComment,
	updateUsefulComment,
	deleteComment,
};
