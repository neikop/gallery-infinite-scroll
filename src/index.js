import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'teko-oauth2';

TekoID.init({
  clientId: '830736553a9e4e8fa900aa83dbd20e8e',
  oauthDomain: 'https://oauth.test-1.tekoapis.net',
  scopes: ['openid', 'profile'],
}).then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
