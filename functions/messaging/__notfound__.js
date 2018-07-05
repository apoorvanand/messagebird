const lib = require('lib')({ token: process.env.STDLIB_TOKEN })
const send = require('../../helpers/send.js')
const axios = require('axios')

/**
* Not found handler - handles all SMS that don't match a command
*   (i.e. "more" = functions/messaging/more.js)
* @param {string} sender The phone number that sent the text to be handled
* @param {string} receiver The StdLib phone number that received the SMS
* @param {string} message The contents of the SMS
* @param {string} createdDatetime Datetime when the SMS was sent
* @returns {any}
*/
module.exports = async (sender = '', receiver = '', message = '', createdDatetime = '', context) => {
  let host = 'https://email-parser-woiobywivz.now.sh'
  let uri = /registeruser/
  let response = await axios({
    method: 'post',
    url: host + uri,
    headers:
      {
        'Content-Type': 'application/json'
      },
    data: { from:'sender',text: message,rec:'receiver' }
  })
  return send(receiver, sender, `Check the inbox at https://email-parser-woiobywivz.now.sh/inbox`)
    console.log("sent");

}

