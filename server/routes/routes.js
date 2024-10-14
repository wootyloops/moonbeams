import express from 'express';
import { Product } from '../Models/Product.js'
import * as AccountHandler from '../Controllers/AccountController.js';
import * as ProductHandler from '../Controllers/ProductController.js'
import { userVerification } from '../Middleware/AuthMiddleware.js';

export const router = express.Router();

/////////////////////
//
// Product endpoints
//
/////////////////////

// Add a new product
router.post('/products', ProductHandler.AddOne);

// Get all products
router.get('/products', ProductHandler.GetAll);

// Get single product by productID
router.get('/products/:id', ProductHandler.GetOne);

// Update a product by productID
router.patch('/products/:id', async (req, res) => {
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
router.delete('/products/:id', async (req, res) => {
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
router.post('/account/login', AccountHandler.Login);

// Sign up with a new user account
router.post('/account/signup', AccountHandler.Signup);

// Verify a token
router.post('/account/auth', userVerification); 

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