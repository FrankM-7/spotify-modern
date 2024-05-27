import {Buffer} from 'buffer';
import axios from 'axios';

const querystring = require('querystring');
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID; // Your client id
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET; // Your secret

if (typeof CLIENT_ID === 'undefined') {
  throw new Error('REACT_APP_CLIENT_ID is undefined. Make sure it\'s set in .env');
}
if (typeof CLIENT_SECRET === 'undefined') {
  throw new Error('REACT_APP_CLIENT_SECRET is undefined. Make sure it\'s set in .env');
}

// your application requests authorization
const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    Authorization: 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: querystring.stringify({
    grant_type: 'client_credentials',
  }),
};

const requestAuthorization = () => {
  return axios.post(authOptions.url, authOptions.data, { headers: authOptions.headers });
};

export { requestAuthorization };