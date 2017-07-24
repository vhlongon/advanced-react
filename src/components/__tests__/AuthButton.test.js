import React from 'react';
import AuthButton, { Button } from '../AuthButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import { shallow, mount } from 'enzyme';

const renderButtonWithThemeProvider = props =>
  shallow(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Button {...props} />
    </MuiThemeProvider>
  ).dive();

describe('AuthButton', () => {
  const mockAuthenticate = jest.fn();

  it('renders the sign-in/sign-out button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find(RaisedButton).length).toBe(1);
  });
  describe('when authenticated', () => {
    it('shows Sign out text', () => {
      const wrapper = shallow(
        <Button isAuthenticated={true} authenticate={mockAuthenticate} />
      );
      expect(wrapper.find(RaisedButton).prop('label')).toBe('Sign out');
    });

    it('set authentication to true and run callback', () => {
      const wrapper = renderButtonWithThemeProvider({
        isAuthenticated: true,
        authenticate: mockAuthenticate
      });

      wrapper.find(RaisedButton).props().onTouchTap();
      expect(mockAuthenticate).toBeCalledWith(false, expect.any(Function));
    });
  });

  describe('when not authenticated', () => {
    it('shows Sign in text', () => {
      const wrapper = shallow(
        <Button isAuthenticated={false} authenticate={mockAuthenticate} />
      );
      expect(wrapper.find(RaisedButton).prop('label')).toBe('Sign in');
    });

    it('set authentication to false and run callback', () => {
      const wrapper = renderButtonWithThemeProvider({
        isAuthenticated: false,
        authenticate: mockAuthenticate
      });

      wrapper.find(RaisedButton).props().onTouchTap();
      expect(mockAuthenticate).toBeCalledWith(true, expect.any(Function));
    });
  });
});
