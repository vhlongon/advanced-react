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
      const { type } = signinSuccess();
      expect(type).toEqual(SIGNIN_SUCCESS);
    });
  });

  describe('signinSubmit', () => {
    it('returns the correct type and payload', () => {
      const values = 'values';
      const { payload, type } = signinSubmit(values);
      expect(type).toEqual(SIGNIN_SUBMIT);
      expect(payload).toEqual(values);
    });
  });

  describe('siginFailure', () => {
    it('returns the correct type  and error message', () => {
      const errorMessage = 'error';
      const { type, error } = signinFailure(errorMessage);
      expect(type).toEqual(SIGNIN_FAILURE);
      expect(error).toEqual(errorMessage);
    });
  });

  describe('signupSubmit', () => {
    it('returns the correct type', () => {
      const { type } = signupSubmit();
      expect(type).toEqual(SIGNUP_SUBMIT);
    });
  });

  describe('signupSuccess', () => {
    it('returns the correct type', () => {
      const { type } = signupSuccess();
      expect(type).toEqual(SIGNUP_SUCCESS);
    });
  });

  describe('signupFailure', () => {
    it('returns the correct type and error message', () => {
      const errorMessage = 'error';
      const { type, error } = signupFailure(errorMessage);
      expect(type).toEqual(SIGNUP_FAILURE);
      expect(error).toEqual(errorMessage);
    });
  });
});
