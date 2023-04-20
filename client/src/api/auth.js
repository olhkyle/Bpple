import axios from 'axios';

const authToken = async () => {
  const { data } = await axios.get('api/auth');

  return data;
};

const checkEmail = async email => {
  const { data } = await axios.post('api/checkemail', { email });

  return data;
};

const checkNickName = async nickName => {
  const { data } = await axios.post('api/checknickname', { nickName });

  return data;
};

const singIn = async userInfo => {
  const { data } = await axios.post('api/signin', { userInfo });

  return data;
};

const signUp = async userInfo => {
  const { data } = await axios.post('api/signup', { userInfo });

  return data;
};

export { authToken, checkEmail, checkNickName, singIn, signUp };
