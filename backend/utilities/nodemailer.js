const nodemailer = require("nodemailer");
const { SENDER_EMAIL, SENDER_PASSWORD } = require("../utilities/config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD,
  },
});

const sendMail = async (toEmail) => {
  const mailOptions = {
    from: SENDER_EMAIL,
    to: toEmail,
    subject: "Thanks for subscribing!",
    text: "Hi! Thank you for subscribing to our newsletter.",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(" Email sent:", info.response);
  } catch (error) {
    console.error(" Error sending email:", error);
    throw error;
  }
};

module.exports = { sendMail };
