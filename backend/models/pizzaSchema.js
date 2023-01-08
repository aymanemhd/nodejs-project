const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pizzaSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    varients: [],
    prices: [],
    category: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const pizzaModel = mongoose.model("pizza", pizzaSchema);

module.exports = pizzaModel;
