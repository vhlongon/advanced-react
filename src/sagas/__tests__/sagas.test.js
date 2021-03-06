import { call, put, takeLatest } from 'redux-saga/effects';
import watchAllSagas, {
  watchSignout,
  watchSignin,
  watchSignup,
  watchFetchUsers,
  formSignout,
  formSignin,
  formSignup,
  usersFetch
} from '../index';
import { setItemToLocalStorage, removeItemFromLocalStorage } from '../utils';
import {
  SIGNIN_SUBMIT,
  SIGNUP_SUBMIT,
  SIGNOUT,
  FETCH_USERS_REQUEST
} from '../../actions/types';
import {
  signinSuccess,
  signinFailure,
  signupSuccess,
  signupFailure,
  signout,
  clearFormError
} from '../../actions/authenticate';

import { fetchUsersSuccess, fetchUsersFailure } from '../../actions/fetchUsers';
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

  describe('watchSignup', () => {
    it('listens to SIGNUP_SUBMIT', () => {
      const it = watchSignup();
      const result = it.next();
      expect(result.value).toEqual(takeLatest(SIGNUP_SUBMIT, formSignup));
    });
  });

  describe('watchFetchUsers', () => {
    it('listens to FETCH_USERS_REQUEST', () => {
      const it = watchFetchUsers();
      const result = it.next();
      expect(result.value).toEqual(takeLatest(FETCH_USERS_REQUEST, usersFetch));
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
        const result = it.next(res);
        expect(result.value).toEqual(call(setItemToLocalStorage, token));
      });

      it('dispaches signinSuccess', () => {
        const token = 'token';
        const res = { data: { token } };
        const payload = { email: 'email', passord: 'password' };
        const it = formSignin({
          payload
        });
        it.next();
        it.next(res);
        const result = it.next();
        expect(result.value).toEqual(put(signinSuccess()));
      });

      it('redirects to /users', () => {
        const token = 'token';
        const res = { data: { token } };
        const payload = { email: 'email', passord: 'password' };
        const it = formSignin({
          payload
        });
        it.next();
        it.next(res);
        it.next();
        const result = it.next();
        expect(result.value).toEqual(call(history.push, '/users'));
      });
    });

    describe('when the request is bad', () => {
      it('dispatches signinFailure', () => {
        const errorMessage = 'error message';
        const error = { response: { data: errorMessage } };
        const payload = { email: 'bad email', passord: 'bad password' };
        const it = formSignin({ payload });
        it.next();
        const result = it.throw(error);
        expect(result.value).toEqual(put(signinFailure(errorMessage)));
      });
      it('dispatches clearFormError', () => {
        const errorMessage = 'error message';
        const error = { response: { data: errorMessage } };
        const payload = { email: 'bad email', passord: 'bad password' };
        const it = formSignin({ payload });
        it.next();
        it.throw(error);
        it.next();
        const result = it.next();
        expect(result.value).toEqual(put(clearFormError()));
      });
    });
  });

  describe('formSignup', () => {
    describe('when the request goes through', () => {
      it('saves token to localStorage', () => {
        const token = 'token';
        const res = { data: { token } };
        const payload = { email: 'email', passord: 'password' };
        const it = formSignup({ payload });
        it.next();
        const result = it.next(res);
        expect(result.value).toEqual(call(setItemToLocalStorage, token));
      });

      it('dispaches signupSuccess', () => {
        const token = 'token';
        const res = { data: { token } };
        const payload = { email: 'email', passord: 'password' };
        const it = formSignup({
          payload
        });
        it.next();
        it.next(res);
        const result = it.next();
        expect(result.value).toEqual(put(signupSuccess()));
      });

      it('redirects to /users', () => {
        const token = 'token';
        const res = { data: { token } };
        const payload = { email: 'email', passord: 'password' };
        const it = formSignup({
          payload
        });
        it.next();
        it.next(res);
        it.next();
        const result = it.next();
        expect(result.value).toEqual(call(history.push, '/users'));
      });
    });
    describe('when the request is bad', () => {
      it('dispatches signupFailure', () => {
        const errorMessage = 'error message';
        const error = { response: { data: errorMessage } };
        const payload = { email: 'bad email', passord: 'bad password' };
        const it = formSignup({ payload });
        it.next();
        const result = it.throw(error);
        expect(result.value).toEqual(put(signupFailure(errorMessage)));
      });
      it('dispatches clearFormError', () => {
        const errorMessage = 'error message';
        const error = { response: { data: errorMessage } };
        const payload = { email: 'bad email', passord: 'bad password' };
        const it = formSignup({ payload });
        it.next();
        it.throw(error);
        it.next();
        const result = it.next();
        expect(result.value).toEqual(put(clearFormError()));
      });
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

  describe('usersFetch', () => {
    describe('when the request goes through', () => {
      it('dispatches fetchUsersSuccess', () => {
        const data = 'data';
        const res = { data };
        const it = usersFetch();
        it.next();
        const result = it.next(res);
        expect(result.value).toEqual(put(fetchUsersSuccess(data)));
      });
    });
    describe('when the request is bad', () => {
      it('dispatches fetchUsersFailure', () => {
        const errorMessage = 'error message';
        const error = { response: { data: errorMessage } };
        const it = usersFetch();
        it.next();
        const result = it.throw(error);
        expect(result.value).toEqual(put(fetchUsersFailure(errorMessage)));
      });
    });
  });
});
