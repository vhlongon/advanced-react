import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
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
              <Link to="/signin">Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
