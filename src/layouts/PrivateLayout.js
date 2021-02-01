import React from 'react';
import { Header, NavBar } from 'components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoute } from 'router';
import { getPlatform } from 'utils/common';
import TekoID from 'teko-oauth2';

const PrivateLayout = () => {
  const platform = React.useMemo(() => {
    const os = getPlatform();
    if (os === 'ios') return 'iOS';
    if (os === 'android') return 'Android';
    return 'Desktop';
  }, []);

  return (
    <div className="App">
      <Header />
      {TekoID.user.isLoggedIn() ? (
        <div className={`App-container ${platform}`}>
          <NavBar />
          <div id="main" className="App-content">
            <Switch>
              {Object.values(privateRoute).map(({ path, component }) => (
                <Route exact key={path} path={path} component={component} />
              ))}
              <Redirect from="/" to={privateRoute.Home.path} />
            </Switch>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>You need to Login to see this page.</div>
      )}
    </div>
  );
};

export default PrivateLayout;
