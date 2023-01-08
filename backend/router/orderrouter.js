const express = require("express");
const router = express.Router();
// const Crypto = require("crypto");
// const mongoose = require("mongoose");
const orderSchema = require("../models/orderModel");

router.post("/placeorders", async (req, res) => {
  const { subTotal, currentUser, cartItems, add, pin, city } = req.body;
  try {
    const orderData = new orderSchema({
      name: currentUser.name,
      email: currentUser.email,
      userid: currentUser._id,
      orderItems: cartItems,
      shippingAddress: {
        address: add,
        city: city,
        pincode: pin,
      },
      orderAmount: subTotal,
    });

    orderData.save((err) => {
      if (!err) {
        console.log("Data inserted successfully");
      }
    });
    res.status(200).json({ message: "Successfully ordered" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.post("/getUserOrder", async (req, res) => {
  // console.log(req.body);
  const { userId } = req.body;
  // console.log(userId);
  try {
    const orders = await orderSchema.find({ userid: userId });
    res.status(200).send(orders);
  } catch (err) {
    console.log("Error in geruserorder" + err);
    res.status(400).json({ error: err.stack });
  }
});

router.get("/getAllUserOrder", async (req, res) => {
  try {
    const orders = await orderSchema.find({});
    // console.log(orders);
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went wrong",
      error: error.stack,
    });
    console.log(error);
  }
});

router.post("/dileveredOrder", async (req, res) => {
  // console.log(req.body);
  const { orderid } = req.body;
  // console.log(orderid);
  try {
    const order = await orderSchema.findOne({ _id: orderid });
    // console.log(order);
    order.isDeliverd = true;
    order.save();
    res.status(200).send("deliverd true Success");
  } catch (err) {
    console.log("Error in delivered" + err);
    res.status(400).json({ error: err.stack });
  }
});

module.exports = router;
