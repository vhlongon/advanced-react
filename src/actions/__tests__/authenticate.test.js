import { shallow } from 'enzyme';
import {
  CHANGE_AUTH,
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNIN_SUBMIT,
  SIGNIN_FAILURE
} from '../types';
import {
  signinSuccess,
  signOut,
  signinSubmit,
  signinFailure
} from '../authenticate';

describe('authenticate actions', () => {
  describe('signOut', () => {
    it('returns the correct type', () => {
      expect(signOut().type).toEqual(SIGNOUT);
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
});
