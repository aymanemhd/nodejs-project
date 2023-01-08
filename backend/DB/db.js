const mongoose = require("mongoose");
require("colors");

const dbconnection = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect(url);
    console.log(
      `DB connection successfully ${conn.connection.host}`.bgBlue.cyan
    );
  } catch (error) {
    console.log(`error in Database connection ${error}`.bgpurple);
  }
};

module.exports = dbconnection();
