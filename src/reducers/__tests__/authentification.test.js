import {
  signinSuccess,
  signupSuccess,
  signout,
  signinFailure,
  signupFailure
} from '../../actions/authenticate';
import authReducer from '../authentication';
import deepFreeze from 'deep-freeze';

describe('authentication', () => {
  it('returns the initial state', () => {
    const initialState = { isAuthenticated: false, payload: null };
    deepFreeze(initialState);
    expect(authReducer(initialState, {})).toEqual(initialState);
  });

  describe('when the signin request is good', () => {
    it('handles action with type SIGNIN_SUCCESS', () => {
      const initialState = {};
      const action = signinSuccess();
      const newState = { isAuthenticated: true, error: null };
      deepFreeze(initialState);

      expect(authReducer(initialState, action)).toEqual(newState);
    });
  });

  describe('when the signin request is bad', () => {
    it('handles action with type SIGNIN_FAILURE', () => {
      const error = 'error';
      const initialState = {};
      const action = signinFailure(error);
      const newState = { error };
      deepFreeze(initialState);

      expect(authReducer(initialState, action)).toEqual(newState);
    });
  });

  describe('when the signup request is good', () => {
    it('handles action with type SIGNUP_SUCCESS', () => {
      const initialState = {};
      const action = signupSuccess();
      const newState = { isAuthenticated: true, error: null };
      deepFreeze(initialState);

      expect(authReducer(initialState, action)).toEqual(newState);
    });
  });

  describe('when the signup request is bad', () => {
    it('handles action with type SIGNUP_FAILURE', () => {
      const error = 'error';
      const initialState = {};
      const action = signupFailure(error);
      const newState = { error };
      deepFreeze(initialState);

      expect(authReducer(initialState, action)).toEqual(newState);
    });
  });

  it('handles action with type SIGNOUT', () => {
    const initialState = { isAuthenticated: undefined };
    const action = signout();
    const newState = { isAuthenticated: false, error: null };
    deepFreeze(initialState);

    expect(authReducer(initialState, action)).toEqual(newState);
  });
});
