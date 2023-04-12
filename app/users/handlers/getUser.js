const User = require("../../../models/User");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id, {
      attributes: [
        "id",
        "name",
        "username",
        "email",
        "profession",
        "role",
        "avatar",
      ],
    });

    if (!user)
      return res.status(404).json({ status: 1, message: "User not found" });

    res.status(200).json({
      status: 0,
      message: "Get user success",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ status: 1, message: error.message });
  }
};
