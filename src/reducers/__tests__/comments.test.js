import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';
import deepFreeze from 'deep-freeze';

describe('comments reducer', () => {
  it('handles action with unknown type', () => {
    const initialState = [];
    deepFreeze(initialState);
    expect(commentsReducer(undefined, {})).toEqual(initialState);
  });
  it('handles action with type SAVE_COMMENT', () => {
    const initialState = [];
    const comment = 'this is a comment';
    const action = {
      type: SAVE_COMMENT,
      payload: comment
    };
    deepFreeze(initialState);
    const newState = [comment];
    expect(commentsReducer(initialState, action)).toEqual(newState);
  });
});
