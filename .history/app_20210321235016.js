const express = require('express');
const authRouter = require('./routes/auth');


const app = express();

app.use('/api/v1/auth');

module.exports = app;