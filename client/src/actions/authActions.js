import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get user token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      const { token } = res.data; // Save to local storage
      localStorage.setItem('jwtToken', token); // Set token to local storage
      setAuthToken(token); // Set token to Auth header
      const decoded = jwt_decode(token); // Decode token to get user data
      dispatch(setCurrentUser(decoded)); // Set current user
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken'); // Remove token from localStorage
  setAuthToken(false); // Remove auth header for future requests
  dispatch(setCurrentUser({})); // Set current user to {} which will also set isAuthenticated to false
};
