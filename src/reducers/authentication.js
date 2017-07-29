import {
  CHANGE_AUTH,
  AUTH_USER,
  UNAUTH_USER,
  SIGNIN_FAILURE
} from '../actions/types';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER: {
      return { ...state, isAuthenticated: true };
    }
    case UNAUTH_USER: {
      return { ...state, isAuthenticated: false };
    }
    case SIGNIN_FAILURE: {
      return { ...state, error: action.error };
    }
    case CHANGE_AUTH: {
      return { ...state, isAuthenticated: !state.isAuthenticated };
    }
    default: {
      return state;
    }
  }
};
