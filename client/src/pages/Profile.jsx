import React from 'react';
import Recoil from 'recoil';
import { useQuery } from '@tanstack/react-query';
import userState from '../recoil/atoms/userState';
import { fetchProfile } from '../api/profile';

const staleTime = 3000;

/**
 * query
 */
const profileQuery = userId => ({
  queryKey: ['profile', userId],
  queryFn: async () => {
    const { data } = await fetchProfile(userId);
    return data;
  },
  staleTime,
});

/**
 * loader
 */
const profileLoader = queryClient => async () => {
  const loginUser = Recoil.useRecoilValue(userState);
  console.log(loginUser);

  const query = profileQuery(loginUser.email);
  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

const Profile = () => {
  const loginUser = Recoil.useRecoilValue(userState);
  console.log('loginUser', loginUser);

  const { data: userInfo } = useQuery(profileQuery(loginUser.email));
  console.log('userInfo', userInfo);

  return (
    <>
      <h1>{loginUser.nickName}님, 안녕하세요.</h1>
      <h2>고객님의 기기</h2>
      <h2>프로필 정보</h2>
    </>
  );
};

export { profileLoader };
export default Profile;
