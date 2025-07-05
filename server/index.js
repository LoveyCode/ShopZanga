
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/images', express.static('upload/images'));

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_KEY)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

// Routes
app.use('/', require('./routes/productRoutes'));
app.use('/', require('./routes/userRoutes'));
app.use('/', require('./routes/uploadRoutes'));

app.get("/", (req, res) => res.send("API is running"));

app.listen(port, () => {
  console.log("Server running on port " + port);
});
