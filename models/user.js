const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  username: String,
  email: String,
  picture: String,
  locale: String,
  verified: Boolean
});

// const compUserSchema = new Schema({
//   username: String,
//   os: String
// });
mongoose.model("users", userSchema);
// mongoose.model("usersComp", compUserSchema); 