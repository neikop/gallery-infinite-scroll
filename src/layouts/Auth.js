import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { browserHistory } from 'utils/history';

const Auth = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    browserHistory.replace('/');
  } else {
    loginWithRedirect();
  }

  return <div>Loading ...</div>;
};

export default Auth;
