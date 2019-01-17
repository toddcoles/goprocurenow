import React, { Component } from 'react';
import '../../App.css';

class TopNavbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-light bg-light border"
        style={{ height: '35px' }}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" to="/dashboard">
              <button
                type="button"
                className="gradient-buttons btn-info btn-sm"
                style={{ fontSize: '12px' }}
              >
                <i class="fa fa-comments" aria-hidden="true" />
                <span style={{ margin: '0px 5px' }}>Chat Now</span>
                <span
                  className="rounded border-info text-info"
                  style={{
                    backgroundColor: 'white',
                    padding: '4px 5px'
                  }}
                >
                  online
                </span>
              </button>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopNavbar;
