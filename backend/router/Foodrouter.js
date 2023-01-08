const express = require("express");
const router = express.Router();
const pizzaModel = require("../models/pizzaSchema");

router.get("/getAllfood", async (req, res) => {
  try {
    const pizza = await pizzaModel.find({});
    res.json(pizza);
  } catch (error) {
    res.send("error in router.js file" + error);
  }
});

router.post("/addfood", async (req, res) => {
  const { pizza } = req.body;
  try {
    const newFood = new pizzaModel({
      name: pizza.name,
      image: pizza.image,
      varients: ["small", "medium", "large"],
      description: pizza.descreption,
      category: pizza.catagary,
      prices: [pizza.prices],
    });
    await newFood.save();
    res.status(200).send("new pizza added");
  } catch (error) {
    res.send("error in router.js file" + error);
  }
});

router.post("/getfoodid", async (req, res) => {
  const food_id = req.body.food_id;
  // console.log(food_id);
  try {
    const food = await pizzaModel.findOne({ _id: food_id });
    res.send(food);
  } catch (error) {
    res.send("error in getfoodid router" + error);
  }
});

router.post("/updatefood", async (req, res) => {
  const updatedFood = req.body.updatedFood;
  // console.log(updatedFood);
  try {
    const food = await pizzaModel.findOne({ _id: updatedFood._id });
    food.name = updatedFood.name;
    food.description = updatedFood.description;
    food.image = updatedFood.image;
    food.catagary = updatedFood.catagary;
    food.prices = [updatedFood.prices];
    await food.save();
    res.status("200").send("Sucessfully updated");
  } catch (error) {
    res.send("error in updatedFood router" + error);
  }
});

router.post("/deleteFood", async (req, res) => {
  const foodId = req.body.food_id;
  try {
    await pizzaModel.findOneAndDelete({ _id: foodId });
    res.status(200).send("pizza deleted successfully");
  } catch (error) {
    res.status(404).send("not found" + error);
  }
});
module.exports = router;
