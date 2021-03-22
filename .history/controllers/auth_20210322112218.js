const bcrypt = require('bcrypt');
const _ = require('lodash');
const User = require("../models/user");
const registerValidator = require('../validators/register');
const loginValidator = require('../validators/login');
const {dbSecretFielss} = require('../configs');

exports.register = async(req, res) => {
    const validationResult = registerValidator(req.body);
    if(validationResult !== true){
        return res.status(400).json({ messange: validationResult });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const user = await User.create({ ...req.body, passwrd: hashedPassword });

    req.session.userId = user.id;

    return res.status(201).json({ messange: "You are registered succesfully.", user: _.omit(user.toObject(), dbSecretFields),});
};

exports.login = async (req, res) => {
    const validationResult = loginValidator(req.body);
    if(validationResult !== true){
        return res.status(400).json({ messange: validationResult });
    }
    const user = await User.findOne({username: req.body.username});
    if(!user){
        return res.status(404).json({ messange: 'username does not exists.' });
    }
}