const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  addToCart,
  removeFromCart,
  getCart,
  addToWishlist,
  removeFromWishlist,
  getWishlist
} = require("../controllers/userController");
const fetchUser = require("../middleware/fetchUser");

router.post('/signup', signup);
router.post('/login', login);
router.post('/addtocart', fetchUser, addToCart);
router.post('/removefromcart', fetchUser, removeFromCart);
router.post('/getcart', fetchUser, getCart);
router.post('/addtowishlist', fetchUser, addToWishlist);
router.post('/removefromwishlist', fetchUser, removeFromWishlist);
router.post('/getwishlist', fetchUser, getWishlist);

module.exports = router;
