const getUsers = require("./handlers/getUsers");
const getUser = require("./handlers/getUser");
const login = require("./handlers/login");
const register = require("./handlers/register");
const update = require("./handlers/update");
module.exports = {
  getUsers,
  getUser,
  register,
  login,
  update,
};
