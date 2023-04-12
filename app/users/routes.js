const express = require("express");
const { register, login, update } = require("./controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/:id", update);

module.exports = router;
