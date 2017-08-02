import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import Home from './Home';
import Users from './Users';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

export const paths = {
  signin: '/signin',
  signup: '/signup',
  users: '/users',
  home: '/'
};

export const Routes = ({ isAuthenticate }) => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact path={paths.home} component={Home} />
        <Route path={paths.signin} component={Signin} />
        <PrivateRoute
          path={paths.users}
          redirectPath={paths.signin}
          isAuthenticated={isAuthenticate}
          component={Users}
          message="You need to sign in to view the users page"
        />
        <Route path={paths.signup} component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
