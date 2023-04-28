import axios from 'axios';

const getPost = postId => axios.get(`/api/post/${postId}`);

const createNewPost = postInfo => axios.post('/api/post', { postInfo });

const updatePost = (postInfo, postId) => axios.patch(`/api/post/${postId}`, { postInfo });

const addComment = ({ postId, commentInfo }) => axios.post(`/api/post/${postId}/comment`, { commentInfo });

const editComment = ({ postId, commentId, commentInfo }) =>
  axios.patch(`/api/post/${postId}/comment/${commentId}`, { commentInfo });

const removeComment = ({ postId, commentId }) => axios.delete(`/api/post/${postId}/comment/${commentId}`);

const getComments = ({ param: postId, pageParam }) => axios.get(`/api/post/${postId}/comment?page=${pageParam}`);

const checkIsUseFul = ({ postId, commentId, useful }) =>
  axios.patch(`/api/post/${postId}/comment/useful/${commentId}`, { useful });

export { getPost, createNewPost, updatePost, addComment, editComment, removeComment, getComments, checkIsUseFul };
