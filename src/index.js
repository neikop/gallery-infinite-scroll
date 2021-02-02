import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'teko-oauth2';

TekoID.init({
  clientId: 'ac644043373642639c78b6ce4a921662',
  oauthDomain: 'https://oauth.teko.vn',
  scopes: ['openid', 'profile'],
}).then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
