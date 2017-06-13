import React from 'react';
import { withRouter } from 'react-router-dom';
import { paths } from './Routes';

export const Button = ({ history, isAuthenticated, authenticate }) => (
  <button
    onClick={() => {
      authenticate(
        !isAuthenticated,
        () => !isAuthenticated && history.push(paths.resources)
      );
    }}
  >
    {isAuthenticated ? 'Sign out' : 'Sign in'}
  </button>
);

export default withRouter(Button);