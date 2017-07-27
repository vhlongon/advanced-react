import { call, put, takeEvery } from 'redux-saga/effects';
import watchAllSagas, { watchAuthChange, authChange } from '../index';
import { CHANGE_AUTH } from '../../actions/types';
import history from '../../history';

describe('sagas', () => {
  it('watchAllSagas', () => {
    const gen = watchAllSagas();
    const result = gen.next();
    expect(result.value).not.toBeUndefined();
  });

  describe('watchAuthChange', () => {
    it('listens to CHANGE_AUTH', () => {
      const it = watchAuthChange();
      const result = it.next();
      expect(result.value).toEqual(takeEvery(CHANGE_AUTH, authChange));
    });
  });

  describe('authChange', () => {
    it('redirects to /resources when authenticated', () => {
      const isAuthenticated = true;
      const it = authChange();
      const mockHistory = jest.fn();
      it.next();
      it.next(isAuthenticated);
      const result = it.next();
      expect(result.value).toEqual(call(history.push, '/resources'));
    });
  });
});
