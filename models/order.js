// models/task.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  code: String,
  items: [
    {
      id: String,
      imgUrl: String,
      name: String,
      amount: Number,
      price: Number,
    },
  ],
  totalAmount: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
