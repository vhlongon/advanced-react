import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authenticate from '../actions/authenticate';
import AuthButton from './AuthButton';
import { paths } from './Routes';

const barItemsStyle = {
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '0',
  paddingLeft: '0'
};

const BarItems = ({ authenticated, authenticate }) => (
  <ul className="header__list" style={barItemsStyle}>
    <li className="header__item">
      <Link to={paths.home}>
        <RaisedButton label="Home" />
      </Link>
    </li>
    <li className="header__item">
      <Link to={paths.resources}>
        <RaisedButton label="Resources" />
      </Link>
    </li>
    <li className="header__item">
      <AuthButton isAuthenticated={authenticated} authenticate={authenticate} />
    </li>
  </ul>
);

const appBarStyle = { display: 'flex', flexDirection: 'column' };

export const Header = props => (
  <div>
    <AppBar
      style={appBarStyle}
      title="React Auth App"
      iconStyleLeft={{ display: 'none' }}
      children={BarItems(props)}
    />
    <i className="app__status">
      You are: {props.authenticated ? 'Logged-in' : 'Logged-out'}
    </i>

  </div>
);

const mapStateToProps = ({ authenticated }) => ({ authenticated });

export default connect(mapStateToProps, { authenticate })(Header);
