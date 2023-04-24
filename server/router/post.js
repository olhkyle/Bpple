const express = require('express');
const router = express.Router();
const posts = require('../mock-data/posts');
const comments = require('../mock-data/comments');
const users = require('../mock-data/users');

// post 목록 전체 가져오기 test 용)
router.get('/', (req, res) => {
	res.send({ posts: posts.getPosts() });
});

// comments 목록 전체 가져오기
router.get('/comments', (req, res) => {
	res.send({ comments: comments.getComments() });
});

// post 목록 검색
router.get('/search', (req, res) => {
	const { keyword } = req.query;

	res.send({ posts: posts.searchPost(keyword) });
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

// useful 댓글 설정
router.patch('/:postId/comment/useful/:commentId', (req, res) => {
	const { commentId, postId } = req.params;
	const { author } = posts.getPost(postId);

	comments.updateUsefulComment(commentId);
	posts.updateCompletedPost(postId);
	users.plusPoint(author, 20);

	res.send({ commentId, postId });
});

// 커뮤니티 글에 댓글 삭제
router.delete('/:postid/comment/:commentId', (req, res) => {
	const { commentId } = req.params;

	comments.deleteComment(commentId);

	res.send({ commentId });
});

module.exports = router;
