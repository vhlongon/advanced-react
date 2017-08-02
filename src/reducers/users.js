import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/types';
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS: {
      return { ...state, payload: action.payload };
    }
    case FETCH_USERS_FAILURE: {
      return { ...state, error: action.error };
    }
    default:
      return state;
  }
};
