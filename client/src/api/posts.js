import axios from 'axios';

const getSearchedPosts = ({ keyword = '', category }) =>
  axios.get(`/api/posts/search?keyword=${keyword}&category=${category}`);

const getPostsByCategory = ({ param: category, pageParam }) =>
  axios.get(`/api/posts?category=${category}&page=${pageParam}`);

const getMyPosts = userId => axios.post('/api/posts/me', { userId });

export { getSearchedPosts, getPostsByCategory, getMyPosts };
