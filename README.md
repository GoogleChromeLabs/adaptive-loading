# Adaptive Loading

An exploration into loading and rendering the most suitable version of a component based on signals exposed to the web (network, CPU, memory etc).

## Source & Components

This repo contains several different pieces for the Adaptive Loading project: React Hooks, patterns for adaptive loading with different Web Platform signals and full applications.

### Adaptive Loading patterns

* [Network-aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-network-aware-loading) with create-react-app ([demo](https://adaptive-loading.web.app/cra-network-aware-loading/))
* [Network-aware only-if-cached loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-network-aware-only-if-cached-loading) with create-react-app ([demo](https://adaptive-loading.web.app/cra-network-aware-only-if-cached-loading/))
* [Network-aware code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-network-aware-code-splitting) with create-react-app ([demo](https://adaptive-loading.web.app/cra-network-aware-code-splitting/))
* [Network-aware data-fetching](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-network-aware-data-fetching) with create-react-app ([demo](https://adaptive-loading.web.app/cra-network-aware-data-fetching/))
* [Battery considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-battery-considerate-loading) with create-react-app ([demo](https://adaptive-loading.web.app/cra-battery-considerate-loading/))
* [Memory considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-memory-considerate-loading) with create-react-app ([demo](https://adaptive-loading.web.app/cra-memory-considerate-loading/))
* [Memory considerate loading (SketchFab version)](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-memory-considerate-loading-sketchfab) with create-react-app ([demo](https://adaptive-loading.web.app/cra-memory-considerate-loading-sketchfab/))
* [Memory considerate animation-toggling](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cna-memory-considerate-animation) with create-next-app ([demo](https://cna-memory-animation.firebaseapp.com/))
* [Device-class aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-device-class-aware-loading) ([demo](https://adaptive-loading.web.app/cra-device-class-aware-loading/), [Moto G4](https://www.webpagetest.org/result/190828_2S_431d84f1cc15aace86d5046b348284b6/), [Galaxy S7](https://www.webpagetest.org/result/190828_SB_5b8fbb3a07e31f68f51681d6d67b7069/))
* [Hardware concurrency considerate code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-hardware-concurrency-considerate-code-splitting) with create-react-app ([demo](https://adaptive-loading.web.app/cra-hardware-concurrency-considerate-code-splitting/))
* [Hardware concurrency considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-hardware-concurrency-considerate-loading) with create-react-app ([demo](https://adaptive-loading.web.app/cra-hardware-concurrency-considerate-loading/))
* [UA-aware code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/cra-ua-aware-code-splitting) with create-react-app ([demo](https://adaptive-loading.web.app/cra-ua-aware-code-splitting/))
* [DPR(Client Hint)-aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/node-dpr-aware-loading) with node-app ([demo](https://adaptive-loading.web.app/node-dpr-aware-loading/))
* [Memory(Client Hint) considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/node-memory-considerate-loading) with node-app ([demo](https://adaptive-loading.web.app/node-memory-considerate-loading/))
* [Network(Client Hint)-aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/node-network-aware-loading) with node-app ([demo](https://adaptive-loading.web.app/node-network-aware-loading/))
* [Network & Memory(Client Hints) considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/node-network-memory-considerate-loading) with node-app ([demo](https://adaptive-loading.web.app/node-network-memory-considerate-loading/))

### Data Saver-style patterns

* [React Twitter - save-data loading based on Client Hint](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-twitter-save-data-loading(client-hint)) ([demo](https://adaptive-loading.web.app/react-twitter-save-data-loading(client-hint)/), [WPT](https://www.webpagetest.org/video/compare.php?tests=191102_3G_8572f4d652ca8a61fe2750ba7023055d,191102_P6_4062cbe8770d5dc462b327c3c814fc11))
* [React Twitter - save-data loading based on Hook](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-twitter-save-data-loading(hook)) ([demo](https://adaptive-loading.web.app/react-twitter-save-data-loading(hook)/))

### Full applications

* [React Movie - network-aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-movie-network-aware-loading) ([demo](https://adaptive-loading.web.app/react-movie-network-aware-loading/))
* [React Shrine - network-aware code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-shrine-network-aware-code-splitting) ([demo](https://adaptive-loading.web.app/react-shrine-network-aware-code-splitting/))
* [React eBay - network-aware code-splitting](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-ebay-network-aware-code-splitting) ([demo](https://adaptive-loading.web.app/react-ebay-network-aware-code-splitting/))
* [React Dixie Mesh - memory considerate loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-dixie-memory-considerate-loading) ([demo](https://adaptive-loading.web.app/react-dixie-memory-considerate-loading/))
* [React Lottie - network-aware loading](https://github.com/GoogleChromeLabs/adaptive-loading/tree/master/react-lottie-network-aware-loading) ([demo](https://adaptive-loading.web.app/react-lottie-network-aware-loading/))

## Deployment

Create Firebase Project by logging in to [console.firebase.google.com](https://console.firebase.google.com) and replace the default value in `/.firebaserc` and `/functions/.firebaserc` with the created Project ID.
Or simply copy the default value from `/.firebaserc` or `/functions/.firebaserc` and paste as the Project ID when creating the Firebase Project.

### Function deployment
```
firebase init functions
```
Skip `Overwrite` options by entering `No`
```
firebase deploy
```

### Host deployment
```
npm run build
npm run deploy
```

## Team

This project is brought to you by [Addy Osmani](https://github.com/addyosmani) and [Anton Karlovskiy](https://github.com/anton-karlovskiy).
