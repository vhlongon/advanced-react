import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const renderComponentWithConfig = ({
  isAuthenticated,
  Component,
  pathname,
  message
}) => props =>
  (isAuthenticated
    ? <Component {...props} />
    : <Redirect
        to={{
          pathname,
          state: {
            from: props.location,
            message
          }
        }}
      />);

const PrivateRoute = ({
  component: Component,
  redirectPath,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={renderComponentWithConfig({
      Component,
      isAuthenticated,
      pathname: redirectPath,
      message: 'You need to sign in to view the Resources page'
    })}
  />
);

export default PrivateRoute;
