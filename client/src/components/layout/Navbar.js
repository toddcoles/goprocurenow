import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <button type="button" className="btn btn-success btn-xs">
                {'NEW PR '}
                <i className="fa fa-plus" />
              </button>
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              href="#!"
              onClick={this.onLogoutClick.bind(this)}
              className="nav-link"
            >
              {/* <img
                className="rounded-circle"
                src={user.avatar}
                alt={user.name}
                style={{ width: '25px', marginRight: '5px' }}
                title="You must have a Gravatar connected to your email to display and image"
              /> */}
              <span class="fas fa-user 5x" style={{ fontSize: '1.5em' }} />
            </a>
          </li>

          <li className="nav-item">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {user.name}
              </button>
              <div class="dropdown-menu">
                <Link class="dropdown-item" to="/dashboard">
                  Profile
                </Link>
                <a class="dropdown-item" href="#">
                  Actions
                </a>
                <div class="dropdown-divider" />
                <a
                  class="dropdown-item"
                  href="#!"
                  onClick={this.onLogoutClick.bind(this)}
                >
                  Logout
                </a>
              </div>
            </div>
          </li>
          {/* <li className="nav-item">
            <a
              href="#!"
              onClick={this.onLogoutClick.bind(this)}
              className="nav-link"
            >
              <img
                className="rounded-circle"
                src={user.avatar}
                alt={user.name}
                style={{ width: '25px', marginRight: '5px' }}
                title="You must have a Gravatar connected to your email to display and image"
              />
              Logout
            </a>
          </li> */}
        </ul>
      </div>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar bg-dark navbar-expand-sm navbar-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/profiles">
            Vectrus Supply Chain
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {' '}
                  Developers
                </Link>
              </li>
            </ul>
          </div> */}
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
