const jwt = require('jsonwebtoken');
const { JWTSECRET } = require('../utilities/config');
const usermodel = require('../model/user_model');

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ status: false, data: { message: "Token missing" } });
    }

    const token = authHeader.split(" ")[1]; 

    if (!token || token === "null") {
      return res.status(401).json({ status: false, data: { message: "Token missing" } });
    }

    const decoded = jwt.verify(token, JWTSECRET);

    const dbuser = await usermodel.findById(decoded._id).select("-password"); 
    if (!dbuser) {
      return res.status(401).json({ status: false, data: { message: "Unauthorized user" } });
    }

    req.dbuser = dbuser;
    next();

  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({ status: false, data: { message: "Invalid token", error: error.message } });
  }
};

module.exports = auth;
