import axios from 'axios';

const getSearchedPosts = (keyword = '') => axios.get(`api/posts/search?keyword=${keyword}`);

const getMyPosts = userId => axios.post('/api/posts/me', { userId });

export { getSearchedPosts, getMyPosts };
