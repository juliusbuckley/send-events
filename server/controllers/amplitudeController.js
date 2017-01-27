import axios from 'axios';
import qs from 'querystring';
// SEND POST REQUEST TO AMPLITUDE API
const eventData = {"user_id": "able_doe@gmail.com", "event_type": "watch_test", "user_properties": {"Cohort": "Test A"}, "country": "United States", "ip": "127.0.1.1", "time": 1396381378126};
const postEvents = (req, res) => {
  const apiUrl = 'https://api.amplitude.com/httpapi?';
  const data = {
    api_key: process.env.AMPLITUDE_API_KEY,
    event: JSON.stringify([eventData])
  };
  axios.post(apiUrl, qs.stringify(data))
    .then((data) => {
      res.send('event sent!');
    })
    .catch((err) => { console.error(`Error: ${err.response.data}`); });
};
export default postEvents;
