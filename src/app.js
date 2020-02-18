// here the main page we will import express, compression, ...
// here will set PORT, disable(powered by),compression, handle staic, import other handle
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 4000);
app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public')))

module.exports = app;