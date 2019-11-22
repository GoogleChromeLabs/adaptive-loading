
const HOST_URL = 'https://adaptive-loading.web.app/';
const REPO_URL = 'https://github.com/GoogleChromeLabs/adaptive-loading/';

const demosMeta = [
  {
    id: 17,
    title: 'React Twitter - save-data loading based on Client Hint',
    posterName: `react-twitter-save-data-loading-client-hint`,
    sourceCode: `${REPO_URL}tree/master/react-twitter-save-data-loading-client-hint`,
    liveDemo: `${HOST_URL}react-twitter-save-data-loading(client-hint)/`
  },
  {
    id: 18,
    title: 'React Twitter - save-data loading based on Hook',
    posterName: `react-twitter-save-data-loading-hook`,
    sourceCode: `${REPO_URL}tree/master/react-twitter-save-data-loading-hook`,
    liveDemo: `${HOST_URL}react-twitter-save-data-loading(hook)/`
  },
  {
    id: 19,
    title: 'React Movie - network-aware loading',
    posterName: `react-movie-network-aware-loading`,
    sourceCode: `${REPO_URL}tree/master/react-movie-network-aware-loading`,
    liveDemo: `${HOST_URL}react-movie-network-aware-loading/`
  },
  {
    id: 20,
    title: 'React Shrine - network-aware code-splitting',
    posterName: `react-shrine-network-aware-code-splitting`,
    sourceCode: `${REPO_URL}tree/master/react-shrine-network-aware-code-splitting`,
    liveDemo: `${HOST_URL}react-shrine-network-aware-code-splitting/`
  },
  {
    id: 21,
    title: 'React eBay - network-aware code-splitting',
    posterName: `react-ebay-network-aware-code-splitting`,
    sourceCode: `${REPO_URL}tree/master/react-ebay-network-aware-code-splitting`,
    liveDemo: `${HOST_URL}react-ebay-network-aware-code-splitting/`
  },
  {
    id: 22,
    title: 'React Dixie Mesh - memory considerate loading',
    posterName: `react-dixie-memory-considerate-loading`,
    sourceCode: `${REPO_URL}tree/master/react-dixie-memory-considerate-loading`,
    liveDemo: `${HOST_URL}react-dixie-memory-considerate-loading/`
  },
  {
    id: 23,
    title: 'React Lottie - network-aware loading',
    posterName: `react-lottie-network-aware-loading`,
    sourceCode: `${REPO_URL}tree/master/react-lottie-network-aware-loading`,
    liveDemo: `${HOST_URL}react-lottie-network-aware-loading/`
  },
  {
    id: 24,
    title: 'React Youtube - adaptive loading with mix of network, memory and CPU',
    posterName: `react-youtube-adaptive-loading`,
    sourceCode: `${REPO_URL}tree/master/react-youtube-adaptive-loading`,
    liveDemo: `${HOST_URL}react-youtube-adaptive-loading/`
  },
  {
    id: 1,
    title: 'Network-aware loading',
    posterName: `cra-network-aware-loading`,
    sourceCode: `${REPO_URL}tree/master/cra-network-aware-loading`,
    liveDemo: `${HOST_URL}cra-network-aware-loading/`
  },
  {
    id: 2,
    title: 'Network-aware only-if-cached loading',
    posterName: `cra-network-aware-only-if-cached-loading`,
    sourceCode: `${REPO_URL}tree/master/cra-network-aware-only-if-cached-loading`,
    liveDemo: `${HOST_URL}cra-network-aware-only-if-cached-loading/`
  },
  {
    id: 3,
    title: 'Network-aware code-splitting',
    posterName: `cra-network-aware-code-splitting`,
    sourceCode: `${REPO_URL}tree/master/cra-network-aware-code-splitting`,
    liveDemo: `${HOST_URL}cra-network-aware-code-splitting/`
  },
  {
    id: 4,
    title: 'Network-aware data-fetching',
    posterName: `cra-network-aware-data-fetching`,
    sourceCode: `${REPO_URL}tree/master/cra-network-aware-data-fetching`,
    liveDemo: `${HOST_URL}cra-network-aware-data-fetching/`
  },
  {
    id: 5,
    title: 'Battery considerate loading',
    posterName: `cra-battery-considerate-loading`,
    sourceCode: `${REPO_URL}tree/master/cra-battery-considerate-loading`,
    liveDemo: `${HOST_URL}cra-battery-considerate-loading/`
  },
  {
    id: 6,
    title: 'Memory considerate loading',
    posterName: `cra-memory-considerate-loading`,
    sourceCode: `${REPO_URL}tree/master/cra-memory-considerate-loading`,
    liveDemo: `${HOST_URL}cra-memory-considerate-loading/`
  },
  {
    id: 7,
    title: 'Memory considerate loading (SketchFab version)',
    posterName: `cra-memory-considerate-loading-sketchfab`,
    sourceCode: `${REPO_URL}tree/master/cra-memory-considerate-loading-sketchfab`,
    liveDemo: `${HOST_URL}cra-memory-considerate-loading-sketchfab/`
  },
  {
    id: 8,
    title: 'Memory considerate animation-toggling',
    posterName: `cna-memory-animation`,
    sourceCode: `${REPO_URL}tree/master/cna-memory-animation`,
    liveDemo: 'https://cna-memory-animation.firebaseapp.com/'
  },
  {
    id: 9,
    title: 'Device-class aware code-splitting',
    posterName: `cra-device-class-aware-code-splitting`,
    sourceCode: `${REPO_URL}tree/master/cra-device-class-aware-code-splitting`,
    liveDemo: `${HOST_URL}cra-device-class-aware-code-splitting/`
  },
  {
    id: 10,
    title: 'Hardware concurrency considerate code-splitting',
    posterName: `cra-hardware-concurrency-considerate-code-splitting`,
    sourceCode: `${REPO_URL}tree/master/cra-hardware-concurrency-considerate-code-splitting`,
    liveDemo: `${HOST_URL}cra-hardware-concurrency-considerate-code-splitting/`
  },
  {
    id: 11,
    title: 'Hardware concurrency considerate loading',
    posterName: `cra-hardware-concurrency-considerate-loading`,
    sourceCode: `${REPO_URL}tree/master/cra-hardware-concurrency-considerate-loading`,
    liveDemo: `${HOST_URL}cra-hardware-concurrency-considerate-loading/`
  },
  {
    id: 12,
    title: 'UA-aware code-splitting',
    posterName: `cra-ua-aware-code-splitting`,
    sourceCode: `${REPO_URL}tree/master/cra-ua-aware-code-splitting`,
    liveDemo: `${HOST_URL}cra-ua-aware-code-splitting/`
  },
  {
    id: 13,
    title: 'DPR(Client Hint)-aware loading',
    posterName: `node-dpr-aware-loading`,
    sourceCode: `${REPO_URL}tree/master/node-dpr-aware-loading`,
    liveDemo: `${HOST_URL}node-dpr-aware-loading/`
  },
  {
    id: 14,
    title: 'Memory(Client Hint) considerate loading',
    posterName: `node-memory-considerate-loading`,
    sourceCode: `${REPO_URL}tree/master/node-memory-considerate-loading`,
    liveDemo: `${HOST_URL}node-memory-considerate-loading/`
  },
  {
    id: 15,
    title: 'Network(Client Hint)-aware loading',
    posterName: `node-network-aware-loading`,
    sourceCode: `${REPO_URL}tree/master/node-network-aware-loading`,
    liveDemo: `${HOST_URL}node-network-aware-loading/`
  },
  {
    id: 16,
    title: 'Network & Memory(Client Hints) considerate loading',
    posterName: `node-network-memory-considerate-loading`,
    sourceCode: `${REPO_URL}tree/master/node-network-memory-considerate-loading`,
    liveDemo: `${HOST_URL}node-network-memory-considerate-loading/`
  }
];

const getDemosPath = fileExtension => {
  const demosPath = `/static/images/demos/${fileExtension}/`;
  return demosPath;
};

export {
  demosMeta,
  getDemosPath
};
