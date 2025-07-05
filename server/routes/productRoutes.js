const express = require("express");
const router = express.Router();
const {
  addProduct,
  removeProduct,
  getAllProducts,
  getNewCollection,
  getPopularInWomen,
  getPopularInMen,
  getPopularInKids,
} = require("../controllers/productController");

router.post('/addproduct', addProduct);
router.post('/removeproduct', removeProduct);
router.get('/allproducts', getAllProducts);
router.get('/newcollection', getNewCollection);
router.get('/popular/women', getPopularInWomen);
router.get('/popular/men', getPopularInMen);
router.get('/popular/kids', getPopularInKids);

module.exports = router;
