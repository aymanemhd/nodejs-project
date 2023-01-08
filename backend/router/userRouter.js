const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
///api/user/register
router.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  const newUser = new User({ name, email, pass });
  try {
    newUser.save();
    res.status(200).json({
      success: true,
      message: "User Registered successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "User not Registered successfully" + error,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await User.find({ email: email, pass: pass });
    // console.log(user);
    if (user.length > 0) {
      // console.log(user);
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({ message: "server error" });
    }
  } catch (error) {
    res.status(404).json({ message: "Somting wen Wrong" });
  }
});

router.get("/allUsers", async (req, res) => {
  try {
    const allUsers = await User.find({});
    // console.log(allUsers);
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).json({
      message: "Userdata not get successfully" + error,
    });
  }
});

module.exports = router;
