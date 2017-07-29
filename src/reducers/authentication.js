import {
  CLEAR_FORM,
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNIN_FAILURE
} from '../actions/types';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS: {
      return { ...state, isAuthenticated: true, error: null };
    }
    case SIGNOUT: {
      return { ...state, isAuthenticated: false };
    }
    case SIGNIN_FAILURE: {
      return { ...state, error: action.error };
    }
    case CLEAR_FORM: {
      console.log('CLEAR_FORM');
      return { ...state, error: null };
    }
    default: {
      return state;
    }
  }
};
