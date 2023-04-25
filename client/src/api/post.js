import axios from 'axios';

const createNewPost = postInfo => axios.post('/api/post', { postInfo });

const updatePost = (postInfo, postId) => axios.patch(`/api/post/${postId}`, { postInfo });

export { createNewPost, updatePost };
