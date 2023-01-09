const accountSid = "";
const authToken = "";
const client = require('twilio')(accountSid, authToken);

function sendTextMessage(){
  client.messages.create({
   body: 'This is dummy text message and test message from Akhil',
   from: '',
   to: ''
 })
.then(message => console.log(message))
.catch(error => console.log(error))
}

sendTextMessage()

