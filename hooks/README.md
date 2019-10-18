
## Objective

Enable web developers to differentially deliver lightweight, fast experiences for users on low-end Android phones and on slower network connection in emerging markets and richer, more heavily-interactive experience for users who can afford high-end phones. We propose to achieve this differentiation at a component-level, making components environment-aware and adaptive.

## Installation

Now that the adaptive React hooks are [custom hooks](https://reactjs.org/docs/hooks-custom.html) we can just use them like normal React hooks after importing them.

```js
import { useEffectiveConnectionType } from './network';
import { useHardwareConcurrency } from './hardware-concurrency';
import { useMemoryStatus } from './memory';
import { useBatteryStatus } from './battery';
import { useDeviceClass } from './device-class';
```

## Usage

The following are a suite of [React Hooks](https://reactjs.org/docs/hooks-overview.html) for providing reusable stateful behavior in the form of environment-signals between different components.

### Network

React hook for getting network status (effective connection type)

```js
import React from 'react';

import { useEffectiveConnectionType } from './network';

const MyComponent = () => {
  const effectiveConnectionType = useEffectiveConnectionType();

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
  const { hardwareConcurrency: { numberOfLogicalProcessors } } = useHardwareConcurrency();
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
  const { memoryStatus: { overLoaded } } = useMemoryStatus();
  return (
    <div>
      { overLoaded ? <img src='...' /> : <video src='...' /> }
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
  const { batteryStatus: { level } } = useBatteryStatus();
  return (
    <div>
      { level > 0.75 ? <video src='...' /> : <img src='...' /> }
    </div>
  );
};
```

### Device-class

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

## Web Platform APIs

The React hooks are built on top of a number of existing Web platform APIs.
Hooks allow developers to reuse stateful logic without changing component hierarchy. This makes it easy to share Hooks among many components or with the community.

| API                                    	|                                                        	|
|----------------------------------------	|--------------------------------------------------------	|
| Network Information effectiveType      	| navigator.connection.effectiveType                     	|
| Navigator hardwareConcurrency          	| navigator.hardwareConcurrency                          	|
| Performance memory (Script memory use) 	| performance.memory                                     	|
| Navigator deviceMemory                 	| navigator.deviceMemory                                 	|
| Battery Status                         	| navigator.getBattery()                                 	|
| NavigatorID userAgent API              	| Proxied via navigator.userAgent + device-class mapping 	|

### Network

The [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) summarizes the performance of a users network connection. This allows us to customize how we deliver experiences based on how slow or fast a connection is. One of the signals NetInfo provides us is ECT - the [Effective Connection Type](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType).

ECT analyzes the latency of the current connection and determines which network profile it resembles the most. Valid values for ECT are `4g`, `3g`, `2g`, and `slow-2g`. We typically bucket these into fast (`4G`), medium (`3G`) and slow (`2G`, `slow-2G`). If you are on slow coffee-shop WiFi but your effective speed is `2G`, ECT will report this as the best approximation of your effective connection speed. `navigator.connection.type` may tell us a user is using WiFi, but this doesn’t say anything about the real connection speed, as they may be using a hot spot and the connection is in fact `2G`.

```js
const componentVersion = navigator.connection.effectiveType === '4G' ? 'heavy' : 'lite';
const component = await import(`path/to/component.${componentVersion}.js`);
component.init();
```

### CPU Cores / Hardware Concurrency

The [navigator.hardwareConcurrency](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency) read-only property returns the number of logical processors available to run threads on the user's computer.

We can conditionally load resources like image or video according to the number of logical processors.

```js
const componentVersion = navigator.hardwareConcurrency < 4 ? 'lite' : 'heavy';
const component = await import(`path/to/component.${componentVersion}.js`);
component.init();
```

### Memory

Memory is an unsung hero of the user experience. Good memory management can make your app more stable and more performant; in some cases, its effective use may be the only thing making your app usable at all.

Methods such as [window.performance.memory](https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory) and [navigator.deviceMemory](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory) help determine memory constraints at runtime. Based on this information, you can scale down your memory use. As an example, you can use lower resolution images on low memory devices.

```js
// Low-memory devices load the "lite" version of the Component. 
// The logic below will set `componentVersion` to "lite" if (and only if)
// deviceMemory isn't undefined and returns a number less than 1.

const componentVersion = navigator.deviceMemory < 1 ? 'lite' : 'heavy';
const component = await import(`path/to/component.${componentVersion}.js`);
component.init();
```

The approach we use in memory hook is to monitor how much memory our application is using currently and how close it is to the limit. For now we don't use [navigator.deviceMemory](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory) but [window.performance.memory](https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory) in memory hook. [Here](https://trackjs.com/blog/monitoring-javascript-memory/) You can find more information about how we evaluate memory status.

### Battery

A device without power offers no functionality at all. For this reason, it is critically important that apps be as respectful of battery life as possible.

The [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API), more often referred to as the Battery API, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change. This can be used to adjust your app's resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss.

### Device-class

One approach we can use is to UA match and try to determine the characteristics of the device based on that. e.g if you detect I am on a "Pixel 2", a look-up of the device hardware from a service could let you know details about my CPU.

In device-class hook, we detect the device model by parsing its user agent with the help of [ua-parser-js](https://github.com/faisalman/ua-parser-js) package (it uses [navigator.userAgent](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent) inside of it). We have an array of devices considered 'low-end'/slow.
If the detected device is matched with one of those ‘low-end’ devices, then we determine that we should show light resources, otherwise heavy resources.

## Recipes

* Resource loading

  We can write components that render different elements for different connection speeds.   
  
  For example, if we observe a slow connection, we can render a placeholder or a lower resolution version of our image, but video on a fast connection in order to improve our page loading time.
  
  A <Media /> component in a news article might output:

  -	2g / reduced data mode: a low-resolution image, ~30kb
  -	3g: a high resolution retina image, ~200kb
  -	4g: a HD video ~2MB 

  ```js
  import React from 'react';

  import { useEffectiveConnectionType } from '../../utils/hooks';

  const MyComponent = () => {
    const ect = useEffectiveConnectionType();
    return (
      <div>
        { ect === '4g' ? <video className='responsive' src='…' controls /> : <img className='responsive' src='…' /> }
      </div>
    );  
  };
  ```

* Code-splitting

  Users will be loaded a version of a component based on the speed of their network connection (component loading by dynamic import).  
  
  For example, if it is fast (4G), it will get the best experience, which could be highly interactive but requires a larger bundle. 3G will get an experience with medium interactivity, but a smaller bundle than fast. If it is sufficiently slow (<= 2G quality), the client will get the lightest experience loaded.

  ```js
  import React, { Suspense, lazy } from 'react';

  import { useEffectiveConnectionType } from './network';

  const Heavy = lazy(() => import(/* webpackChunkName: "heavy" */ './Heavy.js'));
  const Light = lazy(() => import(/* webpackChunkName: "light" */ './Light.js'));

  const MyComponent = () => {
    const ect = useEffectiveConnectionType();
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          { ect === '4g' ? <Heavy /> : <Light /> }
        </Suspense>
      </div>
    );
  };
  ```

* Data-fetching

  As the network quality degrades, scale down the number and size of requests. As the connection quality improves, you can scale up your requests to optimal levels.

  For example, on higher quality, unmetered networks, consider prefetching to make it available ahead of time. From a user experience standpoint, this might mean that news reader apps fetch three articles at a time on 2G but fetch twenty articles at a time on Wi-Fi.

* Animation Toggling

  The idea is that if you're on a low memory device, you turn off animations completely but the rest of the experience works, and the animations would only function if the device has enough memory.

### Network

* [Resource loading Live Demo](https://adaptive-loading.web.app/cra-network-aware-loading/)
* [Code-splitting (component loading) Live Demo](https://adaptive-loading.web.app/cra-network-aware-code-splitting/)
* [Data-fetching Live Demo](https://adaptive-loading.web.app/cra-network-aware-data-fetching/)

### Memory

* [Resource loading Live Demo](https://adaptive-loading.web.app/cra-memory-considerate-loading/)
* [Animation toggling Live Demo](https://cna-memory-animation.firebaseapp.com/)

### Battery

* [Resource loading Live Demo](https://adaptive-loading.web.app/cra-battery-considerate-loading/)

### Device-class

* [Code-splitting Live Demo](https://adaptive-loading.web.app/cra-ua-aware-code-splitting/)

## Browser Support

* [Network Information effectiveType API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType) is available in [Chrome 61+, Opera 48+, Chrome for Android 76+, Firefox for Android 68+, Opera for Android 46+](https://caniuse.com/#search=effectiveType)

* [Navigator hardwareConcurrency API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency) is available in [Chrome 37+, Safari 10.1+, Firefox 48+, Opera 24+, Edge 15+, Chrome for Android 76+, Safari on iOS 10.3+, Firefox for Android 68+, Opera for Android 46+](https://caniuse.com/#search=navigator.hardwareConcurrency)

* [Performance memory API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) is a non-standard and only available in [Chrome 7+, Opera, Chrome for Android 18+, Opera for Android](https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory)
* [Navigator deviceMemory API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory) is available in [Chrome 63+, Opera 50+, Chrome for Android 76+, Opera for Android 46+](https://caniuse.com/#search=deviceMemory)

* [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API) is available in [Chrome 38+, Opera 25+, Edge 76+, Chrome for Android 76+, Firefox for Android +68+ Opera for Android 46+](https://caniuse.com/#search=battery)

* [NavigatorID userAgent API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent) is available in [Chrome 77+, Safari 13+, Firefox 69+, Opera 62+, Edge 18+, Chrome for Android 76+, Safari on iOS 13.1+, Firefox for Android 68+, Opera for Android 46+](https://caniuse.com/#search=userAgent)

## Demo

### Network

* [Network-aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-network-aware-loading) with create-react-app ([Live](https://adaptive-loading.web.app/cra-network-aware-loading/))
* [Network-aware code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-network-aware-code-splitting) with create-react-app ([Live](https://adaptive-loading.web.app/cra-network-aware-code-splitting/))
* [Network-aware data-fetching](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-network-aware-data-fetching) with create-react-app ([Live](https://adaptive-loading.web.app/cra-network-aware-data-fetching/))

* [React Movie - network-aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-movie-network-aware-loading) ([Live](https://adaptive-loading.web.app/react-movie-network-aware-loading/))
* [React Shrine - network-aware code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-shrine-network-aware-code-splitting) ([Live](https://adaptive-loading.web.app/react-shrine-network-aware-code-splitting/))

### Memory

* [Memory considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-memory-considerate-loading) with create-react-app ([Live](https://adaptive-loading.web.app/cra-memory-considerate-loading/))
* [Memory considerate loading (SketchFab version)](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-memory-considerate-loading-sketchfab) with create-react-app ([Live](https://adaptive-loading.web.app/cra-memory-considerate-loading-sketchfab/))
* [Memory-considerate animation-toggling](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cna-memory-considerate-animation) with create-next-app ([Live](https://cna-memory-animation.firebaseapp.com/))

### Battery

* [Battery considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-battery-considerate-loading) with create-react-app ([Live](https://adaptive-loading.web.app/cra-battery-considerate-loading/))

### Device-class

* [Device-class aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-device-class-aware-loading) ([Live](https://adaptive-loading.web.app/cra-device-class-aware-loading/), [Moto G4](https://www.webpagetest.org/result/190828_2S_431d84f1cc15aace86d5046b348284b6/), [Galaxy S7](https://www.webpagetest.org/result/190828_SB_5b8fbb3a07e31f68f51681d6d67b7069/))
* [UA-aware code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-ua-aware-code-splitting) with create-react-app ([Live](https://adaptive-loading.web.app/cra-ua-aware-code-splitting/))

## References

* [Adaptive serving based on network quality](https://web.dev/adaptive-serving-based-on-network-quality/)
* [Adaptive Serving using JavaScript and the Network Information API](https://addyosmani.com/blog/adaptive-serving/)
* [Serving Adaptive Components Using the Network Information API](https://dev.to/vorillaz/serving-adaptive-components-using-the-network-information-api-lbo)

## License

Licensed under the Apache-2.0 license.
