import React from 'react';
import AuthButton, { Button } from '../AuthButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import { shallow } from 'enzyme';

const renderButtonWithThemeProvider = props =>
  shallow(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Button {...props} />
    </MuiThemeProvider>
  ).dive();

describe('AuthButton', () => {
  const mockSignout = jest.fn(() => () => {});
  const mockHistoryPush = jest.fn(path => path);

  it('renders the sign-in/sign-out button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find(RaisedButton).length).toBe(1);
  });
  describe('when authenticated', () => {
    it('shows Sign out text', () => {
      const wrapper = shallow(<Button isAuthenticated={true} />);
      expect(wrapper.find(RaisedButton).prop('label')).toBe('Sign out');
    });

    it('calls signout', () => {
      const wrapper = renderButtonWithThemeProvider({
        isAuthenticated: true,
        signout: mockSignout,
        history: { push: mockHistoryPush }
      });
      wrapper.find(RaisedButton).props().onTouchTap();
      expect(mockSignout).toHaveBeenCalled();
    });

    it('navigates to home', () => {
      const wrapper = renderButtonWithThemeProvider({
        isAuthenticated: true,
        signout: mockSignout,
        history: { push: mockHistoryPush }
      });
      wrapper.find(RaisedButton).props().onTouchTap();
      expect(mockHistoryPush).toBeCalledWith('/');
    });
  });

  describe('when not authenticated', () => {
    it('shows Sign in text', () => {
      const wrapper = shallow(
        <Button isAuthenticated={false} signout={mockSignout} />
      );
      expect(wrapper.find(RaisedButton).prop('label')).toBe('Sign in');
    });

    it('navigate to signin', () => {
      const wrapper = renderButtonWithThemeProvider({
        isAuthenticated: false,
        signout: mockSignout,
        history: { push: mockHistoryPush }
      });

      wrapper.find(RaisedButton).props().onTouchTap();
      expect(mockHistoryPush).toBeCalledWith('/signin');
    });
  });
});
