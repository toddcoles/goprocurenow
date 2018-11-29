const express = require('express');
const mongoose = require('mongoose');
const app = express();

//DB CONFIG
const db = require('./config/keys').mongoURI;

//CONNECT TO MONGODB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));

//END OF THE FILE
