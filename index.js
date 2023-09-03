const bunyan = require("bunyan");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const config = require("./config");
const OAuth2 = google.auth.OAuth2;

const oAuthClient = new OAuth2(config.clientId, config.clientSecret);

oAuthClient.setCredentials({ refreshToken: config.refreshToken });
let logger = bunyan.createLogger({
  name: "nodemailer",
});

logger.level("trace");

async function sendEmail() {
  try {
    // const accessToken = await oAuthClient.getAccessToken();
    // console.log(accessToken);

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "anonymonoussender@gmail.com",
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        refreshToken: config.refreshToken,
        // accessToken: config.accessToken,
      },
    });

    const details = {
      to: "jeebangiri942@gmail.com",
      subject: "Welcome Email",
      Text: "Welcome to Nodemailer email service provider.",
    };

    const result = await transporter.sendMail(details);
    return result;
  } catch (error) {
    return error;
  }
}

sendEmail().then((result) => console.log(result, "Email sent sucessfully.."));
