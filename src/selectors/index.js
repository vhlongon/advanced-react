export const plock = (obj = {}, prop, newName) => ({
  [newName || prop]: obj[prop]
});

export const getIsAuthenticated = ({ auth }) => plock(auth, 'isAuthenticated');

export const getSigninError = ({ auth }) => plock(auth, 'error', 'errorMessage');
