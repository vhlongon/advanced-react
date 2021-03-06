import React from 'react';
import Routes from './Routes';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../selectors';

export const App = ({ title, isAuthenticated }) => {
  return (
    <div className="app">
      <Routes isAuthenticate={isAuthenticated} />
    </div>
  );
};

const mapStateToProps = getIsAuthenticated;

export default connect(mapStateToProps)(App);
