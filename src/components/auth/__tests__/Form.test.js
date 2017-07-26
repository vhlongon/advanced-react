import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Field } from 'redux-form';
import Form, { formWithRouter, SigninForm } from '../Form';
import { shallow } from 'enzyme';

const renderSignInFormWithThemeProvider = (
  {
    mockHandleSubmit = jest.fn(),
    submitForm = jest.fn(),
    history = jest.fn(),
    authenticate = jest.fn(),
    ...rest
  } = {}
) =>
  shallow(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <SigninForm
        handleSubmit={mockHandleSubmit}
        submitForm={submitForm}
        history={history}
        authenticate={authenticate}
        {...rest}
      />
    </MuiThemeProvider>
  ).dive();

describe('TextField', () => {
  it('renders a submit button', () => {
    const wrapper = renderSignInFormWithThemeProvider({
      handleSubmit: jest.fn(),
      submitForm: jest.fn()
    });

    expect(
      wrapper.find(RaisedButton).filterWhere(n => n.prop('type') === 'submit')
        .length
    ).toBe(1);
  });

  it('renders a reset button', () => {
    const wrapper = renderSignInFormWithThemeProvider();

    expect(
      wrapper.find(RaisedButton).filterWhere(n => n.prop('label') === 'Clear')
        .length
    ).toBe(1);
  });

  it('renders an email Field', () => {
    const wrapper = renderSignInFormWithThemeProvider();

    expect(
      wrapper.find(Field).filterWhere(n => n.prop('name') === 'email').length
    ).toBe(1);
  });

  it('renders a password Field', () => {
    const wrapper = renderSignInFormWithThemeProvider();

    expect(
      wrapper.find(Field).filterWhere(n => n.prop('name') === 'password').length
    ).toBe(1);
  });

  describe('when click on submit', () => {
    it('toggle authentication status and redirect to /resources', () => {
      const isAuthenticated = true;
      const mockSubmit = jest.fn(() => () => {});
      const props = {
        isAuthenticated,
        submitForm: mockSubmit
      };
      const wrapper = renderSignInFormWithThemeProvider(props);
      wrapper.find('form').simulate('submit');

      expect(mockSubmit).toBeCalledWith(
        expect.any(Function),
        true,
        expect.any(Function)
      );
    });
  });

  describe('when click on clear', () => {
    const mockReset = jest.fn();
    it('call the reset function', () => {
      const wrapper = renderSignInFormWithThemeProvider({
        reset: mockReset
      });
      const clearButton = wrapper
        .find(RaisedButton)
        .filterWhere(button => button.prop('label') === 'Clear');

      clearButton.props().onTouchTap();
      expect(mockReset).toHaveBeenCalled();
    });
  });
});
