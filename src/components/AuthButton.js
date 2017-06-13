import React from 'react';
import { withRouter } from 'react-router-dom';

export const Button = ({ history, isAuthenticated, authenticate }) => (
  <button
    onClick={() => {
      authenticate(
        !isAuthenticated,
        () => !isAuthenticated && history.push('/resources')
      );
    }}
  >
    {isAuthenticated ? 'Sign out' : 'Sign in'}
  </button>
);

export default withRouter(Button);