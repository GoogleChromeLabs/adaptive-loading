import UAParser from 'ua-parser-js';

export const getDeviceClass = () => {
    // Detect device model from UA
    const parser = new UAParser();
    const uastring = navigator.userAgent;
    parser.setUA(uastring);
    const device = parser.getDevice();
    const model = device.model;
    console.log('[helpers] device mode ==>', model);

    // Match against devices you consider low-end
    const lowEnd = [
        'Nexus 4',
        'Nexus 5',
        'Nexus 5X',
        'Nexus 6',
        'Redmi Note 6 Pro',
        'ONE' // Alcatel 1X
    ];
    // Optional: map to device-year-class, Geekbench.
    return lowEnd.indexOf(model) > 0 ? 'light' : 'heavy'
};
