# Adaptive Loading

An exploration into loading and rendering the most suitable version of a component based on signals exposed to the web (network, CPU, memory etc).

## Source & Components

This repo contains several different pieces for the Adaptive Loading project: React Hooks, patterns for adaptive loading with different Web Platform signals and full applications.

### Adaptive Loading patterns

* [Network-aware loading](https://github.com/GoogleChromeLabs/network-aware-components/tree/master/cra-network-aware-loading) with create-react-app ([demo](https://adaptive-loading.web.app/cra-network-aware-loading/))
* [Network-aware only-if-cached loading](https://github.com/GoogleChromeLabs/network-aware-components/tree/master/cra-network-aware-only-if-cached-loading) with create-react-app ([demo](https://adaptive-loading.web.app/cra-network-aware-only-if-cached-loading/))
* [Network-aware code-splitting](https://github.com/GoogleChromeLabs/network-aware-components/tree/master/cra-network-aware-code-splitting) with create-react-app ([demo](https://adaptive-loading.web.app/cra-network-aware-code-splitting/))
* [Network-aware data-fetching](https://github.com/GoogleChromeLabs/environment-aware-components/tree/master/cra-network-aware-data-fetching) with create-react-app ([demo](https://adaptive-loading.web.app/cra-network-aware-data-fetching/))
* [Battery considerate loading](https://github.com/GoogleChromeLabs/environment-aware-components/tree/master/cra-battery-considerate-loading) with create-react-app ([demo](https://adaptive-loading.web.app/cra-battery-considerate-loading/))
* [Memory considerate loading](https://github.com/GoogleChromeLabs/environment-aware-components/tree/master/cra-memory-considerate-loading) with create-react-app ([demo](https://adaptive-loading.web.app/cra-memory-considerate-loading/))
* [Memory considerate loading (SketchFab version)](https://github.com/GoogleChromeLabs/environment-aware-components/tree/master/cra-memory-considerate-loading-sketchfab) with create-react-app ([demo](https://adaptive-loading.web.app/cra-memory-considerate-loading-sketchfab/))
* [Device-class aware loading](https://github.com/GoogleChromeLabs/environment-aware-components/tree/master/cra-device-class-aware-loading) ([demo](https://adaptive-loading.web.app/cra-device-class-aware-loading/))
* [UA-aware code-splitting](https://github.com/GoogleChromeLabs/environment-aware-components/tree/master/cra-ua-aware-code-splitting) with create-react-app ([demo](https://adaptive-loading.web.app/cra-ua-aware-code-splitting/))

### Full applications

* [React Movie - network-aware components](https://github.com/GoogleChromeLabs/environment-aware-components/tree/master/react-movie-network-aware-loading) ([demo](https://adaptive-loading.web.app/react-movie-network-aware-loading/))
* [React Shrine - network-aware code-splitting](https://github.com/GoogleChromeLabs/environment-aware-components/tree/master/react-shrine-network-aware-code-splitting) ([demo](https://adaptive-loading.web.app/react-shrine-network-aware-code-splitting/))

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
