
# Demo: React-shrine network-aware code-splitting with React

[Live Demo](https://adaptive-loading.web.app/react-shrine-network-aware-code-splitting)

React Shrine is a demo retail app that uses Material Design components and Material Theming to express branding for a variety of fashion and lifestyle items.

An earlier version of React Shrine used route-based code-splitting for a number of views. This version uses network-aware code-splitting. This generates light and heavy versions of components, conditionally loaded based on your effective connection type. The experience is:

* For a product page, a user is displayed a product image
* If you're on a slow-connection, we load the lightest version of a product image component possible. This just lets you view the product image.
* If you're on a fast-connection, we conditionally load a heavier version of the product image component with  the ability to magnify the image. This additional functionality is a nice enhancement for connections that can handle loading up react-magnifier.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Installation
```
git clone https://github.com/GoogleChromeLabs/adaptive-loading
cd react-shrine-network-aware-code-splitting
npm install
npm start
npm run build
```