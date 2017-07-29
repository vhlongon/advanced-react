import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Field } from 'redux-form';
import Form, { SigninForm } from '../Form';
import { shallow } from 'enzyme';

const renderSignInFormWithThemeProvider = (
  {
    handleSubmit = jest.fn(),
    submitForm = jest.fn(),
    history = jest.fn(),
    authenticate = jest.fn(),
    ...rest
  } = {}
) =>
  shallow(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <SigninForm
        handleSubmit={handleSubmit}
        submitForm={submitForm}
        authenticate={authenticate}
        {...rest}
      />
    </MuiThemeProvider>
  ).dive();

describe('Form', () => {
  it('renders a submit button', () => {
    const wrapper = renderSignInFormWithThemeProvider();

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
      const isAuthenticated = false;
      const mockSubmit = jest.fn(() => () => {});
      const props = {
        isAuthenticated,
        submitForm: mockSubmit,
        onSubmit: jest.fn()
      };
      const wrapper = shallow(
        <SigninForm handleSubmit={jest.fn(fn => fn)} submitForm={mockSubmit} />
      );

      wrapper.find('form').simulate('submit');
      expect(mockSubmit).toHaveBeenCalled();
    });
  });

  describe('when click on clear', () => {
    const mockReset = jest.fn();
    it('call the reset function', () => {
      const wrapper = renderSignInFormWithThemeProvider({
        reset: mockReset,
        clearForm: jest.fn()
      });
      const clearButton = wrapper
        .find(RaisedButton)
        .filterWhere(button => button.prop('label') === 'Clear');

      clearButton.props().onTouchTap();
      expect(mockReset).toHaveBeenCalled();
    });
    it('dispatches clearForm', () => {
      const mockClearForm = jest.fn();
      const wrapper = renderSignInFormWithThemeProvider({
        reset: mockReset,
        clearForm: mockClearForm
      });
      const clearButton = wrapper
        .find(RaisedButton)
        .filterWhere(button => button.prop('label') === 'Clear');

      clearButton.props().onTouchTap();
      expect(mockClearForm).toHaveBeenCalled();
    });
  });

  describe('when there is an error message', () => {
    it('displays the message', () => {
      const errorMessage = 'error message';
      const wrapper = shallow(
        <SigninForm
          handleSubmit={jest.fn(fn => fn)}
          submitForm={jest.fn()}
          errorMessage={errorMessage}
        />
      );
      expect(wrapper.find('.error-message').length).toBe(1);
      expect(wrapper.find('.error-message').text()).toBe(errorMessage);
    });
  });
});
