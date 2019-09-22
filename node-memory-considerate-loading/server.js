/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

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

app.get('/memory-considerate-image', (req, res) => {
  // TODO: As this is a demo, I think it should be easy enough to change these numbers as needed in the future.
  const MEMORY_LIMIT = 4; // Threshold is 4GB RAM
  // inspired by https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints/#device_hints
  const deviceMemory = req.headers['device-memory'];
  console.log('[server memory-considerate-image request] Device Memory => ', deviceMemory);

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

  const file = deviceMemory < MEMORY_LIMIT ?
    path.join(__dirname, 'public', 'assets', 'images', 'min-res.jpg') :
    path.join(__dirname, 'public', 'assets', 'images', 'max-res.jpg');

  const dir = path.join(__dirname, 'public');
  if (file.indexOf(dir + path.sep) !== 0) {
      return res.status(403).end('Forbidden');
  }
  const type = mime[path.extname(file).slice(1)] || 'text/plain';
  const readStream = fs.createReadStream(file);
  readStream.on('open', function () {
      res.set('Content-Type', type);
      readStream.pipe(res);
  });
  readStream.on('error', function () {
      res.set('Content-Type', 'text/plain');
      res.status(404).end('Not found');
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(
  process.env.PORT || 5000,
  () => {
    console.log(`Frontend start on http://localhost:5000`);
  }
);
