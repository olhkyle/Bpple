import React from 'react';
import { Navigate, useRouteError } from 'react-router-dom';
import { SIGNIN_PATH } from '../routes/routePaths';

const RootError = () => {
  const error = useRouteError();

  if (error.response.status === 403) {
    return <Navigate to={SIGNIN_PATH} />;
  }

  return <Navigate to={'*'} />;
};

export default RootError;
