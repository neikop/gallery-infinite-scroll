import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import TekoID from 'teko-oauth2';

const Header = () => {
  const handleClickLogin = () => {
    TekoID.user.login();
  };

  return (
    <div className="App-Header-container">
      {TekoID.user.isLoggedIn() ? (
        <>
          <Image avatar src={TekoID.user.getUserInfo().picture} />
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
