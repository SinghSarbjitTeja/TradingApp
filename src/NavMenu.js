import React, { Component } from 'react';
import {Router,NavLink, Link } from 'react-router-dom';

import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (<React.Fragment>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
       TradingApp
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/Trade">
              Trades <span className="sr-only" />
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/Withdraw">
              Withdraw <span className="sr-only" />
            </NavLink>
          </li>
          </ul>
          </div>
          </nav>
          </React.Fragment>
    );
  }
}
