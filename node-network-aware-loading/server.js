/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express');
const path = require('path');
const cors = require('cors');
const request = require('request');

const app = express();
app.disable('x-powered-by');
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

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
    res.status(500).json({
      message: error
    });
  }
});

// need to declare a "catch all" route on your express server 
// that captures all page requests and directs them to the client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(
  process.env.PORT || 5000,
  () => {
    console.log(`Frontend start on http://localhost:5000`);
  }
);
