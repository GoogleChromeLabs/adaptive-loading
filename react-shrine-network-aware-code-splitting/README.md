
# Demo: React-shrine network-aware code-splitting with React

The originally React Shrine application implemented code-splitting for a number of views. We could augment the implementation there to use network-aware code-splitting such that:

* For a product page, a user is displayed an item with an image
* If you're on a slow-connection you are shown just an image with the ability to view it. We only load the smallest version of this component possible.
* If you're on a fast-connection, we conditionally load a version of the product image with react-magnifier support. This allows the user to get an enhanced experience. Basically, they can magnify the image to view more details on it.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Installation
```
git clone https://github.com/GoogleChromeLabs/network-aware-components
cd react-shrine-network-aware-code-splitting
npm install
npm start
npm run build
```