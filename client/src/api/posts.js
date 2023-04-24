import axios from 'axios';

const getSearchedPosts = (keyword = '') => axios.get(`/api/post/search?keyword=${keyword}`);
const getMyPosts = () => {};

export { getSearchedPosts, getMyPosts };
