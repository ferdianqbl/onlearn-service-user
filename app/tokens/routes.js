const express = require("express");
const { create, getToken } = require("./controller");
const router = express.Router();

router.post("/", create);
router.get("/", getToken);

module.exports = router;
