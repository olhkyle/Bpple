const express = require('express');
const router = express.Router();
const posts = require('../mock-data/posts');
const comments = require('../mock-data/comments');
const users = require('../mock-data/users');

router.get('/', (req, res) => {
	res.send({ posts: posts.getPosts() });
});

router.get('/search', (req, res) => {
	const { keyword } = req.query;

	res.send({ posts: posts.searchPost(keyword) });
});

router.get('/comments', (req, res) => {
	res.send({ comments: comments.getComments() });
});

// 커뮤니티 글 정보 (댓글 정보 포함)
router.get('/:postId', (req, res) => {
	const { postId } = req.params;

	console.log(posts.getPost(postId));

	res.send({
		post: {
			...posts.getPost(postId),
			comments: comments.getPostComments(postId),
		},
	});
});

// 커뮤니티 글 작성 - 작성자 point + 10
router.post('/', (req, res) => {
	const { postInfo } = req.body;

	posts.createPost(postInfo);
	users.plusPoint(postInfo.author, 10);

	res.send({ postInfo });
});

// 커뮤니티 글 수정
router.patch('/:postId', (req, res) => {
	const { postId } = req.params;
	const { postInfo } = req.body;

	posts.updatePost(postId, postInfo);

	res.send({ postInfo });
});

// 커뮤니티 글 삭제 - 작성자 point - 10
router.delete('/:postId', (req, res) => {
	const { postId } = req.params;
	const { author } = posts.getPost(postId);

	posts.deletePost(postId);
	users.minusPoint(author, 10);

	res.send({ postId });
});

// 커뮤니티 글에 댓글 추가
// userid 대신 commentInfo에 작성자 실어서 보내기
router.post('/:postId/comment', (req, res) => {
	const { postId } = req.params;
	const { commentInfo } = req.body;

	comments.createComment({ ...commentInfo, postId });

	res.send({ postId });
});

// 커뮤니티 글에 댓글 수정
router.patch('/:postId/comment/:commentId', (req, res) => {
	const { commentId } = req.params;
	const { commentInfo } = req.body;

	comments.updateComment(commentId, commentInfo);

	res.send({ commentId });
});

// 커뮤니티 글에 댓글 삭제
router.delete('/:postid/comment/:commentId', (req, res) => {
	const { commentId } = req.params;

	comments.deleteComment(commentId);

	res.send({ commentId });
});

module.exports = router;
