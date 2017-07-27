import { shallow } from 'enzyme';
import { CHANGE_AUTH, AUTH_USER, UNAUTH_USER } from '../types';
import { changeAuth, authUser, unauthUser } from '../authenticate';

describe('chamgeAuthenticate', () => {
  it('should return the correct type', () => {
    expect(changeAuth().type).toEqual(CHANGE_AUTH);
  });

  describe('authUser', () => {
    it('should return the correct type', () => {
      expect(authUser().type).toEqual(AUTH_USER);
    });
  });

  describe('unauthUser', () => {
    it('should return the correct type', () => {
      expect(unauthUser().type).toEqual(UNAUTH_USER);
    });
  });
});
