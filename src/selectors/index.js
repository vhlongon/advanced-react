import { compose } from 'recompose';

export const plock = (obj = {}, prop) => ({[prop]: obj[prop]})

export const getIsAuthenticated = ({ auth }) => plock(auth, 'isAuthenticated');
