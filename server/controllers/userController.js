const Users = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  const existingUser = await Users.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(400).json({ success: false, errors: 'User already exists' });
  }

  const cart = Array.from({ length: 300 }).reduce((obj, _, i) => (obj[i] = 0, obj), {});
  const wishlist = { ...cart };

  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
    wishlistData: wishlist,
  });

  await user.save();

  const data = { user: { id: user.id } };
  const token = jwt.sign(data, process.env.JWT_SECRET_WORD);
  res.json({ success: true, token });
};

exports.login = async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (!user) return res.json({ success: false, errors: 'Wrong email' });

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) return res.json({ success: false, errors: 'Wrong password' });

  const data = { user: { id: user.id } };
  const token = jwt.sign(data, process.env.JWT_SECRET_WORD, { expiresIn: '10m' });
  res.json({ success: true, token });
};

exports.addToCart = async (req, res) => {
  const user = await Users.findById(req.user.id);
  user.cartData[req.body.itemId] += 1;
  await user.save();
  res.send('Added');
};

exports.removeFromCart = async (req, res) => {
  const user = await Users.findById(req.user.id);
  if (user.cartData[req.body.itemId] > 0) user.cartData[req.body.itemId] -= 1;
  await user.save();
  res.send('Removed');
};

exports.getCart = async (req, res) => {
  const user = await Users.findById(req.user.id);
  res.json(user.cartData);
};

exports.addToWishlist = async (req, res) => {
  const user = await Users.findById(req.user.id);
  user.wishlistData[req.body.itemId] += 1;
  await user.save();
  res.send('Added');
};

exports.removeFromWishlist = async (req, res) => {
  const user = await Users.findById(req.user.id);
  if (user.wishlistData[req.body.itemId] > 0) user.wishlistData[req.body.itemId] -= 1;
  await user.save();
  res.send('Removed');
};

exports.getWishlist = async (req, res) => {
  const user = await Users.findById(req.user.id);
  res.json(user.wishlistData);
};