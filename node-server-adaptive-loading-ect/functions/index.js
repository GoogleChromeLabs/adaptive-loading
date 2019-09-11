const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send('Hello from Firebase!');
// });

const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const request = require('request');

const app = express();
app.disable('x-powered-by');
app.use(cors());

// check requests
// const morgan = require('morgan');
// app.use(morgan('combined'));

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/connection-aware-image', (req, res) => {
  let url;
  console.log('[server connection-aware-image request] Effective Connection Type => ', req.headers.ect);
  switch(req.headers.ect) {
    case 'slow-2g':
    case '2g':
      url = 'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmin-res.jpg?v=1562842586912';
      break;
    case '3g':
      url = 'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmedium-res.jpg?v=1562842587169';
      break;
    case '4g':
      url = 'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmax-res.jpg?v=1562842587982';
      break;
    default:
      url = 'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmax-res.jpg?v=1562842587982';
      break;
  }

  try {
    request.get(url).pipe(res);
  } catch (error) {
    console.log('[server connection-aware-image request proxy] error => ', error);
    res.json({error});
  }
});

app.use(express.static(path.join(__dirname, 'build')));

// need to declare a 'catch all' route on your express server 
// that captures all page requests and directs them to the client
// the react-router do the route part
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(
  process.env.PORT || 5000,
  () => {
    console.log(`Frontend start on http://localhost:5000`);
  }
);

exports.app = functions.https.onRequest(app);
