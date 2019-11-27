
# Demo: React-youtube adaptive loading with mix of network, memory and hardware concurrency in React

[Live Demo](https://adaptive-loading.web.app/react-youtube-adaptive-loading/)

This is a proof-of-concept client using the YouTube API for adaptive loading. It is not meant to be a YouTube clone nor a YouTube competitor. It's built with React, Redux and Redux Saga.

This version of React Youtube Adaptive Loading uses network hook, memory hook, hardware concurrency hook to determine whether to load low-fidelity or high-fidelity experience based on the user's effective connection type (e.g 2G -> lo-fi, 4G -> hi-fi), memory status, CPU status.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
```
git clone https://github.com/GoogleChromeLabs/adaptive-loading
cd react-youtube-adaptive-loading
npm install
npm start
npm run build
```

## Glitch Source
* [Link to Glitch App](https://anton-karlovskiy-adaptive-youtube.glitch.me/)
* [Link to Project on Glitch](https://glitch.com/~anton-karlovskiy-adaptive-youtube/)
