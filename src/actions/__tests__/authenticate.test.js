import { shallow } from 'enzyme';
import {
  CHANGE_AUTH,
  AUTH_USER,
  UNAUTH_USER,
  SIGNIN_SUBMIT,
  SIGNIN_FAILURE
} from '../types';
import {
  changeAuth,
  authUser,
  unauthUser,
  signinSubmit,
  signinFailure
} from '../authenticate';

describe('chamgeAuthenticate', () => {
  it('returns the correct type', () => {
    expect(changeAuth().type).toEqual(CHANGE_AUTH);
  });

  describe('authUser', () => {
    it('returns the correct type', () => {
      expect(authUser().type).toEqual(AUTH_USER);
    });
  });

  describe('unauthUser', () => {
    it('returns the correct type', () => {
      expect(unauthUser().type).toEqual(UNAUTH_USER);
    });
  });

  describe('signinSubmit', () => {
    it('returns the correct type', () => {
      expect(signinSubmit().type).toEqual(SIGNIN_SUBMIT);
    });
    it('returns the correct type', () => {
      const values = 'values';
      expect(signinSubmit(values).payload).toEqual(values);
    });
  });

  describe('siginFailure', () => {
    it('returns the correct type', () => {
      expect(signinFailure().type).toEqual(SIGNIN_FAILURE);
    });
  });
});
