const bcrypt = require('bcrypt');
const _ = require('lodash');
const User = require("../models/user");
const registerValidator = require("../validators/register");
const {dbSecretFields} = require('../configs');

exports.register = async(req, res) => {
    const validationResult = registerValidator(req.body);
    if(validationResult !== true){
        return res.status(400).json({messange: validationResult});
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const user = await User.create({...req.body, password: hashedPassword});

    return res.status(201).json({messange: 'You are registered succesfully.', user: _.omit(user.toObject(), dbSecretFields)});
};