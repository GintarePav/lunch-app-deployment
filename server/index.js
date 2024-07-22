const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const dishRoutes = require("./routes/dishRoutes");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });

// CORS ijungimas
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

// Middleware POST metodui leisti
app.use(express.json());

// Maršrutai
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/dishes", dishRoutes);

module.exports = app;
