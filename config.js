// all exports individually imported into server.js

exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || (process.env.NODE_ENV === 'production' ? 'mongodb://localhost/inventory-management' : 'mongodb://localhost/inventory-management-dev');

exports.SERVER_PORT = (process.env.SERVER_PORT || 9000);