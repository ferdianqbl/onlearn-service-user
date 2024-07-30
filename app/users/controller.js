const getUsers = require("./handlers/getUsers");
const getUser = require("./handlers/getUser");
const login = require("./handlers/login");
const register = require("./handlers/register");
const update = require("./handlers/update");
const deleteUser = require("./handlers/delete");
const logout = require("./handlers/logout");
module.exports = {
  getUsers,
  getUser,
  register,
  login,
  update,
  logout,
  deleteUser,
};
