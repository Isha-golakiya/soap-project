require('dotenv').config();

module.exports = {
  MONGODB_URL: process.env.MONGODB_URL,
  JWTSECRET: process.env.JWTSECRET,
  SENDER_EMAIL: process.env.SENDER_EMAIL,
  SENDER_PASSWORD: process.env.SENDER_PASSWORD
};
