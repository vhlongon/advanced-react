import {
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNIN_SUBMIT,
  SIGNIN_FAILURE
} from './types';

export const signinSubmit = values => ({
  type: SIGNIN_SUBMIT,
  payload: values
});

export const signinFailure = error => ({
  type: SIGNIN_FAILURE,
  error
});

export const signinSuccess = () => ({
  type: SIGNIN_SUCCESS
});

export const signOut = () => ({
  type: SIGNOUT
});
