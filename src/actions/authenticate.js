import { CHANGE_AUTH, AUTH_USER, UNAUTH_USER } from './types';

export const changeAuth = () => ({
  type: CHANGE_AUTH
});

export const authUser = () => ({
  type: AUTH_USER
});

export const unauthUser = () => ({
  type: UNAUTH_USER
});
