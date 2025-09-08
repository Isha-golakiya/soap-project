const express = require('express');
const router = express.Router();
const upload = require('../utilities/upload');
const auth = require('../middleware/auth_slice');

const { newuser, getalldata, updatedata, deleteuser, login } = require('../controller/user_controller');

router.post('/newuser', upload.single('image'), newuser);
router.post('/login', login);
router.post('/authVerify', auth, (req, res) => {
    return res.status(200).json({
        status: true, data: { message: "Token verified successfully", data: req.dbuser }
    });
});
router.get('/alldata', auth, getalldata);
router.put('/update/:id', auth, upload.single('image'), updatedata); 
router.delete('/delete/:id', auth, deleteuser);

module.exports = router;
