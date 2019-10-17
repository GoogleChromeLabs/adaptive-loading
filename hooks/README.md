# Usage

The following are a suite of [React Hooks](https://reactjs.org/docs/hooks-overview.html) for providing reusable stateful behavior in the form of environment-signals between different components.

## Network
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

## CPU Cores / Hardware Concurrency
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

## Memory
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

## Battery
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

## Device-class
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