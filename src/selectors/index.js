export const plock = (obj = {}, ...props) =>
  props.reduce(
    (acc, { name, newName }) => ({ ...acc, [newName || name]: obj[name] }),
    {}
  );

export const getIsAuthenticated = ({ auth }) =>
  plock(auth, { name: 'isAuthenticated' });

export const getSigninError = ({ auth }) =>
  plock(auth, { name: 'error', newName: 'errorMessage' });

export const getUsersData = ({ users }) =>
  plock(users, { name: 'data' }, { name: 'error' });
