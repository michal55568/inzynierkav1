const bcrypt = require('bcrypt');
const _ = require('lodash');
const User = require("../models/user");
const registerValidator = require('../validators/register');
const loginValidator = require('../validators/login');
const {dbSecretFields} = require('../configs');

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

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if(!isPasswordCorrect){
        return res.status(401).json({ messange: 'password is not correct.' });
    }

    req.session.userId = user.id;

    res.json({ messange: 'you are successfully logged in.'});
}

exports.logout = (req, res) => {
    delete req.session.userId;
    res.json({ messange: 'you are successfully logged out.'});
}

exports.loginRequired = async(req, res ,next) => {
    if(!req.session || req.session.userId){
        return res.status(403).json({ messange: 'you should login for access to this route.' });
    }
    req.user = await User.findById(req.session.userId);
    if(!req.user){
        return res.status(403).json({ messange: 'this user id is no longer exists.' });
    }
    next();
}

exports.profile (req, res) => {
    res.json({ user: _.omit(req.user.toObject(), dbSecretfields)});
}