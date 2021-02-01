import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { privateRoute } from 'router';

const NavBar = () => {
  const { pathname } = useLocation();
  const { logout } = useAuth0();

  const handleClickLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const NavBarItem = ({ path, name, icon: type }) => {
    return (
      <Link className={`NavBar-item ${pathname === path ? 'active' : ''}`} to={path}>
        <i className={`icon ${type}`} />
        <span className="label">{name}</span>
      </Link>
    );
  };

  return (
    <div className="NavBar">
      <NavBarItem {...privateRoute.Home} />
      <NavBarItem {...privateRoute.Notification} />
      <NavBarItem {...privateRoute.Setting} />
      <div className="NavBar-item" onClick={handleClickLogout}>
        <i className="icon log out" />
        <span className="label">Logout</span>
      </div>
    </div>
  );
};

export default NavBar;
