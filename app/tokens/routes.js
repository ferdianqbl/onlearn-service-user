const express = require("express");
const { create } = require("./controller");
const router = express.Router();

router.post("/", create);

module.exports = router;
