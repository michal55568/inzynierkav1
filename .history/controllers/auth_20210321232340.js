const bcrypt = require('bcrypt');
const _ = require('lodash');
const user = require("../models/user");
const registerValidator = require("../validators/register")

exports.register = async(req, res) => {
    const validationResult = registerValidator(req.body);
    if(validationResult !== true){
        return res.status(400).json({messange: validationResult});
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const user = await user.create({...req.body, password: hashedPassword});

    return res.status(201).json({messange: 'You are registered succesfully.', user: _.omit(user.toObject(), )});

};