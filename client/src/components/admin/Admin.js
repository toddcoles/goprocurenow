import React, { Component } from 'react';
import Posts from '../posts/Posts';
import Profiles from '../profiles/Profiles';

class Admin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h4 className="display-6 text-center">Administrative page</h4>
        <div className="row" style={{ display: 'block' }}>
          <div
            className="col-md-4 m-auto mt-5"
            style={{ border: 'solid black 1px', float: 'left' }}
          >
            <h4 className="display-6 text-center">PROGRAMS</h4>
            <div>THIS IS WHERE THE COMPONENT FOR PROGRAMS WILL GO!</div>
          </div>
          <div
            className="col-md-4 m-auto"
            style={{ border: 'solid black 1px', float: 'left' }}
          >
            <h4 className="display-6 text-center">COMMODITY CODES</h4>
            <div>THIS IS WHERE THE COMPONENT FOR COMMODITY CODES WILL GO!</div>
          </div>
          <div
            className="col-md-4 m-auto"
            style={{ border: 'solid black 1px', float: 'left' }}
          >
            <h4 className="display-6 text-center">USERS</h4>
            <Profiles />
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
