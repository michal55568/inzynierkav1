const express = require('express');
const authRoutes = require("./routes/auth");


const app = express();

app.use("/api/v1/auth", authRoutes);

module.exports = app;