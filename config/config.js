const { db } = require("./env");

module.exports = {
  development: {
    username: db.username,
    password: null,
    database: db.name,
    host: db.host,
    dialect: db.dialect,
  },
  test: {
    username: db.username,
    password: null,
    database: db.name,
    host: db.host,
    dialect: db.dialect,
  },
  production: {
    username: db.username,
    password: null,
    database: db.name,
    host: db.host,
    dialect: db.dialect,
  },
};
