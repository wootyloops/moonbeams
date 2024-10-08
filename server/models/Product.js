// https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true
  },
  slug: {
    required: true,
    type: String,
    unique: true
  },
  category: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  longDescription: {
    required: false,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  stock: {
    required: false,
    type: Number,
  }
});

export const Product = mongoose.model('Product', dataSchema);