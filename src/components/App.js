import React from 'react';
import Routes from './Routes';
import { connect } from 'react-redux';
import authenticate from '../actions/authenticate';

export const App = ({ title, authenticated }) => {
  return (
    <div className="app">
      <h1 className="app__title">{title}</h1>
      <i className="app__status">You are: {authenticated ? 'Logged-in' : 'Logged-out'}</i>
      <Routes isAuthenticate={authenticated} />
    </div>
  );
};

const mapStateToProps = ({ authenticated }) => ({ authenticated });

export default connect(mapStateToProps, { authenticate })(App);
