import React from 'react';
import { Header, NavBar } from 'components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoute } from 'router';
import { getPlatform } from 'utils/common';

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
      <div className={`App-container ${platform}`}>
        <NavBar />
        <div className="App-content">
          <div>{platform}</div>
          <Switch>
            {Object.values(privateRoute).map(({ path, component }) => (
              <Route exact key={path} path={path} component={component} />
            ))}
            <Redirect from="/" to={privateRoute.Home.path} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
