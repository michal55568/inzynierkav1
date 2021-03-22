const path = require('path');
const dotnev = require('dotenv');

const app = require('./app');

const { PORT } = require('./configs');

app.listen(PORT, () =>{
    console.log(`Listening... port ${PORT}`)
})