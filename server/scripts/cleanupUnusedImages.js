const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('../models/Product');

const imagesDir = path.join(__dirname, '../upload/images');

mongoose.connect(process.env.DATABASE_KEY)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

(async () => {
  try {
    const allProducts = await Product.find({});

    const usedImageFilenames = allProducts.map(product =>
      path.basename((product.image || '').trim().toLowerCase())
    );

    const allFiles = fs.readdirSync(imagesDir);

    const unusedFiles = allFiles.filter(file =>
      !usedImageFilenames.includes(file.trim().toLowerCase())
    );

    console.log(`🧹 Found ${unusedFiles.length} unused images...`);

    unusedFiles.forEach(file => {
      const fullPath = path.join(imagesDir, file);
      fs.unlinkSync(fullPath);
      console.log(`🗑️ Deleted: ${file}`);
    });

    console.log('✅ Cleanup complete.');
    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Error during cleanup:', err);
    mongoose.disconnect();
  }
})();
