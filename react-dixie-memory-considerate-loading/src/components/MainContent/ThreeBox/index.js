
import React from 'react';
import '@google/model-viewer';

import './three-box.css';

const ThreeBox = () => (
  <model-viewer
    src='https://ephektz.com/assets/dboard.glb'
    alt='A 3D model of a keyboard'
    background-color='#2b2b2b'
    exposure='0.3'
    ar
    shadow-intensity='1'
    camera-controls
    camera-orbit='0deg 0deg auto'
    interaction-prompt='auto'
    auto-rotate
    magic-leap>
  </model-viewer>
);

export default ThreeBox;
