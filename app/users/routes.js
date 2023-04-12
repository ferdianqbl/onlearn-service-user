const express = require("express");
const { register, login, update, getUser } = require("./controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/:id", getUser);
router.put("/:id", update);

module.exports = router;
