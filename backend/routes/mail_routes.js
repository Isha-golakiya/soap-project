const express = require('express');
const router = express.Router();
const { sendMail } = require('../utilities/nodemailer');

router.post('/send-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    await sendMail(email); 
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Failed to send email:', err);
    res.status(500).json({ message: 'Failed to send email' });
  }
});


module.exports = router;
