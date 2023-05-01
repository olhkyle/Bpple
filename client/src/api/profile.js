import axios from 'axios';

const fetchProfile = () => axios.post('/api/profile');

const editProfile = userInfo => axios.post('/api/profile/edit', { userInfo });

const registerProduct = productInfo => axios.post('/api/profile/register-product', { productInfo });

const fetchUserProfile = nickName => axios.get(`/api/profile/community/${nickName}`);

export { fetchProfile, editProfile, registerProduct, fetchUserProfile };
