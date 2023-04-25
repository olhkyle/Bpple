import axios from 'axios';

const fetchProfile = userId => axios.post('/api/profile', { userId });

const editProfile = userInfo => axios.post('/api/profile/edit', { userInfo });

export { fetchProfile, editProfile };
