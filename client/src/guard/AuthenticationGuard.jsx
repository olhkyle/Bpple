import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import { auth } from '../api/auth';

/**
 * Protected Route
 */
const AuthenticationGuard = ({ redirectTo, element }) => {
  const { isFetched, error } = useQuery({
    queryKey: ['isAuthenticated'],
    queryFn: auth,
    retry: false,
    staleTime: 1000,
  });

  return isFetched ? error === null ? element : <Navigate to={redirectTo} /> : null;
};

export default AuthenticationGuard;
