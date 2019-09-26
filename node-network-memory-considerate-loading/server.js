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

app.get('/network-memory-considerate-model', (req, res) => {
  const ect = req.headers.ect;
  const deviceMemory = req.headers['device-memory'];
  console.log('[server network-memory-considerate-model request] ECT, Device Memory => ', ect, deviceMemory);
  
  // TODO: As this is a demo, I think it should be easy enough to change these numbers as needed in the future. -> dotenv
  const MEMORY_LIMIT = 4; // Threshold is 4GB RAM
  const ECT_LIMIT = '4g';
  // inspired by https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints/#device_hints
  const experienceType = (ect === ECT_LIMIT && deviceMemory > MEMORY_LIMIT) ? 'heavy' : 'light';
  res.json({experienceType});
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
