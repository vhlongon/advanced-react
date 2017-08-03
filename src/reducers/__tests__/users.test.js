import usersReducer from '../users';
import deepFreeze from 'deep-freeze';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure
} from '../../actions/fetchUsers';

describe('usersReducer', () => {
  it('returns the initial state', () => {
    const initialState = { payload: [], error: null };
    deepFreeze(initialState);
    expect(usersReducer(initialState, {})).toEqual(initialState);
  });

  describe('when fetch request is good', () => {
    it('handles action with type FETCH_USERS_REQUEST', () => {
      const initialState = { payload: [], error: null, isLoading: false };
      const data = 'data';
      const newState = { payload: data, error: null, isLoading: false };
      const action = fetchUsersSuccess(data);
      deepFreeze(initialState);
      expect(usersReducer(initialState, action)).toEqual(newState);
    });
  });

  describe('when fetch request is bad', () => {
    it('handles action with type FETCH_USERS_FAILURE', () => {
      const initialState = { payload: [], error: null, isLoading: false };
      const error = 'error';
      const newState = { payload: [], error: error, isLoading: false };
      const action = fetchUsersFailure(error);
      deepFreeze(initialState);
      expect(usersReducer(initialState, action)).toEqual(newState);
    });
  });
});
