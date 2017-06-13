import React from 'react';

const Signin = ({ location: { state } }) => (
  <div>
    <p>
      {state
        ? <small><i>{state.message}</i></small>
        : 'Sign in section'}
    </p>
  </div>
);

export default Signin;
