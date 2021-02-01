import React from 'react';
import { Header, NavBar } from 'components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoute } from 'router';

const PrivateLayout = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-container Android">
        <NavBar />
        <div className="App-content">
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
