import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { privateRoute } from 'router';

const NavBar = () => {
  const { pathname } = useLocation();

  const handleClickLogout = () => {
    TekoID.user.logout();
  };

  const NavBarItem = ({ path, name, icon: type }) => {
    return (
      <Link
        className={`NavBar-item ${pathname === path ? 'active' : ''}`}
        to={path}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
        <Icon name={type} />
        <span className="label">{name}</span>
      </Link>
    );
  };

  return (
    <div className="NavBar">
      <NavBarItem {...privateRoute.Home} />
      <NavBarItem {...privateRoute.Notification} />
      <NavBarItem {...privateRoute.Setting} />
      {TekoID.user.isLoggedIn() && (
        <div className="NavBar-item" onClick={handleClickLogout}>
          <Icon name="log out" />
          <span className="label">Logout</span>
        </div>
      )}
    </div>
  );
};

export default NavBar;
