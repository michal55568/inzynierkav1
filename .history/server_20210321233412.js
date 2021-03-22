const path = require('path');
const dotnev = require('dotenv');
const mongooose = require('mongoose');


dotnev.config({
    path: path.join(__dirname, '.env'),
});

const app = require('./app');

const {PORT, DATABASE_CONNECTION_STRING} = require('./configs');

app.listen(PORT, () =>{
    console.log(`Listening... port ${PORT}`)
})