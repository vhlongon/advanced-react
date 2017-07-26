import authenticate from '../../actions/authenticate';
import authReducer from '../authentication';
import deepFreeze from 'deep-freeze';

describe('authentication', () => {
  it('returns the initial state', () => {
    const initialState = false;
    deepFreeze(initialState);
    expect(authReducer(initialState, {})).toEqual(initialState);
  });
  it('handles action with type CHANGE_AUTH', () => {
    const initialState = false;
    const action = authenticate(true);
    const newState = true;
    deepFreeze(initialState);

    expect(authReducer(initialState, action)).toEqual(newState);
  });
});
