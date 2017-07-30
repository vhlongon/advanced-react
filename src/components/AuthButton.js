import React from 'react';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { paths } from './Routes';

const handleClick = ({ signout, history, isAuthenticated }) => e => {
  if (isAuthenticated) {
    signout();
  } else {
    history.push(paths.signin);
  }
};

export const Button = props => (
  <RaisedButton
    onTouchTap={handleClick(props)}
    secondary
    label={props.isAuthenticated ? 'Sign out' : 'Sign in'}
  />
);

export default withRouter(Button);
