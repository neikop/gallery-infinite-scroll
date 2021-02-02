import React from 'react';
import { Button, Dropdown, Image } from 'semantic-ui-react';

const Header = () => {
  const handleClickLogin = () => {
    TekoID.user.login();
  };

  const handleClickLogout = () => {
    TekoID.user.logout();
  };

  return (
    <div className="App-Header-container">
      {TekoID.user.isLoggedIn() ? (
        <Dropdown
          direction="left"
          pointing="top right"
          icon={<Image avatar size="mini" src={TekoID.user.getUserInfo().picture} />}>
          <Dropdown.Menu style={{ width: 200, padding: '6px 0px' }}>
            <Dropdown.Item text="LOGOUT" onClick={handleClickLogout} />
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Button basic onClick={handleClickLogin}>
          LOGIN
        </Button>
      )}
    </div>
  );
};

export default Header;
