import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import Home from './Home';
import Resources from './Resources';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

export const paths = {
  signin: '/signin',
  signup: '/signup',
  resources: '/resources',
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
          path={paths.resources}
          redirectPath={paths.signin}
          isAuthenticated={isAuthenticate}
          component={Resources}
          message="You need to sign in to view the resources page"
        />
        <Route path={paths.signup} component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
