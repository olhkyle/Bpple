import axios from 'axios';

const fetchProfile = userId => axios.post('/api/profile', { userId });

const editProfile = async userInfo => axios.post('/api/profile/edit', { userInfo });

export { fetchProfile, editProfile };
