import {
  CHANGE_AUTH,
  AUTH_USER,
  UNAUTH_USER,
  SIGNIN_SUBMIT,
  SIGNIN_FAILURE
} from './types';

export const changeAuth = () => ({
  type: CHANGE_AUTH
});

export const signinSubmit = values => ({
  type: SIGNIN_SUBMIT,
  payload: values
});

export const signinFailure = error => ({
  type: SIGNIN_FAILURE,
  error
});

export const authUser = () => ({
  type: AUTH_USER
});

export const unauthUser = () => ({
  type: UNAUTH_USER
});
