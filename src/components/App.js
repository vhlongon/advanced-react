import React from 'react';
import Routes from './Routes';
import { connect } from 'react-redux';
import { changeAuth } from '../actions/authenticate';

export const App = ({ title, isAuthenticated }) => {
  return (
    <div className="app">
      <Routes isAuthenticate={isAuthenticated} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated
});

export default connect(mapStateToProps, { changeAuth })(App);
