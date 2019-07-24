
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const DeviceApiWeb = require('deviceatlas-deviceapi').DeviceApiWeb;
const stringSimilarity = require('string-similarity');

app.disable('x-powered-by');
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

// DeviceAtlas server-side API
const deviceApi = (function () {
  const devApi = new DeviceApiWeb();
  
  try {
    devApi.loadDataFromFile('./lib/device-atlas/device-data-file/55268_20190722.json');
  } catch (ex) {
    devApi.error = ex;
    console.log(ex.message);
  }
  
  return devApi;
})();

app.get('/api/device', function (req, res) {
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
      message: 'Currently only support Android/iOS devices.'
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

  // .88 is similarity threshold
  console.log('[server] bestMatchRating => ', bestMatchRating);
  if (bestMatchRating < .88) {
    return res.status(404).json({
      message: 'Not found matched benchmark!'
    });
  }
  
  return res.status(200).send(allBenchmarks[bestMatchIndex]);
});

// need to declare a "catch all" route on your express server 
// that captures all page requests and directs them to the client
// the react-router do the route part
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(
  process.env.PORT || 5000,
  function () {
    console.log(`Frontend start on http://localhost:5000`);
  }
);
