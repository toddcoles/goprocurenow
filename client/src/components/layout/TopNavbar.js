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
                REQUEST INFO{' '}
                <span
                  className="rounded border-info text-info"
                  style={{
                    backgroundColor: 'white',
                    padding: '3px 5px'
                  }}
                >
                  {' '}
                  <strong>online</strong>
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
