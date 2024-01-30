const express = require("express");

// schema
const userModel = require("../schema/users.js");

// password function
const passwordGen = require("../securityFunctions/passwordGen.js");

const router = express.Router();

router.post("/addUser", passwordGen, (req, res) => {
  const { username, password } = req.body;
  const newUser = new userModel({
    username: username,
    password: password,
  });
  newUser
    .save()
    .then(() => {
      console.log("Succesfully inserted user!");
      res.json({
        userAdded: true,
      });
    })
    .catch((e) => {
      if (e.code === 11000) {
        res.json({
          userAdded: false,
          error: "username already taken",
        });
      } else {
        res.json({
          userAdded: false,
        });
      }
    });
});

module.exports = router;
