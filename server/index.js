const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const dishRoutes = require("./routes/dishRoutes");
const dotenv = require("dotenv");

// Load environment variables from config.env file
dotenv.config({ path: `${__dirname}/config.env` });

const app = express();

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

// Middleware to handle JSON POST requests
app.use(express.json());

// Define routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/dishes", dishRoutes);

// Add a root route for testing
app.get("/", (req, res) => res.send("Your backend is going well"));

module.exports = app;
