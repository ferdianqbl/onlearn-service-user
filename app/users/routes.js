const express = require("express");
const { register, login, update, getUser, getUsers } = require("./controller");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/register", register);
router.post("/login", login);
router.put("/:id", update);

module.exports = router;
