import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Image } from 'semantic-ui-react';

const Header = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  const handleClickLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="App-Header-container">
      {isAuthenticated ? (
        <>
          <Image avatar src={user.picture} />
        </>
      ) : (
        <>
          <Button onClick={handleClickLogin}>LOGIN</Button>
        </>
      )}
    </div>
  );
};

export default Header;
