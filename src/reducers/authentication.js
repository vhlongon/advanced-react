import {
  CLEAR_FORM_ERROR,
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNOUT,
  SIGNIN_FAILURE,
  SIGNUP_FAILURE
} from '../actions/types';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS: {
      return { ...state, isAuthenticated: true, error: null };
    }
    case SIGNOUT: {
      return { ...state, isAuthenticated: false, error: null };
    }
    case SIGNIN_FAILURE:
    case SIGNUP_FAILURE: {
      return { ...state, error: action.error };
    }
    case CLEAR_FORM_ERROR: {
      return { ...state, error: null };
    }
    default: {
      return state;
    }
  }
};
