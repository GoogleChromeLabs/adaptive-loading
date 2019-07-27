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
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const DeviceApiWeb = require('deviceatlas-deviceapi').DeviceApiWeb;
const stringSimilarity = require('string-similarity');
const SIMILARITY_THRESHOLD = .88;

app.disable('x-powered-by');
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

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

// need to declare a "catch all" route on your express server 
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
