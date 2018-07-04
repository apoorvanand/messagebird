const lib = require('lib')({ token: process.env.STDLIB_TOKEN })
const send = require('../../helpers/send.js')
const { WebClient } = require('@slack/client');
// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
const token1 = process.env.SLACK_TOKEN;
 
const web = new WebClient(token1);
 
// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'CBL3G3SDD';
 

/**
* MORE handler, responds if user texts "more"
*  (or any uppercase variation like "MORE")
* @param {string} sender The phone number that sent the text to be handled
* @param {string} receiver The StdLib phone number that received the SMS
* @param {string} message The contents of the SMS
* @param {string} createdDatetime Datetime when the SMS was sent
* @returns {any}
*/
module.exports = async (sender = '', receiver = '', message = '', createdDatetime = '', context) => {
  web.chat.postMessage({ channel: conversationId, text: 'Hello there' })
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);
  return send(
    receiver,
    sender,
    `This is the MORE handler for your MessageBird SMS handler on StdLib` +
      `\n\n` +
      `You can customize its behavior in /functions/messaging/more.js`
  )
}
