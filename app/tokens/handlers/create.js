const Validator = require("fastest-validator");
const User = require("../../../models/User");
const RefreshToken = require("../../../models/RefreshToken");

const v = new Validator();

module.exports = async (req, res, next) => {
  try {
  } catch (error) {
    return res.status(500).json({ error: 1, error: error.message });
  }
};
