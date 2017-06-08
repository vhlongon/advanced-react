import { SAVE_COMMENT } from '../types';
import { saveComment } from '../index';

describe('Action creators', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).toEqual(SAVE_COMMENT);
    });
    it('has the correct payload', () => {
      const comment = 'this is a comment';
      const action = saveComment(comment);
      expect(action.payload).toEqual(comment);
    });
  });
});
