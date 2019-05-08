const url = window.location.origin;

module.exports = {
  authority: 'https://dev.account.gccollab.ca/openid',
  client_id: '016485',
  client_secret:
  '54e3d43ef8a774d8b3bacd9fa9541e512d3f049b3a7d62a218662962',
  scope: 'openid modify_profile email profile',
  post_logout_redirect_uri: `${url}/#!logout`,
  redirect_uri: `${url}/#!callback`,
  silent_redirect_uri: `${url}/#!silent`,
};
