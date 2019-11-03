
# Demo: Device class aware resource loading in React

[Live Demo](https://adaptive-loading.web.app/cra-device-class-aware-loading)

A demo showing how to use device class aware resource loading in React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
```
git clone https://github.com/GoogleChromeLabs/adaptive-loading
cd cra-device-class-aware-loading
```
### local development
```
npm install  
npm run dev
```

### production build
```
npm install  
npm run build
```

### production run(e.g. on Glitch)
```
npm install  
npm start
```

## Approach
It is to UA(user agent) match and try to determine the characteristics of the device based on that. e.g if you detect I am on a "Pixel 2", a look-up of the device hardware from a service could let you know details about my CPU.
We can find out device model name with the help of [DeviceAtlas](https://deviceatlas.com) (basically by parsing UA) and pair that up with a static (e.g device.json) JSON merge of ([Android](https://browser.geekbench.com/android-benchmarks.json) and [iOS](https://browser.geekbench.com/ios-benchmarks.json)) to do a "closet match" check against the "name" field in that JSON using [string-similarity](https://github.com/aceakash/string-similarity) or [get-closest](https://github.com/cosmosio/get-closest) because there might be a slight difference in the device model names between [DeviceAtlas](https://deviceatlas.com) and [Geekbench Browser](https://browser.geekbench.com).

## Dependencies
This demo relies on the [DeviceAtlas](https://deviceatlas.com) API for device detection and on the [Geekbench Browser](https://browser.geekbench.com) JSON data for device's CPU and Compute performance detection of [Android](https://browser.geekbench.com/android-benchmarks.json) and [iOS](https://browser.geekbench.com/ios-benchmarks.json).
