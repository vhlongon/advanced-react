import React from 'react';
import Routes from './Routes';
import { connect } from 'react-redux';
import authenticate from '../actions/authenticate';

export const App = ({ title, isAuthenticated }) => {
  return (
    <div className="app">
      <Routes isAuthenticate={isAuthenticated} />
    </div>
  );
};

const mapStateToProps = ({ isAuthenticated }) => ({ isAuthenticated });

export default connect(mapStateToProps, { authenticate })(App);
