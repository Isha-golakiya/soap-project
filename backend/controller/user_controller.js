const mongoose = require('mongoose');
const usermodel = require('../model/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWTSECRET } = require('../utilities/config');

const newuser = async (req, res) => {
  try {
    const user = req.body;
    if (!user.firstname || !user.lastname || !user.email || !user.password || !user.contact) {
      return res.status(400).json({ status: false, data: { message: 'All fields are mandatory.' } });
    }

    const existingUser = await usermodel.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ status: false, data: { message: 'Email already exists.' } });
    }

    const hashpassword = await bcrypt.hash(user.password, 12);
    const profileImage = req.file?.path || null;

    const dbuser = new usermodel({firstname: user.firstname,lastname: user.lastname,email: user.email,password: hashpassword,contact: user.contact,image: profileImage,role: user.role || 'user'});

    await dbuser.save();
    return res.status(200).json({ status: true, data: { message: "User Created Successfully.", data: dbuser } });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, data: { message: 'Internal Server Error', error: error.message } });
  }
};


const getalldata = async (req, res) => {
  try {
    const alldata = await usermodel.find();
    return res.status(200).json({
      status: true, data: { message: "all user received successfully", data: alldata }
    });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, data: { message: 'Internal Server Error', error: error.message } });
  }
};


const updatedata = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.body;

    const existingUser = await usermodel.findById(id);
    if (!existingUser) {
      return res.status(404).json({ status: false, data: { message: "User not found" } });
    }
    const profileImage = req.file?.path || existingUser.image;

    let updatedPassword = existingUser.password;
    if (user.password && user.password.trim() !== "") {
      updatedPassword = await bcrypt.hash(user.password, 12);
    }

    const updated = await usermodel.updateOne({ _id: id },{firstname: user.firstname || existingUser.firstname,lastname: user.lastname || existingUser.lastname, email: user.email || existingUser.email,password: updatedPassword,contact: user.contact || existingUser.contact,image: profileImage,role: user.role || existingUser.role});

    return res.status(200).json({ status: true, data: { message: "User Updated Successfully", data: updated } });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, data: { message: "Internal Server Error", error: error.message } });
  }
};


const deleteuser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await usermodel.deleteOne({ _id: id });
    return res.status(200).json({ status: true, data: { message: 'User deleted successfully.', data: deleted } });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, data: { message: 'Internal Server Error', error: error.message } });
  }
};

const login = async (req, res) => {
  try {
    const user = req.body
    const dbuser = await usermodel.findOne({ email: user.email });
    if (!dbuser) {
      return res.status(404).json({ status: false, data: { message: 'User not found.' } });
    }
    const verify = await bcrypt.compare(user.password, dbuser.password);
    if (!verify) {
      return res.status(401).json({ status: false, data: { message: 'Password is not correct.' } });
    }

    const token = await jwt.sign({ _id: dbuser._id, role: dbuser.role }, JWTSECRET);
    return res.status(200).json({ status: true, data: { message: 'Login successful.', data: dbuser, token } });
  }
  catch (error) {
    console.log('Login error:', error);
    return res.status(500).json({ status: false, data: { message: 'Internal Server Error', error: error.message } });
  }
};


module.exports = { newuser, getalldata, updatedata, deleteuser, login, };
