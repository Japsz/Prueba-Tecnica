require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const usersRouter = require('./routes/users');
const proxy = require('http-proxy-middleware')
const app = express();
const cors = require('cors')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('secretToken', "eyJhbGciOiJIUzI1NiIs") //usado para JWT
app.use(cors())
app.use('/', usersRouter);

module.exports = app;
