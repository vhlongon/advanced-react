import React from 'react';
import AuthButton, { Button } from '../AuthButton';
import { shallow } from 'enzyme';

describe('AuthButton', () => {
  const mockAuthenticate = jest.fn(isAuth => !isAuth);

  describe('when authenticated', () => {
    const wrapper = shallow(
      <Button isAuthenticated authenticate={() => mockAuthenticate(false)} />
    );
    it('shows Sign out text', () => {
      expect(wrapper.text()).toBe('Sign out');
    });

    it('set authentication state to true', () => {
      wrapper.simulate('click');
      expect(mockAuthenticate).toBeCalledWith(false);
    });
  });

  describe('when not authenticated', () => {
    const wrapper = shallow(
      <Button
        authenticate={() => mockAuthenticate(true)}
        isAuthenticated={false}
      />
    );
    it('shows Sign in text', () => {
      expect(wrapper.text()).toBe('Sign in');
    });

    it('set authentication state to false', () => {
      wrapper.simulate('click');
      expect(mockAuthenticate).toBeCalledWith(true);
    });
  });
});
