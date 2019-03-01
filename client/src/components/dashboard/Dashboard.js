import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import ReactTable from 'react-table';

import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    let status;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length >= 0) {
        // THIS NEEDS TO BE CHANGED A BIT
        status = (
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-2 status-box">
                <div class="alert alert-primary" role="alert">
                  'X' OPEN PRs
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2 status-box">
                <div class="alert alert-warning" role="alert">
                  'X' ACTIVE PRs
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2 status-box">
                <div class="alert alert-danger" role="alert">
                  'X' CANCELLED PRs
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2 status-box">
                <div class="alert alert-success" role="alert">
                  PRs'X' SPENDING
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2 status-box">
                <div class="alert alert-success" role="alert">
                  'X' TAX SPENDING
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-2 status-box">
                <div class="alert alert-success" role="alert">
                  'X' FREIGHT SPENDING
                </div>
              </div>
            </div>
          </div>
        );

        dashboardContent = (
          <div>
            <span className="lead">
              PURCHASE REQUEST LIST:
              {/* Welcome{' '}
              <Link to={`/profile/${profile.handle}`}>{user.name}</Link> */}
            </span>
            <table class="table table-sm table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">PR ID#</th>
                  <th scope="col">SVC CENTER</th>
                  <th scope="col">PROGRAM</th>
                  <th scope="col">SUBMISSION DATE</th>
                  <th scope="col">TITLE</th>
                  <th scope="col">BUYER</th>
                  <th scope="col">PROCUREMENT TYPE</th>
                  <th scope="col">NEXT APPROVAL</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">APPROVAL DATE</th>
                  <th scope="col">$ TOTAL:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry tde Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry tde Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

            {/* <ProfileActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div style={{ marginBottom: '60px' }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Account
            </button> */}
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            {/* <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link> */}
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h6 className="display-12">Dashboard</h6>
              {status}
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
