
## Usage

The following are a suite of [React Hooks](https://reactjs.org/docs/hooks-overview.html) for providing reusable stateful behavior in the form of environment-signals between different components.

### Network

React hook for getting network status (effective connection type)

```js
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
import { useBatteryStatus } from './battery';

const MyComponent = () => {
  const { batteryStatus } = useBatteryStatus();
  return (
    <div>
      { batteryStatus.level > 0.75 ? <video src='...' /> : <img src='...' /> }
    </div>
  );
};
```

### Device-class

React hook for getting device-class whether it's light or heavy

```js
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

## Browser Support

* [Network Information effectiveType API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType) is available in [Chrome 61+, Opera 48+, Chrome for Android 76+, Firefox for Android 68+, Opera for Android 46+](https://caniuse.com/#search=effectiveType)

* [Navigator hardwareConcurrency API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency) is available in [Chrome 37+, Safari 10.1+, Firefox 48+, Opera 24+, Edge 15+, Chrome for Android 76+, Safari on iOS 10.3+, Firefox for Android 68+, Opera for Android 46+](https://caniuse.com/#search=navigator.hardwareConcurrency)

* [Performance Memory API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) is a non-standard and only available in [Chrome 7+, Opera, Chrome for Android 18+, Opera for Android](https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory) and [Navigator deviceMemory API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory) is available in [Chrome 63+, Opera 50+, Chrome for Android 76+, Opera for Android 46+](https://caniuse.com/#search=deviceMemory)

* [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API) is available in [Chrome 38+, Opera 25+, Edge 76+, Chrome for Android 76+, Firefox for Android +68+ Opera for Android 46+](https://caniuse.com/#search=battery)

* [NavigatorID userAgent API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent) is available in [Chrome 77+, Safari 13+, Firefox 69+, Opera 62+, Edge 18+, Chrome for Android 76+, Safari on iOS 13.1+, Firefox for Android 68+, Opera for Android 46+](https://caniuse.com/#search=userAgent)

## License

Licensed under the Apache-2.0 license.