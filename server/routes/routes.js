import express from 'express';
import { Product } from '../models/Product.js'

export const router = express.Router();

/////////////////////
//
// Product endpoints
//
/////////////////////

// Add a new product
router.post('/products/add', async (req, res) => {
  const data = new Product({
    productID: req.body.id,
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

// Get all products
router.get('/products', async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch(error) {
    res.status(500).json({message: error.message})
  }
});

// Get single product by productID
router.get('/products/:id', async (req, res) => {
  try {
    const data = await Product.findOne({ productID: parseInt(req.params.id) });
    res.json(data);
  } catch(error) {
    res.status(500).json({message: error.message})
  }
});

// Update a product by productID
router.patch('/products/update/:id', async (req, res) => {
  const updatedData = req.body;
  // const options = { new: true };

  try {
    const data = await Product.updateOne({ productID: parseInt(req.params.id) }, updatedData);
    res.send(data)
  } catch(error) {
    res.status(400).json({message: error.message})
  }
});

// Delete a product by productID
router.delete('/products/delete/:id', async (req, res) => {
  try {
    const data = await Product.deleteOne({ productID: parseInt(req.params.id) });
    res.send(data);
  } catch(error) {
    res.status(400).json({message: error.message})
  }
});

/////////////////////
//
// User endpoints
//
/////////////////////

// Log in with an existing user
router.post('/account/login', async (req, res) => {

});
// Sign up with a new user account
router.post('/account/signup', async (req, res) => {

});

// Get a user's account information
router.get('/account/:id', async (req, res) => {

});

/////////////////////
//
// Shopping endpoints
//
/////////////////////

// @TODO:

// Design inspo:
// https://github.com/ruslanzharkov/nodejs-shopping-cart

// /cart
// /cart/update
// /cart/checkout