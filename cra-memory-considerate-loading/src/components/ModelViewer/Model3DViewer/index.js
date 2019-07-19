/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
