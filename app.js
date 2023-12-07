const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const productRoutes = require("./routes/products");
const ordersRoutes = require("./routes/orders");
dotenv.config();

// Use the cors middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to your CRUD API!" });
});

app.use("/products", productRoutes);
app.use("/orders", ordersRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running.`);
});
