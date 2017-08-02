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
      const initialState = { payload: [], error: null };
      const data = 'data';
      const newState = { payload: data, error: null };
      const action = fetchUsersSuccess(data);
      deepFreeze(initialState);
      expect(usersReducer(initialState, action)).toEqual(newState);
    });
  });

  describe('when fetch request is bad', () => {
    it('handles action with type FETCH_USERS_FAILURE', () => {
      const initialState = { payload: [], error: null };
      const error = 'error';
      const newState = { payload: [], error: error };
      const action = fetchUsersFailure(error);
      deepFreeze(initialState);
      expect(usersReducer(initialState, action)).toEqual(newState);
    });
  });
});
