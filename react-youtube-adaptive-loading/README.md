
# Demo: React-youtube adaptive loading with mix of network, memory and hardware concurrency in React

[Youtube React](https://github.com/marvtron/youtube-react) is a Youtube clone built in React, Redux, Redux-saga. UI-wise this application looks almost exactly like the original Youtube application.

This version of React Youtube Adaptive Loading uses network hook, memory hook, hardware concurrency hook to determine whether to load low-fidelity or high-fidelity experience based on the user's effective connection type (e.g 2G -> lo-fi, 4G -> hi-fi), memory status, CPU status.

[Live Demo](https://adaptive-loading.web.app/react-youtube-adaptive-loading/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
```
git clone https://github.com/GoogleChromeLabs/adaptive-loading
cd react-youtube-adaptive-loading
npm install
npm start
npm run build
```
