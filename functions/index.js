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
const next = require('next');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const request = require('request');
const app = express();
const DeviceApiWeb = require('deviceatlas-deviceapi').DeviceApiWeb;
const stringSimilarity = require('string-similarity');
const cacheableResponse = require('cacheable-response');

const SIMILARITY_THRESHOLD = .88;
const BUILD_PATH ='builds';
const PORT = parseInt(process.env.PORT, 10) || 5000;
const HOST = 'https://adaptive-loading.web.app/';

const REACT_MOVIE_NETWORK_AWARE_LOADING = 'react-movie-network-aware-loading';
const REACT_SHRINE_NETWORK_AWARE_CODE_SPLITTING = 'react-shrine-network-aware-code-splitting';
const REACT_YOUTUBE_ADAPTIVE_LOADING = 'react-youtube-adaptive-loading';
const CNA_MEMORY_CONSIDERATE_ANIMATION = 'cna-memory-considerate-animation';
const MICROSITE = 'microsite';
const NODE_MEMORY_CONSIDERATE_LOADING = 'node-memory-considerate-loading';
const NODE_NETWORK_AWARE_LOADING = 'node-network-aware-loading';
const CNA_MEMORY_CONSIDERATE_ANIMATION_ROUTES = [`/${CNA_MEMORY_CONSIDERATE_ANIMATION}`, `/${CNA_MEMORY_CONSIDERATE_ANIMATION}/*`];
const MICROSITE_ROUTES = ['/', '/react-hooks', '/demos', '/resources', '/*'];

app.disable('x-powered-by');
app.use(cors());

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
  return res.send('pong');
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
    return request.get(url).pipe(res);
  } catch (error) {
    console.log('[server dpr-aware-image request proxy] error => ', error);
    return res.status(500).json({
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
  const IMAGES_PATH = `static/${NODE_MEMORY_CONSIDERATE_LOADING}/images/`;
  const fileName = deviceMemory < MEMORY_LIMIT ? 'min-res.jpg' : 'max-res.jpg';

  try {
    return request.get(`${HOST}${IMAGES_PATH}${fileName}`).pipe(res);
  } catch (error) {
    console.log('[server memory-considerate-image request proxy] error => ', error);
    return res.status(500).json({
      message: error
    });
  }
});

app.get('/connection-aware-image', (req, res) => {
  console.log('[server connection-aware-image request] Effective Connection Type => ', req.headers.ect);
  const IMAGES_PATH = `static/${NODE_NETWORK_AWARE_LOADING}/images/`;
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
    return request.get(`${HOST}${IMAGES_PATH}${fileName}`).pipe(res);
  } catch (error) {
    console.log('[server connection-aware-image request proxy] error => ', error);
    return res.status(500).json({
      message: error
    });
  }
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
  return res.json({experienceType});
});

app.get('/save-data', (req, res) => {
  const SAVE_DATA_MODE = {
    ON: 'on',
    OFF: 'off'
  };

  const requestSaveData = req.headers['save-data'];
  const saveData = requestSaveData === SAVE_DATA_MODE.ON;

  console.log('[server save-data route] requestSaveData => ', requestSaveData);
  console.log('[server save-data route] saveData => ', saveData);

  return res.status(200).json({saveData});
});

// need to declare a "catch all" route on your express server 
// that captures all page requests and directs them to the client
// the react-router do the route part
app.use(`/${REACT_MOVIE_NETWORK_AWARE_LOADING}/*`, (req, res) => {
  return res.sendFile(path.join(__dirname, BUILD_PATH, REACT_MOVIE_NETWORK_AWARE_LOADING, 'index.html'));
});

app.use(`/${REACT_SHRINE_NETWORK_AWARE_CODE_SPLITTING}/*`, (req, res) => {
  return res.sendFile(path.join(__dirname, BUILD_PATH, REACT_SHRINE_NETWORK_AWARE_CODE_SPLITTING, 'index.html'));
});

app.use(`/${REACT_YOUTUBE_ADAPTIVE_LOADING}/*`, (req, res) => {
  return res.sendFile(path.join(__dirname, BUILD_PATH, REACT_YOUTUBE_ADAPTIVE_LOADING, 'index.html'));
});

app.use(CNA_MEMORY_CONSIDERATE_ANIMATION_ROUTES, (req, res) => {
  const BASENAME = `/${CNA_MEMORY_CONSIDERATE_ANIMATION}`;
  const cnaMemoryConsiderateAnimationApp = next({dev: false, conf: {distDir: `${BUILD_PATH}${BASENAME}`}});
  cnaMemoryConsiderateAnimationApp.setAssetPrefix(BASENAME);
  if (req.originalUrl !== BASENAME) {
    req.url = req.originalUrl.replace(BASENAME, '');
  } else {
    req.url = req.originalUrl.replace(BASENAME, '/');
  }
  const cnaMemoryConsiderateAnimationHandle = cnaMemoryConsiderateAnimationApp.getRequestHandler();

  return cnaMemoryConsiderateAnimationApp.prepare().then(() => cnaMemoryConsiderateAnimationHandle(req, res));
});

app.use(MICROSITE_ROUTES, (req, res) => {
  const micrositeApp = next({dev: false, conf: {distDir: `${BUILD_PATH}/${MICROSITE}`}});
  const micrositeHandle = micrositeApp.getRequestHandler();

  micrositeApp.prepare()
    .then(() => {
      const ssrCache = cacheableResponse({
        ttl: 1000 * 60 * 60, // 1hour
        get: async ({ req, res, pagePath, queryParams }) => ({
          data: await micrositeApp.renderToHTML(req, res, pagePath, queryParams),
        }),
        send: ({ data, res }) => res.send(data)
      });
      if (req.path.includes('/_next')) {
        micrositeHandle(req, res);
      } else {
        ssrCache({req, res, pagePath: req.path});
      }
    })
    .catch(exception => {
      console.error(exception.stack);
      process.exit(1);
    });
});

exports.app = functions.https.onRequest(app);
