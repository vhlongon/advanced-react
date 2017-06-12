import React from 'react';
import { compose, withHandlers } from 'recompose';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authenticate from '../actions/authenticate';

const enhance = compose(
  withHandlers({
    onClick: ({ authenticate, authenticated }) => e => {
      authenticate(!authenticated);
    }
  })
);
export const Header = enhance(({ authenticated, authenticate, onClick }) => (
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
          <button onClick={onClick}>
            {authenticated ? 'Sign out' : 'Sign in'}
          </button>
        </li>
      </ul>
    </nav>
  </div>
));

const mapStateToProps = ({ authenticated }) => ({ authenticated });

export default connect(mapStateToProps, { authenticate })(Header);
