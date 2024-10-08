import { Product } from '../models/Product.js'

export const GetAll = async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch(error) {
    res.status(500).json({message: error.message})
  }
};

export const GetOne = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: parseInt(req.params.id) });
    res.json(data);
  } catch(error) {
    res.status(500).json({message: error.message})
  }
};

export const AddOne = async (req, res) => {
  const { 
    name, 
    category, 
    description, 
    longDescription, 
    price, 
    stock 
  } = req.body;
  
  const data = new Product({
    name: name,
    slug: name.replaceAll(' ', '-').toLowerCase(),
    category: category,
    description: description,
    longDescription: longDescription,
    price: price,
    stock: stock
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};