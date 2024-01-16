import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    //.find({}), pass {}, an empty object to return everything
    const products = await Product.find({});
    return res.json(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    //Gets id from parameters
    const product = await Product.findById(req.params.id);
    //if there is a product
    if (product) {
      return res.json(product);
    }

    res.status(404).json({ message: 'Product not found' });
  })
);

export default router;
