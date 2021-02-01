import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'utils/history';
import { PrivateLayout } from 'layouts';
import 'App.scss';

const HelloWorld = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path="/" component={PrivateLayout} />
      </Switch>
    </Router>
  );
};

export default HelloWorld;
