import { FETCH_USERS } from '../actions/types';

export default (state = [], action) => {
  const { type } = action;
  switch (type) {
    case FETCH_USERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
