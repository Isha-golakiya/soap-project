const express = require('express')
const router = express.Router()
const upload = require('../utilities/upload');

const {newproduct,getalldata,updatedata,deleteproduct} = require('../controller/product_controller')
router.post('/newproduct', upload.single('image'), newproduct);
router.get('/alldata', getalldata)
router.put('/update/:id',updatedata)
router.delete('/delete/:id',deleteproduct)

module.exports = router;
