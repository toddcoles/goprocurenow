const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const purchase = require('./routes/api/purchaseRequests');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB CONFIG
const db = require('./config/keys').mongoURI;

//CONNECT TO MONGODB
mongoose
  .connect(
    db,
    { useNewUrlParser: true } // FIXES PROBLEM WITH OLDER SYSTEM
  )
  .then(() => console.log('MongoDB Connected')) // PROMISE
  .catch(err => console.log(err));

// app.get('/', (req, res) => res.send('Hello')); // ROUTE FOR ALL REQUESTS TO '/' -> no longer needed
// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// USE ROUTES
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/purchase', purchase);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

//END OF THE FILE
