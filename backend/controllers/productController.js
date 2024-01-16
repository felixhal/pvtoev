import asyncHandler from '../middleware/asyncHandler';
import Product from '../models/productModel';

//@desc fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  //.find({}), pass {}, an empty object to return everything
  const products = await Product.find({});
  return res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  //Gets id from parameters
  const product = await Product.findById(req.params.id);
  //if there is a product
  if (product) {
    return res.json(product);
  } else {
    throw new Error('Product not found');
  }
});
