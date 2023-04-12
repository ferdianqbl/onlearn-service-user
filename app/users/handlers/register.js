const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const User = require("../../../models/User");

const v = new Validator();

module.exports = async (req, res, next) => {
  try {
    const { name, username, email, password, profession } = req.body;
    const schema = {
      name: "string|empty:false|min:3",
      username: "string|empty:false|min:3",
      email: "email|empty:false",
      password: "string|empty:false",
      profession: "string|optional",
    };

    const validate = v.validate(req.body, schema);

    if (validate.length) {
      return res.status(400).json({ error: 1, message: validate });
    }

    let user = await User.findOne({
      where: { email: req.body.email },
    });

    if (user)
      return res
        .status(409)
        .json({ error: 1, message: "Email already exists" });

    user = await User.findOne({
      where: { username: req.body.username },
    });

    if (user)
      return res
        .status(409)
        .json({ error: 1, message: "Username already exists" });

    const newUser = await User.create({
      name,
      username,
      email,
      password: await bcrypt.hash(password, 10),
      profession,
    });

    return res.status(201).json({
      error: 0,
      message: "User created",
      data: {
        new_user: newUser.id,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
