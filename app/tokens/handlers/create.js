const Validator = require("fastest-validator");
const User = require("../../../models/User");
const RefreshToken = require("../../../models/RefreshToken");

const v = new Validator();

module.exports = async (req, res, next) => {
  try {
    const { user_id, token } = req.body;

    const schema = {
      user_id: "number|positive|empty:false",
      token: "string|empty:false",
    };

    const validate = v.validate(req.body, schema);

    if (validate.length)
      return res.status(404).json({ error: 1, message: validate });

    const user = await User.findByPk(user_id);

    if (!user)
      return res.status(404).json({ error: 1, message: "User not found" });

    const refreshToken = await RefreshToken.create({
      token,
      user_id,
    });

    return res.status(201).json({
      error: 0,
      message: "Refresh token created",
      data: refreshToken.id,
    });
  } catch (error) {
    return res.status(500).json({ error: 1, error: error.message });
  }
};
