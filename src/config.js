export default {
  oidc: {
    issuer: 'https://dev-13684401.okta.com/oauth2/default',
    clientId: '0oa94joc84rikGcd95d7',
    scopes: ['openid', 'profile', 'email'],
    redirectUri: 'ttp://localhost:3001/login/callback'
  },
  widget: {
    issuer: 'https://dev-13684401.okta.com/oauth2/default',
    clientId: '0oa94joc84rikGcd95d7',
    redirectUri: 'ttp://localhost:3001/login/callback',
    scopes: ['openid', 'profile', 'email'],
  }
};
