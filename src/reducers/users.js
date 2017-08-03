import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../actions/types';

const initialState = {
  data: [],
  isLoading: false,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case FETCH_USERS_SUCCESS: {
      return { ...state, payload: action.payload, isLoading: false };
    }
    case FETCH_USERS_FAILURE: {
      return { ...state, error: action.error, isLoading: false };
    }
    default:
      return state;
  }
};
