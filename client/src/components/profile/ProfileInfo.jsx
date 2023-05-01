import React from 'react';
import Recoil from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { UserProfile, ProductList } from '.';
import userState from '../../recoil/atoms/userState';
import { myProfileQuery } from '../../queries';

const ProfileInfo = () => {
  const loginUser = Recoil.useRecoilValue(userState);

  const { data: userInfo } = useQuery(myProfileQuery(loginUser.email));

  return (
    <>
      <ProductList products={userInfo.products} />
      <UserProfile {...loginUser} {...userInfo} />
    </>
  );
};

export default ProfileInfo;
