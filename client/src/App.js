import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';

import './App.css';

// This code keeps the user logged in even on a refresh ***********

// Check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken); // Set auth token header
  const decoded = jwt_decode(localStorage.jwtToken); // Decode token and get user info and expiration
  store.dispatch(setCurrentUser(decoded)); // Set user and isAuthenticated

  // Check for expired token *********** EXPIRED TOKENS - Set to 1 hour
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser()); // Logout user
    store.dispatch(clearCurrentProfile()); // Clear current profile
    window.location.href = '/login'; // Redirect to login
  }
}

// ****************************************************************

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
