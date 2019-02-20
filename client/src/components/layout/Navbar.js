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
          {/* <li className="nav-item">
            <Link className="nav-link" to="/feed">
              <button type="button" className="btn btn-secondary rounded">
                Post Feed
              </button>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/create-pr">
              <button type="button" className="btn btn-secondary rounded">
                ADD PR <i className="fa fa-plus" />
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
            </a>
          </li>

          <div className="mr-5" style={{ fontSize: '10px', color: 'white' }}>
            AVERAGE PROCESSING TIME: X days X:XX hours
            <br /> FASTED PROCESSING TIME: X days X:XX hours
            <br /> LONGEST PROCESSING TIME: X days X:XX hours
          </div>

          <li className="nav-item">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: '#BEB800' }}
              >
                <span class="fas fa-user" style={{ fontSize: '1.25em' }} />
                {' ' + user.name}
              </button>
              <div class="dropdown-menu">
                <Link class="dropdown-item" to="/profiles">
                  <span
                    class="fas fa-address-card"
                    style={{ fontSize: '1em', marginRight: '5px' }}
                  />
                  Profile
                </Link>

                {/* TODO: THIS SHOULD ONLY SHOW FOR ADMINISTRATORS */}
                <Link class="dropdown-item" to="/Admin">
                  <span
                    className="fas fa-tools"
                    style={{
                      fontSize: '1em',
                      marginRight: '5px'
                    }}
                  />
                  Admin
                </Link>

                <Link class="dropdown-item" to="#">
                  <span
                    className="fas fa-arrow-alt-circle-right"
                    style={{
                      fontSize: '1em',
                      marginRight: '5px'
                    }}
                  />
                  Actions
                </Link>

                <a class="dropdown-item" href="#">
                  <span className="badge badge-success badge-pill">4</span>{' '}
                  Approvals
                  {/* <span style={{ marginLeft: '8px' }}>Approvals</span> */}
                </a>
                <a className="dropdown-item" href="#">
                  <span className="badge badge-warning badge-pill">3</span>{' '}
                  Responses
                  {/* <span style={{ marginLeft: '8px' }}> Responses</span> */}
                </a>

                <a className="dropdown-item" href="#">
                  <span className="badge badge-danger badge-pill">4</span>{' '}
                  Pending
                  {/* <span style={{ marginLeft: '8px' }}> Pending</span> */}
                </a>

                <div className="dropdown-divider" />
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={this.onLogoutClick.bind(this)}
                >
                  <span
                    className="fas fa-sign-out-alt"
                    style={{ fontSize: '1em', marginRight: '5px' }}
                  />
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
      <nav
        className="navbar navbar-expand-sm navbar-dark mb-4"
        style={{ backgroundColor: '#52575B' }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard">
            <img
              src="../../vectrus.png"
              style={{ width: '120px', height: '45px' }}
            />
            <span style={{ display: 'inline' }}>Supply Chain</span>
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
          {isAuthenticated ? authLinks : null}{' '}
          {/* The guestLinks was changed to null to remove the "Sign up" & "Register" on landing page*/}
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
