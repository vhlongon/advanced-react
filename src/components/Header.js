import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StatusBar from './StatusBar';
import { signout } from '../actions/authenticate';
import AuthButton from './AuthButton';
import { paths } from './Routes';
import { getIsAuthenticated } from '../selectors';

const barListStyle = {
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '0',
  paddingLeft: '0',
  maxWidth: '320px'
};

const BarItems = ({ isAuthenticated, signout }) => (
  <ul className="header__list" style={barListStyle}>
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
      <AuthButton isAuthenticated={isAuthenticated} signout={signout} />
    </li>
  </ul>
);

const appBarStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export const Header = props => (
  <div style={{ width: '100%' }}>
    <AppBar
      style={appBarStyle}
      title="React Auth App"
      iconStyleLeft={{ display: 'none' }}
      children={BarItems(props)}
    />
    <StatusBar text={props.isAuthenticated ? 'Logged-in' : 'Logged-out'} />

  </div>
);

const mapStateToProps = getIsAuthenticated;

export default connect(mapStateToProps, { signout })(Header);
