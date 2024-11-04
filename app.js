const express = require("express");
const { getss } = require("./c");
const router = express.Router();

router.get("/", getss);

router.get("/login", (req, res) => {
  res.json({ message: "Welcome to the API! login" });
});

module.exports = router;
