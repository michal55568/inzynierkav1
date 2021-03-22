const mongooose = require('mongoose');

const schema = new mongoose.Schema({
    username:{
        type: string,
        required: true,
        unique: true,
    },
    password:{
        type: string,
        required: true,
    },
    name:{
        type: string,
        required: true,
    },
    }
    { timestamps: true }
)

const model = mongoose.model('user', schema);

module.exports = model;