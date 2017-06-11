import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Resources from './Resources';
import Signin from './Signin';
import NotFound from './NotFound';

const App = ({ title }) => {
  return (
    <div className="App">
      <h1>{title}</h1>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resources" component={Resources} />
            <Route path="/signin" component={Signin} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
