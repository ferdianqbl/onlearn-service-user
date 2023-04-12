const RefreshToken = require("../../../models/RefreshToken");
const User = require("../../../models/User");

module.exports = async (req, res, next) => {
  try {
    const { user_id } = req.body;

    const user = await User.findByPk(user_id);

    if (!user)
      return res.status(404).json({ error: 1, message: "User not found" });

    const deletedToken = await RefreshToken.destroy({
      where: { user_id },
    });

    if (!deletedToken)
      return res
        .status(404)
        .json({ error: 1, message: "User does not have a token" });

    return res.status(200).json({ error: 0, message: "Token deleted" });
  } catch (error) {
    return res.status(500).json({ error: 1, message: error.message });
  }
};
