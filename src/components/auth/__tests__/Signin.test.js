import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Signin } from '../Signin';
import { Link } from 'react-router-dom';
import SigninForm from '../Form';
import { shallow } from 'enzyme';

const renderSnackbarWithThemeProvider = props =>
  shallow(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Signin {...props} />
    </MuiThemeProvider>
  ).dive();

describe('Signin', () => {
  describe('when comming from the redirect', () => {
    const message = 'the-message';
    const wrapper = renderSnackbarWithThemeProvider({
      location: { state: { message } },
      isOpen: true
    });
    it('shows the Snackbar', () => {
      expect(wrapper.find(Snackbar).length).toBe(1);
    });

    it('renders the warning message sent by the router', () => {
      expect(wrapper.find(Snackbar).prop('message')).toBe(message);
    });
  });

  it('renders the sigin form', () => {
    const wrapper = shallow(
      <Signin location={{ state: { message: '' } }} isOpen />
    );
    expect(wrapper.find(SigninForm).length).toBe(1);
  });
});
