const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/send-password", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ success: false, message: "Email required" });
    }

    await axios.post(
      "https://api.zeptomail.in/v1.1/email",
      {
        bounce_address: "bounce@zeptomail.in",
        from: {
          address: process.env.EMAIL_FROM,
          name: "IIBSE Council"
        },
        to: [
          {
            email_address: {
              address: email,
              name: email
            }
          }
        ],
        subject: "IIBSE Login Access",
        textbody:
          "Your login request has been received.\n\n" +
          "Login verification will be enabled shortly.\n\n" +
          "— IIBSE Council"
      },
      {
        headers: {
          Authorization: `Zoho-enczapikey ${process.env.ZEPTO_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return res.json({
      success: true,
      message: "Password sent successfully"
    });
  } catch (err) {
    console.error("ZEPTO API ERROR:", err.response?.data || err.message);
    return res.json({
      success: false,
      message: "Email failed"
    });
  }
});

module.exports = router;
