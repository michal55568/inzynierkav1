const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
    username: { type: "String", min: 3, max: 20 },
    password: { type: "String" },
    name: { type: "String", min: 3, max: 60 },
    $$strict: true,
}

const checker = v.compile(schema);

module.exports = checker;