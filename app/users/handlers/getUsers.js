const User = require("../../../models/User");

module.exports = async (req, res, next) => {
  try {
    const { user_ids = [] } = req.query;

    const options = {
      attributes: [
        "id",
        "name",
        "username",
        "email",
        "profession",
        "role",
        "avatar",
      ],
    };

    user_ids.length > 0 && (options.where = { id: user_ids });

    const users = await User.findAndCountAll(options);

    if (users.count === 0)
      return res.status(404).json({ error: 1, message: "Users not found" });

    res.status(200).json({
      error: 0,
      message: "Get user success",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({ error: 1, message: error.message });
  }
};
