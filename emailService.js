const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = '';
const CLEINT_SECRET = '';
const REDIRECT_URI = '';
const REFRESH_TOKEN = '';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: '',
        pass: '',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'akhil.chandewar00@gmail.com',
      to: 'akhil.chandewar00@gmail.com',
      subject: 'This is sample subject',
      text: 'This is sample text',
      html: '<h1>Hello World</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));
