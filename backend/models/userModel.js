const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name feild is Required"],
    },
    email: {
      type: String,
      required: [true, "Email feild is Required"],
    },
    pass: {
      type: String,
      required: [true, "Password feild is Required"],
    },
    isAdmin: {
      type: Boolean,
      default: false, //by default false
    },
  },
  { timeStamps: true } // add time
);

module.exports = mongoose.model("user", userSchema); //collection name is user in mongodb
