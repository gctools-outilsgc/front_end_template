import React from 'react';

const code = `const url = window.location.origin;

module.exports = {
  authority: 'https://your.OpenID.provider/openid',
  client_id: '123456',
  client_secret: 'shhhhhhhh-its-a-secret-to-everyone-replace-me',
  scope: 'openid YOUR_SCOPES_HERE',
  post_logout_redirect_uri: '${'$'}{${'url'}}/#!logout',
  redirect_uri: '${'$'}{${'url'}}/#!callback',
  silent_redirect_uri: '${'$'}{${'url'}}/#!silent',
};`;


function ConfigFileCode() {
  return (
    <pre>
      <code style={{ color: '#c60f5e' }}>
        { code }
      </code>
    </pre>
  );
}

export default ConfigFileCode;
