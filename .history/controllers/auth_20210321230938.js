const user = require("../models/user");
const registerValidator = require("../validators/register")

exports.register = async(req, res) => {
    const validationResult = registerValidator(req.body);
    if(validationResult !== true){
        return res.status(400).json({messange: validationResult});
    }
};