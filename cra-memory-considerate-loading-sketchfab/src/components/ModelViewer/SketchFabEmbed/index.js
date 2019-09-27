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

const SketchFabEmbed = ({ model }) => {
  const srcURL = `https://sketchfab.com/models/${model}/embed?autostart=1`;
  return (
    <iframe title='sketchfab' width='90%' height='480' src={srcURL} allow='autoplay; fullscreen; vr' frameBorder='0' mozallowfullscreen='true' webkitallowfullscreen='true'></iframe>
  );
};

export default SketchFabEmbed;
