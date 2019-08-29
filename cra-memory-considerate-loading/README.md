
# Demo: Memory-considerate resource loading in React

[Live Demo](https://adaptive-loading.web.app/cra-memory-considerate-loading)

A demo showing how to use memory-considerate resource loading in React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Test
If you give it a try in your browser console, you may notice that the numbers of memory don’t change. This is a security protection–Chrome doesn’t want to expose its internals to just anyone who might be listening. To enable more accurate memory monitoring, [start Chrome with the --enable-precise-memory-info](https://www.chromium.org/developers/how-tos/run-chromium-with-flags) flag.

## Installation
```
git clone https://github.com/GoogleChromeLabs/adaptive-loading
cd cra-memory-considerate-loading
npm install
npm start
npm run build
```
