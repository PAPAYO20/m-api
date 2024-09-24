import Products from "../models/products.js"; // Correct the import statement

export const getProducts = async (req, res) => {
  try {
    const productsList = await Products.find(); // Use the correct model name
    res.json(productsList);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong retrieving the products",
    });
  }
}

export const createProduct = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: 'Product name can not be empty' });
  }

  try {
    const newProduct = new Products({ // Use the correct model name
      name: req.body.name,
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong creating the product",
    });
  }
}