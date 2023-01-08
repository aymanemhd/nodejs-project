const express = require("express");
require("colors");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const DB = require("./DB/db");
// const Data = require("./data");

//middleware
app.use(express.json());
app.use(morgan("dev"));

//called database
DB.dbconnection;

// Data.importData;
PORT = process.env.PORT;

//api
app.use("/api/food", require("./router/Foodrouter"));
app.use("/api/user", require("./router/UserRouter"));
app.use("/api/orders", require("./router/orderrouter"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("<h1>Hello From Node Server vai nodemon</h1>");
  });
}

app.listen(PORT, () => {
  console.log(`server running at port no ${PORT}`.bgGreen.magenta);
});
