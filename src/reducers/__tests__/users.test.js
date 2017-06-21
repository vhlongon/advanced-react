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
    const users = [
      { name: 'Deedee', company: 'Ramones', email: 'deedee@ramones.com', id: 1 },
      { name: 'Joey', company: 'Ramones', email: 'joey@ramones.com', id: 2 },
      { name: 'Jhonny', company: 'Ramones', email: 'jhonny@ramones.com', id: 3 },
      { name: 'Marc', company: 'Ramones', email: 'marc@ramones.com', id: 4 }
    ];
    const action = {
      type: FETCH_USERS,
      payload: {data: users}
    };
    deepFreeze(initialState);
    expect(usersReducer(initialState, action)).toEqual(users);
  });
  
});
