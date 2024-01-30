require("dotenv").config();

// routes
const auth = require("./routes/auth.js");
const users = require("./routes/users.js");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/AniverseSocialDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// authentication routes
app.use(auth);
app.use("/admin", users);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, (e) => {
  if (e) {
    console.error("Error starting server:", e);
    return;
  }
  console.log("Server running on port", PORT);
});
