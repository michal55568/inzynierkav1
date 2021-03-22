const express = require("express");
const expressSession = require("express-session");

const authRoutes = require("./routes/auth");
const {SESSION_SECRET, IS_PRODUCTION} = require("./configs")

const app = express();

app.use(express.json({ limit: "1KB" }));
app.use(expressSession({
    name: "expressSession",
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        secure: IS_PRODUCTION
    }
}));

app.use("/api/v1/auth", authRoutes);

module.exports = app;