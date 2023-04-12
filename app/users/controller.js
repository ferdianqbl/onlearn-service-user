const getUser = require("./handlers/getUser");
const login = require("./handlers/login");
const register = require("./handlers/register");
const update = require("./handlers/update");
module.exports = {
  register,
  login,
  update,
  getUser,
};
