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
    const mockSubmit = jest.fn();
    it('call the handleSubmit function', () => {
      const wrapper = renderSignInFormWithThemeProvider({
        handleSubmit: () => mockSubmit
      });
      const submitButton = wrapper
        .find(RaisedButton)
        .filterWhere(button => button.prop('type') === 'submit');

      submitButton.props().onTouchTap();
      expect(mockSubmit).toHaveBeenCalled();
    });
  });

  describe('when click on clear', () => {
    const mockReset = jest.fn();
    it('call the handleSubmit function', () => {
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

  // describe('when there is a validation error', () => {
  //   const error = 'error';
  //   describe('when is not touched', () => {
  //     it('does not show error message', () => {
  //       const wrapper = renderButtonWithThemeProvider({
  //         meta: { error }
  //       });

  //       expect(wrapper.find(MuiTextField).prop('errorText')).toBe('');
  //     });
  //   });

  //   describe('when is touched', () => {
  //     it('does show error message', () => {
  //       const error = 'error';
  //       const wrapper = renderButtonWithThemeProvider({
  //         meta: { error, touched: true }
  //       });

  //       expect(wrapper.find(MuiTextField).prop('errorText')).toBe(error);
  //     });
  //   });

  //   describe('when there is no error', () => {
  //     it('does not show error message', () => {
  //       const wrapper = renderButtonWithThemeProvider({
  //         meta: { error }
  //       });

  //       expect(wrapper.find(MuiTextField).prop('errorText')).toBe('');
  //     });
  //   });
  // });
});
