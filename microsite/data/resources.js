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

const resourcesDoc = `
## Browser Support

* [Network Information API - effectiveType](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType) is available in [Chrome 61+, Opera 48+, Edge 76+, Chrome for Android 76+, Firefox for Android 68+](https://caniuse.com/#search=effectiveType)

* [Save Data API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/saveData) is available in [Chrome 65+, Opera 62+, Chrome for Android 76+, Opera for Android 46+](https://caniuse.com/#search=saveData)

* [Hardware Concurrency API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency) is available in [Chrome 37+, Safari 10.1+, Firefox 48+, Opera 24+, Edge 15+, Chrome for Android 76+, Safari on iOS 10.3+, Firefox for Android 68+, Opera for Android 46+](https://caniuse.com/#search=navigator.hardwareConcurrency)

* [Performance memory API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) is a non-standard and only available in [Chrome 7+, Opera, Chrome for Android 18+, Opera for Android](https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory)

* [Device Memory API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory) is available in [Chrome 63+, Opera 50+, Chrome for Android 76+, Opera for Android 46+](https://caniuse.com/#search=deviceMemory)

## References

* [Sophisticated Adaptive Loading Strategies](https://medium.com/@roderickhsiao/sophisticated-adaptive-loading-strategies-7118341fcf91)  
* [Adaptive serving based on network quality](https://web.dev/adaptive-serving-based-on-network-quality/)  
* [Adaptive Serving using JavaScript and the Network Information API](https://addyosmani.com/blog/adaptive-serving/)  
* [Serving Adaptive Components Using the Network Information API](https://dev.to/vorillaz/serving-adaptive-components-using-the-network-information-api-lbo)  
`;

export {
  resourcesDoc
};
