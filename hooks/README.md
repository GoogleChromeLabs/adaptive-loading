
## Objective

Enable web developers to differentially deliver lightweight, fast experiences for users on low-end Android phones and on slower network connection in emerging markets and richer, more heavily-interactive experience for users who can afford high-end phones. We propose to achieve this differentiation at a component-level, making components environment-aware and adaptive.

## Installation

Now that the adaptive React hooks are [custom hooks](https://reactjs.org/docs/hooks-custom.html) we can just use them like normal React hooks after importing them.

```js
import { useNetworkStatus } from './network';
import { useHardwareConcurrency } from './hardware-concurrency';
import { useMemoryStatus } from './memory';
import { useBatteryStatus } from './battery';
import { useDeviceClass } from './device-class';
import { useSaveData } from './save-data';
```

## Usage

The following are a suite of [React Hooks](https://reactjs.org/docs/hooks-overview.html) for providing reusable stateful behavior in the form of environment-signals between different components.

### Network

React hook for getting network status (effective connection type)

```js
import React from 'react';

import { useNetworkStatus } from './network';

const MyComponent = () => {
  const { effectiveConnectionType } = useNetworkStatus();

  let media;
  switch(effectiveConnectionType) {
    case 'slow-2g':
      media = <img className='responsive' src='…' alt='low resolution' />;
      break;
    case '2g':
      media = <img className='responsive' src='…' alt='medium resolution' />;
      break;
    case '3g':
      media = <img className='responsive' src='…' alt='high resolution' />;
      break;
    case '4g':
      media = <video className='responsive' src='…' controls />;
      break;
    default:
      media = <video className='responsive' src='…' controls />;
      break;
  }
  
  return <div>{media}</div>;
};
```

### CPU Cores / Hardware Concurrency

React hook for getting the number of logical CPU processor cores of the user's device

```js
import React from 'react';

import { useHardwareConcurrency } from './hardware-concurrency';

const MyComponent = () => {
  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  return (
    <div>
      { numberOfLogicalProcessors <= 4 ? <img src='...' /> : <video src='...' /> }
    </div>
  );
};
```

### Memory

React hook for getting memory status of the device

```js
import React from 'react';

import { useMemoryStatus } from './memory';

const MyComponent = () => {
  const { deviceMemory } = useMemoryStatus();
  return (
    <div>
      { deviceMemory < 4 ? <img src='...' /> : <video src='...' /> }
    </div>
  );
};
```

### Battery

React hook for getting battery status

```js
import React from 'react';

import { useBatteryStatus } from './battery';

const MyComponent = () => {
  const { level } = useBatteryStatus();
  return (
    <div>
      { level > 0.75 ? <video src='...' /> : <img src='...' /> }
    </div>
  );
};
```

### Device Class

React hook for getting device-class whether it's light or heavy

```js
import React from 'react';

import { useDeviceClass } from './device-class';

const MyComponent = () => {
  const { deviceClass } = useDeviceClass();
  return (
    <div>
      { deviceClass === 'light' ? <img src='...' /> : <video src='...' /> }
    </div>
  );
};
```

### Save Data

React hook for getting Save Data whether it's Lite mode enabled or not

```js
import React from 'react';

import { useSaveData } from './save-data';

const MyComponent = () => {
  const { saveData } = useSaveData();
  return (
    <div>
      { saveData ? <img src='...' /> : <video src='...' /> }
    </div>
  );
};
```

## Browser Support

* [Network Information API - effectiveType](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType) is available in [Chrome 61+, Opera 48+, Edge 76+, Chrome for Android 76+, Firefox for Android 68+](https://caniuse.com/#search=effectiveType)

* [Hardware Concurrency API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency) is available in [Chrome 37+, Safari 10.1+, Firefox 48+, Opera 24+, Edge 15+, Chrome for Android 76+, Safari on iOS 10.3+, Firefox for Android 68+, Opera for Android 46+](https://caniuse.com/#search=navigator.hardwareConcurrency)

* [Performance memory API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) is a non-standard and only available in [Chrome 7+, Opera, Chrome for Android 18+, Opera for Android](https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory)

* [Device Memory API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory) is available in [Chrome 63+, Opera 50+, Chrome for Android 76+, Opera for Android 46+](https://caniuse.com/#search=deviceMemory)

* [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API) is available in [Chrome 38+, Opera 25+, Edge 76+, Chrome for Android 76+, Firefox for Android 68+, Opera for Android 46+](https://caniuse.com/#search=battery)

* [User Agent string](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent) is available in [Chrome 77+, Safari 13+, Firefox 69+, Opera 62+, Edge 18+, Chrome for Android 76+, Safari on iOS 13.1+, Firefox for Android 68+, Opera for Android 46+](https://caniuse.com/#search=userAgent)

* [Save Data API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/saveData) is available in [Chrome 65+, Opera 62+, Chrome for Android 76+, Opera for Android 46+](https://caniuse.com/#search=saveData)

## Demo

### Network

* [Network-aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-network-aware-loading) with create-react-app ([Live](https://adaptive-loading.web.app/cra-network-aware-loading/))
* [Network-aware code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-network-aware-code-splitting) with create-react-app ([Live](https://adaptive-loading.web.app/cra-network-aware-code-splitting/))
* [Network-aware data-fetching](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-network-aware-data-fetching) with create-react-app ([Live](https://adaptive-loading.web.app/cra-network-aware-data-fetching/))

* [React Movie - network-aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-movie-network-aware-loading) ([Live](https://adaptive-loading.web.app/react-movie-network-aware-loading/))
* [React Shrine - network-aware code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-shrine-network-aware-code-splitting) ([Live](https://adaptive-loading.web.app/react-shrine-network-aware-code-splitting/))
* [React eBay - network-aware code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-ebay-network-aware-code-splitting) ([Live](https://adaptive-loading.web.app/react-ebay-network-aware-code-splitting/))
* [React Lottie - network-aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-lottie-network-aware-loading) ([Live](https://adaptive-loading.web.app/react-lottie-network-aware-loading/))

### CPU Cores / Hardware Concurrency

* [Hardware concurrency considerate code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-hardware-concurrency-considerate-code-splitting) with create-react-app ([Live](https://adaptive-loading.web.app/cra-hardware-concurrency-considerate-code-splitting/))
* [Hardware concurrency considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-hardware-concurrency-considerate-loading) with create-react-app ([Live](https://adaptive-loading.web.app/cra-hardware-concurrency-considerate-loading/))

### Memory

* [Memory considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-memory-considerate-loading) with create-react-app ([Live](https://adaptive-loading.web.app/cra-memory-considerate-loading/))
* [Memory considerate loading (SketchFab version)](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-memory-considerate-loading-sketchfab) with create-react-app ([Live](https://adaptive-loading.web.app/cra-memory-considerate-loading-sketchfab/))
* [Memory-considerate animation-toggling](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cna-memory-considerate-animation) with create-next-app ([Live](https://cna-memory-animation.firebaseapp.com/))

* [React Dixie Mesh - memory considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-dixie-memory-considerate-loading) ([Live](https://adaptive-loading.web.app/react-dixie-memory-considerate-loading/))

### Battery

* [Battery considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-battery-considerate-loading) with create-react-app ([Live](https://adaptive-loading.web.app/cra-battery-considerate-loading/))

### Device Class

* [Device-class aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-device-class-aware-code-splitting) ([Live](https://adaptive-loading.web.app/cra-device-class-aware-code-splitting/), [Moto G4](https://www.webpagetest.org/result/190828_2S_431d84f1cc15aace86d5046b348284b6/), [Galaxy S7](https://www.webpagetest.org/result/190828_SB_5b8fbb3a07e31f68f51681d6d67b7069/))
* [UA-aware code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-ua-aware-code-splitting) with create-react-app ([Live](https://adaptive-loading.web.app/cra-ua-aware-code-splitting/))

### Save Data

* [React Twitter - save-data loading based on Client Hint](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-twitter-save-data-loading(client-hint)) ([Live](https://adaptive-loading.web.app/react-twitter-save-data-loading(client-hint)/))
* [React Twitter - save-data loading based on Hook](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-twitter-save-data-loading(hook)) ([Live](https://adaptive-loading.web.app/react-twitter-save-data-loading(hook)/))

### Hybrid

* [React Youtube - adaptive loading with mix of network, memory and hardware concurrency](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-youtube-adaptive-loading) ([Live](https://adaptive-loading.web.app/react-youtube-adaptive-loading/))

## References

* [Adaptive serving based on network quality](https://web.dev/adaptive-serving-based-on-network-quality/)
* [Adaptive Serving using JavaScript and the Network Information API](https://addyosmani.com/blog/adaptive-serving/)
* [Serving Adaptive Components Using the Network Information API](https://dev.to/vorillaz/serving-adaptive-components-using-the-network-information-api-lbo)

## License

Licensed under the Apache-2.0 license.
