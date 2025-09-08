const mongoose = require('mongoose');
const productmodel = require('../model/product_model');

const newproduct = async (req, res) => {
  try {
    const product = req.body;

    if (!product || !product.name || !product.price || !product.description || !product.category||!product.image) {
      return res.status(400).json({ status: false, data: { message: 'All fields are mandatory.' } });
    }

    const dbproduct = new productmodel({name: product.name,price: product.price,description: product.description,category: product.category,image: product.image });

    await dbproduct.save();
    return res.status(200).json({ status: true, data: { message: "Product created successfully.", data: dbproduct } });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, data: { message: 'Internal Server Error', data: error } });
  }
};


const getalldata = async (req, res) => {
  try {
    const alldata = await productmodel.find();
    return res.status(200).json({
      status: true, data: { message: "all product received successfully", data: alldata }
    });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false, data: { message: "Internal server error", data: error }
    });
  }
};

const updatedata = async (req, res) => {
  try {
    const id = req.params.id;
    const product = req.body;
    if (!product) {
      return res.status(400).json({
        status: false, data: { message: "all fields necessary", data: alldata }
      })
    }
    const dbproduct = await productmodel.updateOne({ _id: id }, { name: product.name, price: product.price, description: product.description, category: product.category,image: product.image })
    return res.status(200).json({ status: true, data: { messagae: "product Updated Successfully.", data: dbproduct } })
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      data: { message: "Internal server error", error }
    });
  }
};

const deleteproduct = async (req, res) => {
  try {
    const id = req.params.id;
    const dbproduct = await productmodel.deleteOne({ _id: id });
    console.log(dbproduct)
    return res.status(200).json({ status: true, data: { message: "Product deleted successfully." } });
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, data: { message: "Internal server error", error } });
  }
};

module.exports = { newproduct, getalldata, updatedata, deleteproduct };
