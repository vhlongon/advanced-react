import { call, put, takeLatest } from 'redux-saga/effects';
import watchAllSagas, {
  watchSignout,
  watchSignin,
  formSignout,
  formSignin,
  setItemToLocalStorage,
  removeItemFromLocalStorage
} from '../index';
import { CHANGE_AUTH, SIGNIN_SUBMIT, SIGNOUT } from '../../actions/types';
import {
  signinSuccess,
  signinFailure,
  signout
} from '../../actions/authenticate';
import history from '../../history';

describe('root saga', () => {
  it('watchAllSagas', () => {
    const gen = watchAllSagas();
    const result = gen.next();
    expect(result.value).not.toBeUndefined();
  });

  describe('watchSignout', () => {
    it('listens to SIGNOUT', () => {
      const it = watchSignout();
      const result = it.next();
      expect(result.value).toEqual(takeLatest(SIGNOUT, formSignout));
    });
  });

  describe('watchSignin', () => {
    it('listens to SIGNIN_SUBMIT', () => {
      const it = watchSignin();
      const result = it.next();
      expect(result.value).toEqual(takeLatest(SIGNIN_SUBMIT, formSignin));
    });
  });

  describe('formSignout', () => {
    it('redirects to /', () => {
      const it = formSignout();
      const result = it.next();
      expect(result.value).toEqual(call(history.push, '/'));
    });
    it('removes token to localStorage', () => {
      const it = formSignout();
      it.next();
      const result = it.next();
      expect(result.value).toEqual(call(removeItemFromLocalStorage));
    });
  });

  describe('formSignin', () => {
    describe('when the request goes through', () => {
      it('saves token to localStorage', () => {
        const token = 'token';
        const res = { data: { token } };
        const payload = { email: 'email', passord: 'password' };
        const it = formSignin({ payload });
        it.next();
        it.next(res);
        const result = it.next();
        expect(result.value).toEqual(call(setItemToLocalStorage, token));
      });

      it('dispaches signinSuccess', () => {
        const token = 'token';
        const res = { data: { token } };
        const payload = { email: 'email', passord: 'password' };
        const it = formSignin({
          payload,
          resolve: jest.fn(),
          reject: jest.fn()
        });
        it.next();
        it.next(res);
        it.next();
        const result = it.next();
        expect(result.value).toEqual(put(signinSuccess()));
      });

      it('redirects to /resources', () => {
        const token = 'token';
        const res = { data: { token } };
        const payload = { email: 'email', passord: 'password' };
        const it = formSignin({
          payload,
          resolve: jest.fn(),
          reject: jest.fn()
        });
        it.next();
        it.next(res);
        it.next();
        it.next();
        const result = it.next();
        expect(result.value).toEqual(call(history.push, '/resources'));
      });
    });
  });

  describe('when the request is bad', () => {
    it('dispatches signinFailure', () => {
      const token = 'token';
      const errorMessage = 'error message';
      const error = new Error('error');
      const payload = { email: 'bad email', passord: 'bad password' };
      const it = formSignin({ payload });
      it.next();
      it.next(error);
      const result = it.next(errorMessage);
      expect(result.value).toEqual(put(signinFailure(errorMessage)));
    });
  });
});
