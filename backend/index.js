const express = require('express');
const app = express();
const cors = require('cors');
const con = require('./utilities/connectdb');
const upload = require('./utilities/upload'); 
const userroute = require('./routes/user_routes');
const productroute = require('./routes/product_routes');
const mailroute = require('./routes/mail_routes'); 

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.post("/upload", upload.single("image"), (req, res) => {
  try {
    console.log("Cloudinary Upload:", req.file);

    if (!req.file || !req.file.path) {
      return res.status(400).json({ status: false, message: 'No file uploaded' });
    }

    res.status(200).json({
      status: true,
      message: "Image uploaded successfully",
      url: req.file.path 
    });
  } catch (err) {
    console.error('UPLOAD ERROR:', err); 
    res.status(500).json({ status: false, message: 'Server Error', error: err.message });
  }
});


app.use('/api', userroute);
app.use('/product', productroute);
app.use('/api', mailroute); 


const StartServer = async () => {
  try {
    await con();
    app.listen(5000, () => {
      console.log('Server is running at http://localhost:5000');
    });
  } catch (error) {
    console.log('Server failed to start:', error);
  }
};

StartServer();
