
# Demo: Next-show adaptive loading with mix of network hook, memory hook and Client Hints in Next.js

Inspired by [Next Episode](https://www.github.com/timneutkens/next-episode).

[Live Demo](https://adaptive-loading.web.app/next-show-adaptive-loading/)

This is a TV show app using the TMDB API for adaptive loading.

This version of Next Show Adaptive Loading uses network hook, memory hook and Client Hints to determine whether to load low-fidelity or high-fidelity experience based on the user's effective connection type (e.g 2G -> lo-fi, 4G -> hi-fi), memory status.

This project was bootstrapped with [Create Next App](https://github.com/zeit/next.js).

## Installation
```
git clone https://github.com/GoogleChromeLabs/adaptive-loading
cd next-show-adaptive-loading
npm install
npm run dev
npm run build
npm start
```

## Glitch Source
* [Link to Glitch App](https://anton-karlovskiy-next-show-adaptive-loading.glitch.me/)
* [Link to Project on Glitch](https://glitch.com/~anton-karlovskiy-next-show-adaptive-loading/)
