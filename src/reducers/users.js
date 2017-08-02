import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/types';

const initialState = {
  data: [],
  error: null
};
export default (state = initialState, action) => {
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
