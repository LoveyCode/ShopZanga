const Product = require("../models/Product");

const addProduct = async (req, res) => {
  let products = await Product.find({});
  let id = products.length ? products[products.length - 1].id + 1 : 1;

  const product = new Product({
    id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price
  });

  await product.save();
  res.json({ success: true, name: req.body.name });
};

const removeProduct = async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true, name: req.body.name });
};

// ... more handlers here

module.exports = {
  addProduct,
  removeProduct,
  getAllProducts: async (req, res) => res.send(await Product.find({})),
  getNewCollection: async (req, res) => {
    const products = await Product.find({});
    res.send(products.slice(1).slice(-15));
  },
  getPopularInWomen: async (req, res) => {
    res.send(await Product.find({ category: 'women' }).limit(8));
  },
  getPopularInMen: async (req, res) => {
    res.send(await Product.find({ category: 'men' }).limit(8));
  },
  getPopularInKids: async (req, res) => {
    res.send(await Product.find({ category: 'kids' }).limit(8));
  }
};
