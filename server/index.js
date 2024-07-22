const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const dishRoutes = require("./routes/dishRoutes");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: `${__dirname}/config.env` });

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000", // Replace with your Vercel URL in production
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

// Route definitions
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/dishes", dishRoutes);

// Root route for verification
app.get("/", (req, res) => res.send("Your backend is going well"));

module.exports = app;
