
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

// TODO: device properties testing -> remove on release
// app.get('/api/device-properties', function (req, res) {
//   if (deviceApi.error) {
//     return res.status(500).json({
//       message: deviceApi.error
//     });
//   }
//   const properties = deviceApi.getPropertiesFromRequest(req);
//   const props = {};
//   for (const name in properties.getMap()) {
//       props[name] = {};
//       props[name]['value'] = properties.get(name).getValue();
//   }
//   return res.status(200).send(props);
// });

app.get('/api/device', function (req, res) {
  console.log('[server] user-agent => ', req.headers['user-agent']);
  // TODO: device properties testing -> remove on release
  // const similarity1 = stringSimilarity.compareTwoStrings('Galaxy Tab 4 10.1 LTE', 'Galaxy Tab 4 10.1');
  // const similarity2 = stringSimilarity.compareTwoStrings('Motorola Moto X 2nd Gen', 'Motorola Moto X');
  // console.log('similarity1, similarity2 => ', similarity1, similarity2);
  // similarity1, similarity2 =>  0.896551724137931 0.8

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

  // TODO: if cookieSupport is not true, iOS device name is not valid.
  // The client-side component uses a cookie to support the detection of granular models but the cookie is set after the first page load, therefore it is not recommended to rely on the client-side properties for the very first page load.
  // Here is a reference to our documentation explaining that, section "Basic Server-side Usage".
  // https://docs.deviceatlas.com/apis/clientside/1.5/README.ClientSide.html
  // what we can suggest is to trigger a reload of the page, with Javascript, after the initial detection. I know it's not an elegant solution but that's how the library works at the moment.
  // you could check if the cookie DAPROPS is set. Would something like this do?
  // (function reloadPage(){-1!=document.cookie.indexOf("DAPROPS=")?location.reload():setTimeout(reloadPage,50)})();
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
