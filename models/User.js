const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema
const UserSchema = new Schema({
  twitch_id: Number,
  login: String,
  display_name: String,
  profile_image_url: String,
  email: String
});

module.exports = User = mongoose.model("user", UserSchema);
