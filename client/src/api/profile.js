import axios from 'axios';

const fetchProfile = userId => axios.post('/api/profile', { userId });

const editProfile = userInfo => axios.post('/api/profile/edit', { userInfo });

const registerProduct = productInfo => axios.post('/api/profile/register-product', { productInfo });

export { fetchProfile, editProfile, registerProduct };
