import React from 'react';
import Recoil from 'recoil';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import userState from '../recoil/atoms/userState';
import { fetchProfile } from '../api/profile';
import { UserProfile, ProductList } from '../components/profile';

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

  const query = profileQuery(loginUser.email);
  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

const Title = styled.h1`
  color: var(--font-color);
  text-align: center;
  font-size: 3.5rem;
  padding: 50px 0;
`;

const Profile = () => {
  const loginUser = Recoil.useRecoilValue(userState);

  const { data: userInfo } = useQuery(profileQuery(loginUser.email));

  return (
    <>
      <Title>{loginUser.nickName}님, 안녕하세요.</Title>
      <ProductList products={userInfo.products} />
      <UserProfile {...loginUser} {...userInfo} />
    </>
  );
};

export { profileLoader, profileQuery };
export default Profile;
