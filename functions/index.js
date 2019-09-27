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
const fs = require('fs');
const cors = require('cors');

const request = require('request');
const app = express();
const DeviceApiWeb = require('deviceatlas-deviceapi').DeviceApiWeb;
const stringSimilarity = require('string-similarity');

const SIMILARITY_THRESHOLD = .88;
const BUILD_PATH ='builds';
const IMAGES_PATH = 'assets/images';

app.disable('x-powered-by');
app.use(cors());
app.use(express.static(path.join(__dirname, BUILD_PATH)));
app.set('views', `${__dirname}/${BUILD_PATH}`);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// DeviceAtlas server-side API
const deviceApi = (() => {
  const devApi = new DeviceApiWeb();
  
  try {
    devApi.loadDataFromFile('./lib/device-atlas/device-data-file/55268_20190722.json');
  } catch (ex) {
    devApi.error = ex;
    console.log(ex.message);
  }
  
  return devApi;
})();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/api/device', (req, res) => {
  console.log('[server] user-agent => ', req.headers['user-agent']);

  if (deviceApi.error) {
    return res.status(500).json({
      message: deviceApi.error
    });
  }
  
  const properties = deviceApi.getPropertiesFromRequest(req);

  const isMobileDevice = properties.get('mobileDevice').getValue();
  if (!isMobileDevice) {
    return res.status(400).json({
      message: 'We currently only support detecting Android and iOS devices.'
    });
  }

  const androidBenchmarks = require('./lib/geekbench/android-benchmarks.json').devices;
  const iosBenchmarks = require('./lib/geekbench/ios-benchmarks.json').devices;
  const allBenchmarks = [...androidBenchmarks, ...iosBenchmarks];
  const isiOS = properties.get('osiOs').getValue();
  const vendor = properties.get('vendor').getValue();
  const marketingName = properties.get('marketingName').getValue();

  const detectedDeviceName = !isiOS ? `${vendor} ${marketingName}` : marketingName;
  const benchmarkDeviceNames = allBenchmarks.map(benchmark => benchmark.name);
  const bestMatch = stringSimilarity.findBestMatch(detectedDeviceName, benchmarkDeviceNames);
  const bestMatchIndex = bestMatch.bestMatchIndex;
  const bestMatchRating = bestMatch.ratings[bestMatchIndex].rating;

  console.log('[server] bestMatchRating => ', bestMatchRating);
  if (bestMatchRating < SIMILARITY_THRESHOLD) {
    return res.status(404).json({
      message: 'A matching benchmark could not be found.'
    });
  }
  
  return res.status(200).send(allBenchmarks[bestMatchIndex]);
});

app.get('/dpr-aware-image', (req, res) => {
  console.log('[server dpr-aware-image request] DPR => ', req.headers.dpr);
  const dpr = req.headers.dpr || 1;
  const url = `https://via.placeholder.com/${dpr * 400}/92c952`;
  
  try {
    request.get(url).pipe(res);
  } catch (error) {
    console.log('[server dpr-aware-image request proxy] error => ', error);
    res.status(500).json({
      message: error
    });
  }
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
    path.join(__dirname, IMAGES_PATH, 'min-res.jpg') :
    path.join(__dirname, IMAGES_PATH, 'max-res.jpg');

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

app.get('/connection-aware-image', (req, res) => {
  let url;
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
      res.set('Content-Type', 'text/plain');
      res.status(404).end('Not found');
  });
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

// need to declare a "catch all" route on your express server 
// that captures all page requests and directs them to the client
// the react-router do the route part
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, BUILD_PATH));
});
app.listen(
  process.env.PORT || 5000,
  () => {
    console.log(`Frontend start on http://localhost:5000`);
  }
);

exports.app = functions.https.onRequest(app);
