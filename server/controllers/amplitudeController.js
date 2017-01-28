import axios from 'axios';
import qs from 'querystring';
import fs from 'fs';
import readline from 'readline';
// SEND POST REQUEST TO AMPLITUDE API
const postEvent = (eventData) => {
  // CHANGE KEYS TO BE COMPATIBLE WITH AMPLITUDE REQUIRED ARGS
  eventData = eventData.replace('event', 'event_type');
  eventData = eventData.replace('userId', 'user_id');
  eventData = eventData.replace('"type": "identify"', '"type": "identify", "event_type": "Identify"');
  const apiUrl = 'https://api.amplitude.com/httpapi?';
  const data = {
    api_key: process.env.AMPLITUDE_API_KEY,
    event: eventData
  };
  axios.post(apiUrl, qs.stringify(data))
    .then((data) => {
      console.log('event sent!');
    })
    .catch((err) => { console.log(data); });
};
// READ events.txt
const readEvents = (req, res) => {
  const lineReader = readline.createInterface({
    input: fs.createReadStream('events.txt')
  });
  lineReader.on('line', line => {
    postEvent(line);
  });
  res.send('Events posting...');
};
export { readEvents, postEvent };