const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const User = require("../../../models/User");
const v = new Validator();

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, password, username, profession, avatar } = req.body;
    const schema = {
      name: "string|empty:false|min:3",
      username: "string|empty:false|min:3",
      email: "email|empty:false",
      password: "string|empty:false",
      profession: "string|optional",
    };

    const validate = v.validate(req.body, schema);

    if (validate.length)
      return res.status(400).json({ error: 1, message: validate });

    const user = await User.findByPk(id);

    if (!user)
      return res.status(404).json({ error: 1, message: "User not found" });

    if (email) {
      const checkEmail = await User.findOne({
        where: { email },
      });

      if (checkEmail && email !== user.email)
        return res
          .status(409)
          .json({ error: 1, message: "Email already exists" });
    }

    if (username) {
      const checkUsername = await User.findOne({
        where: { username },
      });

      if (checkUsername && username !== user.username)
        return res
          .status(409)
          .json({ error: 1, message: "Username already exists" });
    }

    const data = {
      name,
      email,
      password: await bcrypt.hash(password, 10),
      username,
      profession,
      avatar,
    };

    const updatedUser = await user.update(data);

    if (!updatedUser) throw new Error();

    return res.status(200).json({
      error: 0,
      message: "User updated",
      data: {
        name,
        email,
        username,
        profession,
        avatar,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: 1, message: error.message });
  }
};
