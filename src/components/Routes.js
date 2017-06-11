import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import Signin from './Signin';
import NotFound from './NotFound';

const Routes = ({ title }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resources" component={Resources} />
        <Route path="/signin" component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
