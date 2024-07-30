const express = require("express");
const {
  register,
  login,
  update,
  getUser,
  getUsers,
  logout,
  deleteUser,
} = require("./controller");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/register", register);
router.post("/login", login);
router.put("/:id", update);
router.delete("/:id", deleteUser);
router.post("/logout", logout);

module.exports = router;
