# Environment-aware Components

An exploration into loading and rendering the most suitable version of a component based on signals exposed to the web (network, CPU, memory etc).

## Network-aware Components

Network-aware components use the [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) to load the most suitable version of a component or resource for the user's effective connection speed. 

Users on a slow (e.g 2G) connection may get a light, low-fi version while fast connections (e.g 4G) get a high-fi version with more interactive features.

This approach can enable a number of use-cases:

* Network-aware components
* Network-aware code-splitting

## Examples

### Simple
* [Network-aware loading](https://github.com/GoogleChromeLabs/network-aware-components/tree/master/cra-network-aware-component) with create-react-app
* [Network-aware code-splitting](https://github.com/GoogleChromeLabs/network-aware-components/tree/master/cra-network-aware-code-splitting) with create-react-app

### Advanced
* [React Movie - network-aware components](https://github.com/GoogleChromeLabs/network-aware-components/tree/master/react-movie-network-aware-components)
* [React Shrine - network-aware code-splitting](https://github.com/GoogleChromeLabs/network-aware-components/tree/master/react-shrine-network-aware-code-splitting)

## Team

This project is brought to you by [Addy Osmani](https://github.com/addyosmani) and [Anton Karlovskiy](https://github.com/anton-karlovskiy).