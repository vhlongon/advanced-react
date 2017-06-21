import deepFreeze from 'deep-freeze';
import usersReducer from '../users';
import { FETCH_USERS } from '../../actions/types';

describe('users', () => {
  it('should return the initial state for unknown actions or if state is not provided', () => {
    const initialState = [];
    deepFreeze(initialState);
    expect(usersReducer(initialState, {})).toEqual(initialState);
  });
  
  it('should return a list of users for FETCH_USERS action', () => {
    const initialState = [];
    const users = ['user1', 'user2', 'user3']
    const action = {
      type: FETCH_USERS,
      payload: users
    };
    deepFreeze(initialState);
    expect(usersReducer(initialState, action)).toEqual(users);
  });
  
});
