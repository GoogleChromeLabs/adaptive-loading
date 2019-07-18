
import React from 'react';
import '@google/model-viewer';

import './model-3d-viewer.css';

const Model3DViewer = ({ src }) => {
  return (
    <model-viewer
      width='600px'
      src={src}
      alt='A 3D model of an astronaut'
      background-color='#70BCD1'
      shadow-intensity='1'
      camera-controls
      interaction-prompt='auto'
      auto-rotate
      ar
      magic-leap>
    </model-viewer>
  );
};

export default Model3DViewer;
