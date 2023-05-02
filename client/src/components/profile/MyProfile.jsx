import React from 'react';
import Recoil from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { Profile, MyProductList } from '.';
import userState from '../../recoil/atoms/userState';
import { myProfileQuery } from '../../queries';

const MyProfile = () => {
  const loginUser = Recoil.useRecoilValue(userState);

  const { data: userInfo } = useQuery(myProfileQuery(loginUser.email));

  return (
    <>
      <MyProductList products={userInfo.products} />
      <Profile {...loginUser} {...userInfo} />
    </>
  );
};

export default MyProfile;
