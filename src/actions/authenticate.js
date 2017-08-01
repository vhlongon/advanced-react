import {
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNIN_SUBMIT,
  SIGNIN_FAILURE,
  SIGNUP_SUBMIT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  CLEAR_FORM
} from './types';

export const signinSubmit = values => ({
  type: SIGNIN_SUBMIT,
  payload: values
});

export const signinSuccess = () => ({
  type: SIGNIN_SUCCESS
});

export const signinFailure = error => ({
  type: SIGNIN_FAILURE,
  error
});

export const signupSubmit = values => ({
  type: SIGNUP_SUBMIT,
  payload: values
});

export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS
});

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  error
});

export const signout = () => ({
  type: SIGNOUT
});

export const clearForm = () => ({
  type: CLEAR_FORM
});
