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
const fs = require('fs');
const cors = require('cors');

const IMAGES_PATH = 'public/assets/images';

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

  const mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
  };

  const file = path.join(__dirname, IMAGES_PATH, fileName);
  const type = mime[path.extname(file).slice(1)] || 'text/plain';
  const readStream = fs.createReadStream(file);
  readStream.on('open', function () {
    res.set('Content-Type', type);
    readStream.pipe(res);
  });
  readStream.on('error', function () {
    console.log('[server connection-aware-image request] error => ', error);
    res.set('Content-Type', 'text/plain');
    res.status(404).end('Not found');
  });
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
