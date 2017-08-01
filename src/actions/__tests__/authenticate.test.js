import { shallow } from 'enzyme';
import {
  CHANGE_AUTH,
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNIN_SUBMIT,
  SIGNIN_FAILURE,
  SIGNUP_SUBMIT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../types';
import {
  signout,
  signinSuccess,
  signinSubmit,
  signinFailure,
  signupSuccess,
  signupFailure,
  signupSubmit
} from '../authenticate';

describe('authenticate actions', () => {
  describe('signout', () => {
    it('returns the correct type', () => {
      expect(signout().type).toEqual(SIGNOUT);
    });
  });

  describe('signinSuccess', () => {
    it('returns the correct type', () => {
      expect(signinSuccess().type).toEqual(SIGNIN_SUCCESS);
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

  describe('signupSubmit', () => {
    it('returns the correct type', () => {
      expect(signupSubmit().type).toEqual(SIGNUP_SUBMIT);
    });
  });

  describe('signupSuccess', () => {
    it('returns the correct type', () => {
      expect(signupSuccess().type).toEqual(SIGNUP_SUCCESS);
    });
  });

  describe('signupFailure', () => {
    it('returns the correct type', () => {
      expect(signupFailure().type).toEqual(SIGNUP_FAILURE);
    });
  });
});
