const express = require("express");
const router = express.Router();
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require('dotenv').config();

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Cloudinary Storage Setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "zanga-products",
    allowed_formats: ["jpg", "jpeg", "png", "svg"],
    public_id: (req, file) => `product_${Date.now()}`,
  },
});

const upload = multer({ storage });

// Upload Endpoint
router.post("/", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: req.file.path,
  });
});

module.exports = router;
