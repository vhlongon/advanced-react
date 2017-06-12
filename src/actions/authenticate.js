import { CHANGE_AUTH } from './types';

export default (isLoggedIn, cb) => {
  setTimeout(() => cb && cb(), 10);
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
