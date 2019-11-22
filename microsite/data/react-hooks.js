
const reactHooksDoc = `
# React Adaptive Loading Hooks &amp; Utilities &middot; ![](https://img.shields.io/github/license/GoogleChromeLabs/react-adaptive-hooks.svg) [![Build Status](https://travis-ci.org/GoogleChromeLabs/react-adaptive-hooks.svg?branch=master)](https://travis-ci.org/GoogleChromeLabs/react-adaptive-hooks) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-adaptive-hooks)

> Deliver experiences best suited to a user's device and network constraints (experimental)

This is a suite of [React Hooks](https://reactjs.org/docs/hooks-overview.html) and utilities for adaptive loading based on a user's:

* [Network via effective connection type](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType)
* [Data Saver preferences](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/saveData)
* [Device memory](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory)
* [Logical CPU cores](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency)

It can be used to add patterns for adaptive resource loading, data-fetching, code-splitting and capability toggling.

## Objective

Make it easier to target low-end devices while progressively adding high-end-only features on top. Using these hooks and utilities can help you give users a great experience best suited to their device and network constraints.

## Installation

\`npm i react-adaptive-hooks --save\` or \`yarn add react-adaptive-hooks\`

## Usage

You can import the hooks you wish to use as follows:

\`\`\`
import { useNetworkStatus } from 'react-adaptive-hooks/network';
import { useSaveData } from 'react-adaptive-hooks/save-data';
import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';
import { useMemoryStatus } from 'react-adaptive-hooks/memory';
\`\`\`

and then use them in your components. Examples for each hook and utility can be found below:

### Network

\`useNetworkStatus\` React hook for getting network status (effective connection type)

\`\`\`
import React from 'react';

import { useNetworkStatus } from 'react-adaptive-hooks/network';

const MyComponent = () => {
  const { effectiveConnectionType } = useNetworkStatus();

  let media;
  switch(effectiveConnectionType) {
    case 'slow-2g':
      media = <img src='...' alt='low resolution' />;
      break;
    case '2g':
      media = <img src='...' alt='medium resolution' />;
      break;
    case '3g':
      media = <img src='...' alt='high resolution' />;
      break;
    case '4g':
      media = <video muted controls>...</video>;
      break;
    default:
      media = <video muted controls>...</video>;
      break;
  }
  
  return <div>{media}</div>;
};
\`\`\`

### Save Data

\`useSaveData\` Utility for getting Save Data whether it's Lite mode enabled or not

\`\`\`
import React from 'react';

import { useSaveData } from 'react-adaptive-hooks/save-data';

const MyComponent = () => {
  const { saveData } = useSaveData();
  return (
    <div>
      { saveData ? <img src='...' /> : <video muted controls>...</video> }
    </div>
  );
};
\`\`\`

### CPU Cores / Hardware Concurrency

\`useHardwareConcurrency\` Utility for getting the number of logical CPU processor cores of the user's device

\`\`\`
import React from 'react';

import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';

const MyComponent = () => {
  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  return (
    <div>
      { numberOfLogicalProcessors <= 4 ? <img src='...' /> : <video muted controls>...</video> }
    </div>
  );
};
\`\`\`

### Memory

\`useMemoryStatus\` Utility for getting memory status of the device

\`\`\`
import React from 'react';

import { useMemoryStatus } from 'react-adaptive-hooks/memory';

const MyComponent = () => {
  const { deviceMemory } = useMemoryStatus();
  return (
    <div>
      { deviceMemory < 4 ? <img src='...' /> : <video muted controls>...</video> }
    </div>
  );
};
\`\`\`

### Adaptive Code-loading & Code-splitting

#### Code-loading

Deliver a light, interactive core experience to users and progressively add high-end-only features on top, if a users hardware can handle it. Below is an example using the Network Status hook:

\`\`\`
import React, { Suspense, lazy } from 'react';

import { useNetworkStatus } from 'react-adaptive-hooks/network';

const Full = lazy(() => import(/* webpackChunkName: "full" */ './Full.js'));
const Light = lazy(() => import(/* webpackChunkName: "light" */ './Light.js'));

const MyComponent = () => {
  const { effectiveConnectionType } = useNetworkStatus();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        { effectiveConnectionType === '4g' ? <Full /> : <Light /> }
      </Suspense>
    </div>
  );
};

export default MyComponent;
\`\`\`

Light.js:
\`\`\`
import React from 'react';

const Light = ({ imageUrl, ...rest }) => (
  <img src={imageUrl} {...rest} />
);

export default Light;
\`\`\`

Full.js:
\`\`\`
import React from 'react';
import Magnifier from 'react-magnifier';

const Full = ({ imageUrl, ...rest }) => (
  <Magnifier src={imageUrl} {...rest} />
);

export default Full;
\`\`\`

#### Code-splitting

We can extend \`React.lazy()\` by incorporating a check for a device or network signal. Below is an example of network-aware code-splitting. This allows us to conditionally load a light core experience or full-fat experience depending on the user's effective connection speed (via \`navigator.connection.effectiveType\`).

\`\`\`
import React, { Suspense } from 'react';

const Component = React.lazy(() => {
  const effectiveType = navigator.connection ? navigator.connection.effectiveType : null

  let module;
  switch (effectiveType) {
    case 'slow-2g':
    case '2g':
    case '3g':
      module = import(/* webpackChunkName: "light" */ './Light.js');
      break;
    case '4g':
      module = import(/* webpackChunkName: "full" */ './Full.js');
      break;
    default:
      module = import(/* webpackChunkName: "full" */ './Full.js');
      break;
  }

  return module;
});

const App = () => {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default App;
\`\`\`

## License

Licensed under the Apache-2.0 license.

## Team

This project is brought to you by [Addy Osmani](https://github.com/addyosmani) and [Anton Karlovskiy](https://github.com/anton-karlovskiy).
`;

export {
  reactHooksDoc
};
