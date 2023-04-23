import axios from 'axios';

export const getSearchedPosts = (keyword = '') => axios.get(`api/post/search?keyword=${keyword}`);
