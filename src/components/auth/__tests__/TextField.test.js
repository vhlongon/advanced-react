import React from 'react';
import MuiTextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from '../TextField';
import { shallow } from 'enzyme';

const renderMuiTextFieldWithThemeProvider = props =>
  shallow(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <TextField {...props} />
    </MuiThemeProvider>
  ).dive();

describe('TextField', () => {
  it('renders the correct label', () => {
    const label = 'label';
    const wrapper = renderMuiTextFieldWithThemeProvider({
      label,
      meta: {}
    });

    expect(wrapper.find(MuiTextField).prop('hintText')).toBe(label);
  });

  describe('when there is a validation error', () => {
    const error = 'error';
    describe('when is not touched', () => {
      it('does not show error message', () => {
        const wrapper = renderMuiTextFieldWithThemeProvider({
          meta: { error }
        });

        expect(wrapper.find(MuiTextField).prop('errorText')).toBe('');
      });
    });

    describe('when is touched', () => {
      it('does show error message', () => {
        const error = 'error';
        const wrapper = renderMuiTextFieldWithThemeProvider({
          meta: { error, touched: true }
        });

        expect(wrapper.find(MuiTextField).prop('errorText')).toBe(error);
      });
    });

    describe('when there is no error', () => {
      it('does not show error message', () => {
        const wrapper = renderMuiTextFieldWithThemeProvider({
          meta: { error }
        });

        expect(wrapper.find(MuiTextField).prop('errorText')).toBe('');
      });
    });
  });
});
