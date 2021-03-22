const mongooose = require('mongoose');

const userSchema = new mongoose.userSchema({
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
})

const model = mongoose.model('user', userSchema);
module.exports = model;