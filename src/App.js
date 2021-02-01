import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'utils/history';
import { useAuth0 } from '@auth0/auth0-react';
import { PrivateLayout } from 'layouts';
import { Loading } from 'components';
import { getPlatform } from 'utils/common';
import 'App.scss';

const HelloWorld = () => {
  const { isLoading } = useAuth0();

  console.log(getPlatform());

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path="/" component={PrivateLayout} />
      </Switch>
    </Router>
  );
};

export default HelloWorld;
