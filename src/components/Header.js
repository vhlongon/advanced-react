import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authenticate from '../actions/authenticate';
import AuthButton from './AuthButton';

export const Header = ({ authenticated, authenticate }) => (
  <div>
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__item">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="header__item">
          <AuthButton
            isAuthenticated={authenticated}
            authenticate={authenticate}
          />
        </li>
      </ul>
    </nav>
  </div>
);

const mapStateToProps = ({ authenticated }) => ({ authenticated });

export default connect(mapStateToProps, { authenticate })(Header);
