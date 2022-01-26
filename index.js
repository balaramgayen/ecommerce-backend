const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://balaram:balaramG54632@cluster0.takwv.mongodb.net/E_Commerce?retryWrites=true&w=majoritymongodb+srv://balaram:balaramG54632@cluster0.takwv.mongodb.net/E_Commerce?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.get("/", (req, res) => {
  res.send(
    "This is Ecommerce project Backend Created by Balaram Gayen, Tathagata Sanyal, Sudip Mahato and Sayan Banerjee"
  );
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
