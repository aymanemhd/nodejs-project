const mongoose = require("mongoose");
require("colors");
require("dotenv").config();
const DB = require("./DB/db");
const pizzaModel = require("./models/pizzaSchema");
const pizzaData = require("./Data/pizza-data");

DB.dbconnection;

const importData = async () => {
  try {
    await pizzaModel.deleteMany();
    const sampleData = pizzaData.map((pizza) => {
      return { ...pizza };
    });
    // console.log("sampleData", sampleData);

    await pizzaModel.insertMany(sampleData);
    // console.log("Data imported successfully");
  } catch (error) {
    console.log("ERrror in Data.js file" + error);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
