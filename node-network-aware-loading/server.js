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
const request = require('request');
const cors = require('cors');

const PORT = parseInt(process.env.PORT, 10) || 5000;
const BUILD_PATH ='build';
const IMAGES_PATH = `static/images/`;

const app = express();
app.disable('x-powered-by');
app.use(cors());

app.use(express.static(path.join(__dirname, BUILD_PATH)));
app.set('views', `${__dirname}/${BUILD_PATH}`);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/connection-aware-image', (req, res) => {
  console.log('[server connection-aware-image request] Effective Connection Type => ', req.headers.ect);
  let fileName;
  switch(req.headers.ect) {
    case 'slow-2g':
    case '2g':
      fileName = 'min-res.jpg';
      break;
    case '3g':
      fileName = 'medium-res.jpg';
      break;
    case '4g':
      fileName = 'max-res.jpg';
      break;
    default:
      fileName = 'max-res.jpg';
      break;
  }

  try {
    request.get(`${req.protocol}://${req.get('host')}/${IMAGES_PATH}${fileName}`).pipe(res);
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
  res.sendFile(path.join(__dirname, BUILD_PATH, 'index.html'));
});

app.listen(
  PORT,
  () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  }
);
