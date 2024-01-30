require("dotenv").config();

const bcrypt = require("bcrypt");
const zxcvbn = require("zxcvbn");

const saltRounds = process.env.saltRounds;

function createPassword(req, res, next) {
  const { password } = req.body;
  const passStrength = zxcvbn(password);
  const { score, feedback } = passStrength;

  if (score < 3) {
    res.status(301).json({
      error: {
        score,
        feedback,
      },
    });
    next("password forbidden");
  }

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) {
        console.log(err);
      }
      req.body.password = hash;
      next();
    });
  });
}

module.exports = createPassword;
