import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Signup from '../Signup';
import { Link } from 'react-router-dom';
import SignupForm from '../SignupForm';
import { shallow } from 'enzyme';

const renderSnackbarWithThemeProvider = props =>
  shallow(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Signup {...props} />
    </MuiThemeProvider>
  ).dive();

describe('Signup', () => {
  it('renders the signup form', () => {
    const wrapper = shallow(
      <Signup />
    );
    expect(wrapper.find(SignupForm).length).toBe(1);
  });
});
