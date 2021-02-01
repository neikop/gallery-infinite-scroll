import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="dev-l360v0k5.auth0.com"
    clientId="IJQzNy6Mob4Z9OixqNtr11KdlXchShpZ"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root'),
);
