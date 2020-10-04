const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const bcrypt = require('bcryptjs');

require('dotenv').config();

// Database
const db = require('./config/database');
const initClient = require('./helpers/initClient');

// Test the connection
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    // app.listen(PORT, console.log(`Running on port: ${PORT}`));
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Constants
const PORT = process.env.PORT || 5000;

// App
const app = express();

// Middleware
app.use(logger('dev'));
app.use(cors());
app.use('./public', express.static(__dirname + './public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/users', require('./routes/users'));
app.use('/clients', require('./routes/clients'));

// app.use('/api/auth', require('./routes/api/auth'));
// User Routes
// app.use('/api/users', require('./routes/api/users'));

// Catch 404 errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// error handler func
app.use((err, req, res, next) => {
  const error = process.env.DEVELOPMENT === 'development' ? err : {};
  const status = err.status || 500;

  // Response to client
  res.status(status).json({
    error: {
      message: error.message,
    },
  });
});
/* db.sync({ force: true }) */
db.sync()
  .then((result) => {
    app.listen(PORT, console.log(`Running on port: ${PORT}`));
    initClient();
  })
  .catch((err) => {
    console.log(err);
  });
