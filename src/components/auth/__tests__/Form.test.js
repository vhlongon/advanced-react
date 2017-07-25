import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Field } from 'redux-form';
import Form, { formWithRouter, SigninForm } from '../Form';
import { shallow } from 'enzyme';

const renderSignInFormWithThemeProvider = props =>
  shallow(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <SigninForm {...props} />
    </MuiThemeProvider>
  ).dive();

describe('TextField', () => {
  it('renders a submit button', () => {
    const wrapper = renderSignInFormWithThemeProvider({
      handleSubmit: jest.fn()
    });
    expect(
      wrapper
        .find(RaisedButton)
        .filterWhere(button => button.prop('type') === 'submit').length
    ).toBe(1);
  });

  it('renders a reset button', () => {
    const wrapper = renderSignInFormWithThemeProvider({
      handleSubmit: jest.fn()
    });
    expect(
      wrapper
        .find(RaisedButton)
        .filterWhere(button => button.prop('label') === 'Clear').length
    ).toBe(1);
  });

  it('renders an email Field', () => {
    const wrapper = renderSignInFormWithThemeProvider({
      handleSubmit: jest.fn()
    });
    expect(
      wrapper.find(Field).filterWhere(field => field.prop('name') === 'email')
        .length
    ).toBe(1);
  });

  it('renders a password Field', () => {
    const wrapper = renderSignInFormWithThemeProvider({
      handleSubmit: jest.fn()
    });
    expect(
      wrapper
        .find(Field)
        .filterWhere(field => field.prop('name') === 'password').length
    ).toBe(1);
  });

  describe('when click on submit', () => {
    it('redirects to resources page if authenticated', () => {
      const isAuthenticated = true;
      const mockAuthenticate = jest.fn();
      const mockHistoryPush = jest.fn(path => path);
      const mockSubmit = jest.fn(values =>
        mockAuthenticate(!isAuthenticated, mockHistoryPush('/resources'))
      );
      const props = {
        handleSubmit: () => mockSubmit,
        history: mockHistoryPush,
        isAuthenticated,
        authenticate: mockAuthenticate
      };
      const wrapper = shallow(
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <SigninForm {...props} />
        </MuiThemeProvider>
      );
      const submitButton = wrapper
        .dive()
        .find(RaisedButton)
        .filterWhere(button => button.prop('type') === 'submit');
      submitButton.props().onTouchTap();

      expect(mockAuthenticate).toHaveBeenCalledWith(false, '/resources');
    });
  });

  describe('when click on clear', () => {
    const mockReset = jest.fn();
    it('call the reset function', () => {
      const wrapper = renderSignInFormWithThemeProvider({
        reset: mockReset,
        handleSubmit: () => jest.fn()
      });
      const clearButton = wrapper
        .find(RaisedButton)
        .filterWhere(button => button.prop('label') === 'Clear');

      clearButton.props().onTouchTap();
      expect(mockReset).toHaveBeenCalled();
    });
  });
});
