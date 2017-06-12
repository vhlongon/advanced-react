import React from 'react';
import { withRouter } from 'react-router-dom';

const AuthButton = withRouter(({ history, isAuthenticated, authenticate }) => (
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
));

export default AuthButton;