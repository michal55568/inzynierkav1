const express = require("express");
const expressSession = require("express-session");

const authRoutes = require("./routes/auth");


const app = express();

app.use(express.json({ limit: "1KB" }));
app.use(expressSession({
    name: "expressSession",
    resave: false,
    saveUninitialized: false,
    secret: 
}));

app.use("/api/v1/auth", authRoutes);

module.exports = app;