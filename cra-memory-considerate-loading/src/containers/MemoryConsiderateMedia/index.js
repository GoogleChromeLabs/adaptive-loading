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
import { useMemoryStatus } from 'react-adaptive-hooks/memory';

import MemoryStatus from '../../components/MemoryStatus';
import ModelViewer from '../../components/ModelViewer';
import astronautModel from '../../assets/models/astronaut/astronaut.glb';
import astronautImage from '../../assets/models/astronaut/astronaut.png';
import './memory-considerate-media.css';
import { DEVICE_MEMORY_LIMIT } from '../../config';

const MemoryConsiderateMedia = () => {
  const {
    deviceMemory,
    unsupported,
    ...performanceMemoryStatus
  } = useMemoryStatus();

  const overLoaded = deviceMemory < DEVICE_MEMORY_LIMIT;
  const memoryStatus = {
    overLoaded,
    deviceMemory,
    unsupported,
    ...performanceMemoryStatus
  };
  
  console.log('[MemoryConsiderateMedia] deviceMemory, unsupported => ', deviceMemory, unsupported);

  return (
    <div className='root-frame'>
      <ModelViewer src={astronautModel} fallbackSrc={astronautImage} memoryStatus={memoryStatus} />
      <MemoryStatus memoryStatus={memoryStatus} />
    </div>
  );
};

export default MemoryConsiderateMedia;
