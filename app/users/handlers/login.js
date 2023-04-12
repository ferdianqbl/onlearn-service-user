const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const User = require("../../../models/User");

const v = new Validator();

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const schema = {
      email: "email|empty:false",
      password: "string|min:6|empty:false",
    };

    const validate = v.validate(req.body, schema);

    if (validate.length) return res.status(400).json({ message: validate });

    const user = await User.findOne({
      where: { email },
    });

    if (!user)
      return res
        .status(400)
        .json({ status: 1, message: "Your email or password is incorrect" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res
        .status(400)
        .json({ status: 1, message: "Your email or password is incorrect" });

    const { id, name, role, username, profession, avatar } = user;

    res.status(200).json({
      status: 0,
      message: "Login success",
      data: {
        id,
        name,
        email,
        role,
        username,
        profession,
        avatar,
      },
    });
  } catch (error) {
    res.status(500).json({ status: 1, message: error.message });
  }
};
