const express = require('express');
const path = require('path');
const compression = require('compression');
const controllers = require('./controllers')

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 4000);
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(controllers)

module.exports = app;