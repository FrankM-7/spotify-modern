const request = require('request');
const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');  // Import cors
const bodyParser = require('body-parser');
const {google} = require('googleapis');

const port = 5000

dotenv.config()

var spotify_client_id = process.env.REACT_APP_CLIENT_ID
var spotify_client_secret = process.env.REACT_APP_CLIENT_SECRET
const youtube = google.youtube({ version: 'v3', auth: process.env.REACT_APP_YOUTUBE_API_KEY });

var app = express();

app.use(cors());  // Use cors middleware
app.use(bodyParser.json());

var access_token = null;  // Store the access token here

var generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

app.get('/auth/login', (req, res) => {


    console.log("trying to login");

    var scope = "streaming \
                 user-read-email \
                 user-read-private"
  
    var state = generateRandomString(16);
  
    var auth_query_parameters = new URLSearchParams({
      response_type: "code",
      client_id: spotify_client_id,
      scope: scope,
      redirect_uri: "http://localhost:5000/auth/callback",
      state: state
    })
  
    res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
});

app.get('/auth/callback', (req, res) => {

    var code = req.query.code;
    console.log(code);
  
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: "http://localhost:5000/auth/callback",
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      json: true
    };
  
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        access_token = body.access_token;
        console.log(body);
        res.redirect('http://localhost:3000/')
      }
    });
});

app.get('/auth/token', (req, res) => {
  console.log("sending token");
  if (access_token) {
    res.json({
        access_token: access_token
    });
  } else {
    console.log("no token to send yet");
  }
});

// Define a route to handle the PUT request
app.put('/playback/transfer', (req, res) => {
  // Retrieve the data from the request body
  const { device_id } = req.body;

  if (device_id === null) {
    console.log("no device id");
    return;
  }

  console.log("transferring playback to device: " + device_id);

  // Define the options for the request
  const options = {
    url: 'https://api.spotify.com/v1/me/player',
    headers: {
      'Authorization': 'Bearer ' + access_token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      device_ids: [device_id]
    })
  };

  // Send the PUT request to the Spotify API
  request.put(options, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
  });

  // Send a response back to the client
  res.status(200).send('Data received successfully');
});

app.post('/search', async (req, res) => {
  console.log("searching for video ID")
  youtube.search.list({
    part: 'snippet',
    q: req.body.query,
  }, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }

    res.json(response.data.items);
    console.log(response.data.items[0].id.videoId);
  });
});
  
  

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})