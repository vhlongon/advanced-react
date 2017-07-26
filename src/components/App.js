import React from 'react';
import Routes from './Routes';
import { connect } from 'react-redux';
import authenticate from '../actions/authenticate';

export const App = ({ title, authenticated }) => {
  return (
    <div className="app">
      <Routes isAuthenticate={authenticated} />
    </div>
  );
};

const mapStateToProps = ({ authenticated }) => ({ authenticated });

export default connect(mapStateToProps, { authenticate })(App);
