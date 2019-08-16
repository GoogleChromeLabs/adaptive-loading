# Usage

## Network
React hook for getting network status (effective connection type)

```
import { useEffectiveConnectionType } from './network';

const MyComponent = () => {
  const effectiveConnectionType = useEffectiveConnectionType();

  let media;
  switch(effectiveConnectionType) {
    case 'slow-2g':
      media = <img className="responsive" src="…" alt="low resolution" />;
      break;
    case '2g':
      media = <img className="responsive" src="…" alt="medium resolution" />;
      break;
    case '3g':
      media = <img className="responsive" src="…" alt="high resolution" />;
      break;
    case '4g':
      media = <video className="responsive" src="…" controls />;
      break;
    default:
      media = <video className="responsive" src="…" controls />;
      break;
  }
  
  return <div>{media}</div>;
};
```

## Memory
React hook for getting memory status of the device

```
import { useMemoryStatus } from './memory';

const MyComponent = () => {
  const { overLoad } = useMemoryStatus();
  return (
    <div>
      { overLoad ? <img src='...' /> : <video src='...' /> }
    </div>
  );
};
```

## Device-class
React hook for getting device-class whether it's light or heavy

```
import { useDeviceClass } from './device-class';

const MyComponent = () => {
  const deviceClass = useDeviceClass();
  return (
    <div>
      { deviceClass === ‘light’ ? <img src='...' /> : <video src='...' /> }
    </div>
  );
};
```

## Battery
React hook for getting battery status

```
import { useBatteryStatus } from './battery';

const MyComponent = () => {
  const batteryStatus = useBatteryStatus();
  return (
    <div>
      { batteryStatus.level > 0.75 ? <video src='...' /> : <img src='...' /> }
    </div>
  );
};
```
