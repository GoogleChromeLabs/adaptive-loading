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

const functions = require('firebase-functions');

const express = require('express');
const path = require('path');
const cors = require('cors');
const request = require('request');

const app = express();
app.disable('x-powered-by');
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));
app.set('views', __dirname + '/build');
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
  const url = deviceMemory < MEMORY_LIMIT ?
    'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmin-res.jpg?v=1562842586912' :
    'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmax-res.jpg?v=1562842587982';

  try {
    request.get(url).pipe(res);
  } catch (error) {
    console.log('[server memory-considerate-image request proxy] error => ', error);
    res.json({error});
  }
});

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
