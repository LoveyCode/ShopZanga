const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const { v2: cloudinary } = require('cloudinary');
const Product = require('../models/Product'); // Adjust path if needed

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_KEY)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("MongoDB error", err));

const imageDir = path.join(__dirname, '../upload/images'); // <- correct name here

fs.readdir(imageDir, async (err, files) => {
  if (err) return console.error("❌ Failed to read images folder:", err);

for (const file of files) {
  const trimmedFile = file.trim();
  console.log(`🔍 Searching for products where image includes: ${trimmedFile}`);
  const filePath = path.join(imageDir, trimmedFile);

  const result = await cloudinary.uploader.upload(filePath, {
    folder: 'zanga-products',
  });

  const allProducts = await Product.find({});
  const matchedProduct = allProducts.find((product) => {
 const dbImageName = path
  .basename(product.image || '')
  .replace(/\s+/g, '')  // remove all spaces and newlines
  .trim()
  .toLowerCase();

const trimmedFile = file.trim().toLowerCase();

console.log(`🔍 DB image filename: ${dbImageName}, Local file: ${trimmedFile}`);

    return dbImageName === trimmedFile;
  });

  if (matchedProduct) {
    matchedProduct.image = result.secure_url;
    await matchedProduct.save();
    console.log(`✅ ${trimmedFile} uploaded → ${result.secure_url}`);
  } else {
    console.warn(`⚠️ No product matched ${trimmedFile}`);
  }
}

//  node scripts/migrateImages.js

  mongoose.disconnect();
});
