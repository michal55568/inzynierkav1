exports.PORT = process.env.PORT || 3000;

exports.dbSecretFields = ['__v', "password"];

exports.DATABASE_CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING;

exports.SESSION_SECRET = process.env.SESSION_SECRET;