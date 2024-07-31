const User = require("../../../models/User");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 1, message: "Invalid ID" });

    const user = await User.findByPk(id);

    if (!user)
      return res.status(404).json({ error: 1, message: "User not found" });

    await user.destroy();

    return res.status(200).json({
      error: 0,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ error: 1, message: error.message });
  }
};
