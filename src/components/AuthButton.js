import React from 'react';
import { withRouter } from 'react-router-dom';
import { paths } from './Routes';

const handleClick = ({ authenticate, history, isAuthenticated }) => e => {
  authenticate(
    !isAuthenticated,
    () => !isAuthenticated && history.push(paths.resources)
  );
};

export const Button = props => (
  <button onClick={handleClick(props)}>
    {props.isAuthenticated ? 'Sign out' : 'Sign in'}
  </button>
);

export default withRouter(Button);
