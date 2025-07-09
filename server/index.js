
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const cookieParser = require('cookie-parser');

const app = express();
const port = 4000;

// Middleware
app.use(express.json());

const allowedOrigins = [
  'http://localhost:5173',
    'http://localhost:4000',
  'https://zangaa.vercel.app',
  'https://zangaadmin.vercel.app/admin-login' 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));


app.use('/images', express.static('upload/images'));



app.use(cookieParser());
app.use(express.json());
app.use('/', require('./routes/admin')); 

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
