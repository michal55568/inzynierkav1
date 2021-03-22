const path = require('path');
const dotnev = require('dotenv');
const mongooose = require('mongoose');


dotnev.config({
    path: path.join(__dirname, '.env'),
});

const app = require('./app');

const {PORT, DATABASE_CONNECTION_STRING: DATABASE_CONNECTION_STRINGS} = require('./configs');

mongooose.connect(DATABASE_CONNECTION_STRINGS, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connect :)');
    app.listen(PORT, () =>{
        console.log(`Listening... port ${PORT}`)
    })
})