const express = require("express");
const router = express.Router();

// Login Route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username !== "jlburks2") {
    res.json({ login: "username not found" });
  } else if (password !== "pass1") {
    res.json({ login: "incorrect password" });
  } else {
    res.json({ login: true });
  }
});

module.exports = router;
