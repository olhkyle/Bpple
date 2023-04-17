const express = require('express');
const router = express.Router();

// 커뮤니티 글 정보 (댓글 정보 포함)
router.get('/:postid', (req, res) => {
	const { postid } = req.params;

	res.send({ hi: 'post' });
});

// 커뮤니티 글 작성 - 작성자 point + 10
router.post('/:userid', (req, res) => {
	const { userid } = req.params;

	res.send({ hi: 'hi' });
});

// 커뮤니티 글 수정
router.patch('/:postid', (req, res) => {
	const { postid } = req.params;

	res.send({ hi: 'hi' });
});

// 커뮤니티 글 삭제 - 작성자 point - 10
router.delete('/:postid', (req, res) => {
	const { postid } = req.params;

	res.send({ hi: 'hi' });
});

// 커뮤니티 글에 댓글 추가
router.post('/:postid/comment/:userid', (req, res) => {
	const { postid, userid } = req.params;

	res.send({ hi: 'hi' });
});

// 커뮤니티 글에 댓글 수정
router.patch('/:postid/comment/:commentid', (req, res) => {
	const { postid, commentid } = req.params;

	res.send({ hi: 'hi' });
});

// 커뮤니티 글에 댓글 삭제
router.delete('/:postid/comment/:commentid', (req, res) => {
	const { postid, commentid } = req.params;

	res.send({ hi: 'hi' });
});

module.exports = router;
