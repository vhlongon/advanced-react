import React from 'react';
import AuthButton, { Button } from '../AuthButton';
import { shallow } from 'enzyme';

describe('AuthButton', () => {
  const mockAuthenticate = jest.fn();

  describe('when authenticated', () => {
    const wrapper = shallow(
      <Button isAuthenticated={true} authenticate={mockAuthenticate} />
    );
    it('shows Sign out text', () => {
      expect(wrapper.text()).toBe('Sign out');
    });

    it('set authentication state to true and run callback', () => {
      wrapper.simulate('click');
      expect(mockAuthenticate).toBeCalledWith(false, expect.any(Function));
    });
  });

  describe('when not authenticated', () => {
    const wrapper = shallow(
      <Button
        authenticate={mockAuthenticate}
        isAuthenticated={false}
      />
    );
    it('shows Sign in text', () => {
      expect(wrapper.text()).toBe('Sign in');
    });

    it('set authentication state to false and run callback', () => {
      wrapper.simulate('click');
      expect(mockAuthenticate).toBeCalledWith(true, expect.any(Function));
    });
  });
});
