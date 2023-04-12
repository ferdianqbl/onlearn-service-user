const RefreshToken = require("../../../models/RefreshToken");

module.exports = async (req, res, next) => {
  try {
    const { refreshToken } = req.query;

    const token = await RefreshToken.findOne({
      where: { token: refreshToken },
    });

    if (!token)
      return res.status(400).json({ error: 1, message: "Invalid token" });

    return res.status(200).json({ error: 0, message: "Token found", token });
  } catch (error) {
    return res.status(500).json({ error: 1, message: error.message });
  }
};
