/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import '@google/model-viewer';

import './three-box.css';
import posterKeyboard from '../../../assets/images/poster-keyboard.webp';

const ThreeBox = () => (
  <model-viewer
    preload
    poster={posterKeyboard}
    src='https://ephektz.com/assets/dboard.glb'
    alt='A 3D model of a keyboard'
    background-color='#2b2b2b'
    exposure='0.3'
    ar
    shadow-intensity='1'
    camera-controls
    camera-orbit='0deg 75deg 105%'
    interaction-prompt='auto'
    auto-rotate
    magic-leap>
  </model-viewer>
);

export default ThreeBox;
