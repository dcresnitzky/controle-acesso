const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const config = require('config');
const morgan = require('morgan');
// Create a new Express application.
const app = express();
// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Connect all our routes to our application
app.use('/', routes);

module.exports = app.listen(config.get('app.port'), function(err) {
    if (err) {
        throw err;
    }
});