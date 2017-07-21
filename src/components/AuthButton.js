import React from 'react';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { paths } from './Routes';

const handleClick = ({ authenticate, history, isAuthenticated }) => e => {
  authenticate(
    !isAuthenticated,
    () => !isAuthenticated && history.push(paths.resources)
  );
};

export const Button = props => (
  <RaisedButton
    onTouchTap={handleClick(props)}
    label={props.isAuthenticated ? 'Sign out' : 'Sign in'}
  />
);

export default withRouter(Button);
