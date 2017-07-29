import {
  CHANGE_AUTH,
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNIN_FAILURE
} from '../actions/types';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS: {
      return { ...state, isAuthenticated: true };
    }
    case SIGNOUT: {
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
