import { shallow } from 'enzyme';
import { CHANGE_AUTH } from '../types';
import authenticate from '../authenticate';

describe('authenticate', () => {
  it('should return the correct type', () => {
    expect(authenticate().type).toEqual(CHANGE_AUTH);
  });
  it('should return the correct payload', () => {
    const loginStatus = true;
    expect(authenticate(loginStatus).payload).toEqual(loginStatus);
  });
});
