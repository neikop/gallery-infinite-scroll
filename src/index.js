import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import TekoID from 'teko-oauth2';

TekoID.init({
  clientId: '830736553a9e4e8fa900aa83dbd20e8e',
  scopes: ['openid', 'profile'],
  oauthDomain: 'https://oauth.test-1.tekoapis.net',
}).then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
