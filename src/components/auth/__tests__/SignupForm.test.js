import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Field } from 'redux-form';
import Form, { SignupForm } from '../SignupForm';
import ErrorMessage from '../../ErrorMessage';
import { shallow } from 'enzyme';

const renderSignUpFormWithThemeProvider = (
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
      <SignupForm
        handleSubmit={handleSubmit}
        submitForm={submitForm}
        authenticate={authenticate}
        {...rest}
      />
    </MuiThemeProvider>
  ).dive();

describe('Form', () => {
  it('renders a submit button', () => {
    const wrapper = renderSignUpFormWithThemeProvider();

    expect(
      wrapper.find(RaisedButton).filterWhere(n => n.prop('type') === 'submit')
        .length
    ).toBe(1);
  });

  it('renders a reset button', () => {
    const wrapper = renderSignUpFormWithThemeProvider();

    expect(
      wrapper.find(RaisedButton).filterWhere(n => n.prop('label') === 'Clear')
        .length
    ).toBe(1);
  });

  it('renders an email Field', () => {
    const wrapper = renderSignUpFormWithThemeProvider();

    expect(
      wrapper.find(Field).filterWhere(n => n.prop('name') === 'email').length
    ).toBe(1);
  });

  it('renders a password Field', () => {
    const wrapper = renderSignUpFormWithThemeProvider();

    expect(
      wrapper.find(Field).filterWhere(n => n.prop('name') === 'password').length
    ).toBe(1);
  });

  it('renders a confirm password Field', () => {
    const wrapper = renderSignUpFormWithThemeProvider();

    expect(
      wrapper.find(Field).filterWhere(n => n.prop('name') === 'passwordConfirm')
        .length
    ).toBe(1);
  });

  describe('when click on submit', () => {
    it('submitForm is called', () => {
      const mockSubmit = jest.fn(() => () => {});
      const wrapper = shallow(
        <SignupForm handleSubmit={jest.fn(fn => fn)} submitForm={mockSubmit} />
      );

      wrapper.find('form').simulate('submit');
      expect(mockSubmit).toHaveBeenCalled();
    });
  });

  describe('when click on clear', () => {
    const mockReset = jest.fn();
    it('call the reset function', () => {
      const wrapper = renderSignUpFormWithThemeProvider({
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
      const wrapper = renderSignUpFormWithThemeProvider({
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
        <SignupForm
          handleSubmit={jest.fn(fn => fn)}
          submitForm={jest.fn()}
          errorMessage={errorMessage}
        />
      );
      expect(wrapper.find(ErrorMessage).length).toBe(1);
      expect(wrapper.find(ErrorMessage).prop('text')).toBe(errorMessage);
    });
  });
});
