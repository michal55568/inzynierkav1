const path = require('path');
const dotnev = require('dotenv');

dotnev.config({
    path: path.join(__dirname, '.env')
});

const app = require('./app');

const { PORT } = require('./configs');

app.listen(PORT, () =>{
    console.log(`Listening... port ${PORT}`)
})