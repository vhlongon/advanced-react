import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Resources from './Resources';
import Signin from './Signin';
import NotFound from './NotFound';

const PrivateRoute = ({ component: Component, isAuthenticated }) => (
  <Route
    render={props =>
      (isAuthenticated
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/signin',
              origin: props.location.pathname
            }}
          />)}
  />
);

export const Routes = ({ isAuthenticate }) => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            path="/resources"
            component={Resources}
            isAuthenticated={isAuthenticate}
          />
          <Route path="/signin" component={Signin} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
