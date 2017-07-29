import {
  authUser,
  changeAuth,
  unauthUser,
  signinFailure
} from '../../actions/authenticate';
import authReducer from '../authentication';
import deepFreeze from 'deep-freeze';

describe('authentication', () => {
  it('returns the initial state', () => {
    const initialState = { isAuthenticated: false, payload: null };
    deepFreeze(initialState);
    expect(authReducer(initialState, {})).toEqual(initialState);
  });

  describe('when the auth request is good', () => {
    it('handles action with type AUTH_USER', () => {
      const initialState = {};
      const action = authUser();
      const newState = { isAuthenticated: true };
      deepFreeze(initialState);

      expect(authReducer(initialState, action)).toEqual(newState);
    });
  });

  describe('when the auth request is bad', () => {
    it('handles action with type SIGNIN_FAILURE', () => {
      const error = 'error';
      const initialState = {};
      const action = signinFailure(error);
      const newState = { error };
      deepFreeze(initialState);

      expect(authReducer(initialState, action)).toEqual(newState);
    });
  });

  it('handles action with type UNAUTH_USER', () => {
    const initialState = { isAuthenticated: undefined };
    const action = unauthUser();
    const newState = { isAuthenticated: false };
    deepFreeze(initialState);

    expect(authReducer(initialState, action)).toEqual(newState);
  });

  describe('CHANGE_AUTH', () => {
    it('handles action when not authenticated', () => {
      const initialState = { isAuthenticated: false };
      const action = changeAuth();
      const newState = { isAuthenticated: true };
      deepFreeze(initialState);

      expect(authReducer(initialState, action)).toEqual(newState);
    });

    it('handles action when not authenticated', () => {
      const initialState = { isAuthenticated: true };
      const action = changeAuth();
      const newState = { isAuthenticated: false };
      deepFreeze(initialState);

      expect(authReducer(initialState, action)).toEqual(newState);
    });
  });
});
