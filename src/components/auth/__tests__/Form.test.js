import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Field } from 'redux-form';
import Form, { SigninForm, formWithReduxForm } from '../Form';
import { shallow, mount } from 'enzyme';

const renderSignInFormWithThemeProvider = props =>
  shallow(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <SigninForm {...props} />
    </MuiThemeProvider>
  ).dive();

describe('TextField', () => {
  it('renders a submit button', () => {
    const wrapper = renderSignInFormWithThemeProvider({
      handleSubmit: jest.fn(),
      submitForm: () => jest.fn()
    });
    expect(
      wrapper
        .find(RaisedButton)
        .filterWhere(button => button.prop('type') === 'submit').length
    ).toBe(1);
  });

  it('renders a reset button', () => {
    const wrapper = renderSignInFormWithThemeProvider({
      handleSubmit: jest.fn(),
      submitForm: () => jest.fn()
    });
    expect(
      wrapper
        .find(RaisedButton)
        .filterWhere(button => button.prop('label') === 'Clear').length
    ).toBe(1);
  });

  it('renders an email Field', () => {
    const wrapper = renderSignInFormWithThemeProvider({
      handleSubmit: jest.fn(),
      submitForm: () => jest.fn()
    });
    expect(
      wrapper.find(Field).filterWhere(field => field.prop('name') === 'email')
        .length
    ).toBe(1);
  });

  it('renders a password Field', () => {
    const wrapper = renderSignInFormWithThemeProvider({
      handleSubmit: jest.fn(),
      submitForm: () => jest.fn()
    });
    expect(
      wrapper
        .find(Field)
        .filterWhere(field => field.prop('name') === 'password').length
    ).toBe(1);
  });

  describe('when submit the form', () => {
    it('toggle authentication status and redirect to resources page', () => {
      const isAuthenticated = true;
      const mockSubmit = jest.fn(() => () => {});
      const props = {
        handleSubmit: jest.fn(),
        history: jest.fn(),
        isAuthenticated,
        authenticate: jest.fn(),
        submitForm: mockSubmit
      };
      const wrapper = shallow(<SigninForm {...props} />);
      wrapper.find('form').simulate('submit');

      expect(mockSubmit).toBeCalledWith(
        true, // isAuthenticated
        expect.any(Function), //authenticate
        expect.any(Function) // Router history
      );
    });
  });

  describe('when click on clear', () => {
    const mockReset = jest.fn();
    it('call the reset function', () => {
      const props = {
        reset: mockReset,
        handleSubmit: () => jest.fn(),
        submitForm: jest.fn()
      };
      const wrapper = shallow(<SigninForm {...props} />);
      const clearButton = wrapper
        .find(RaisedButton)
        .filterWhere(button => button.prop('label') === 'Clear');

      clearButton.props().onTouchTap();
      expect(mockReset).toHaveBeenCalled();
    });
  });
});
