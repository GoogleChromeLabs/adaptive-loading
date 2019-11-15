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

import React, { useState, useRef } from 'react';
import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';

import ToggleSwitch from '../../components/ToggleSwitch';
import './cpu-considerate-media.css';

const q240 = 'https://firebasestorage.googleapis.com/v0/b/devices-1b6e0.appspot.com/o/q240.mp4?alt=media&token=30d750a9-68ba-470e-999d-830c54a32c3c';
const q1080 = 'https://firebasestorage.googleapis.com/v0/b/devices-1b6e0.appspot.com/o/q1080.mp4?alt=media&token=1e66b0bf-bf05-45fb-9169-8de8a26cfbcd';

const CPUConsiderateMedia = () => {
  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  const isCPUSlow = numberOfLogicalProcessors <= 4;

  const videoRef = useRef();
  const [slowMode, setSlowMode] = useState(isCPUSlow);

  console.log('[CPUConsiderateMedia] numberOfLogicalProcessors, slowMode => ', numberOfLogicalProcessors, slowMode);

  const toggleSlowModeHandler = () => {
    setSlowMode(!slowMode);
    resetVideo();
  };

  const resetVideo = () => {
    videoRef.current.pause();
    videoRef.current.load();
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div className='root-frame'>
      <ToggleSwitch
        label='Slow CPU On/Off'
        checked={slowMode}
        onChange={toggleSlowModeHandler} />
      <video controls className='responsive' autoPlay muted ref={videoRef}>
        <source src={slowMode ? q240 : q1080} type='video/mp4; codecs=avc1.4D401E,mp4a.40.2' />
      </video>
      <p>{slowMode ? '240p AV1 - 1.9MB' : '1080p AV1 - 32MB'}</p>
    </div>
  );
};

export default CPUConsiderateMedia;
