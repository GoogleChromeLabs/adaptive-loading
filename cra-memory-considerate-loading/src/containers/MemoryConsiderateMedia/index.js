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

import Loading from '../../components/Loading';
import MemoryStatusUI from '../../components/MemoryStatusUI';
import ModelViewer from '../../components/ModelViewer';
import { useMemoryStatus } from '../../utils/hooks';
import astronautModel from '../../assets/models/astronaut/astronaut.glb';
import astronautImage from '../../assets/models/astronaut/astronaut.png';
import './memory-considerate-media.css';

const MemoryConsiderateMedia = () => {
  const memoryStatus = useMemoryStatus();

  console.log('[MemoryConsiderateMedia] memoryStatus => ', memoryStatus);
  if (!memoryStatus) return <Loading />;

  return (
    <div className='root-frame'>
      <MemoryStatusUI {...memoryStatus} />
      <ModelViewer src={astronautModel} fallbackSrc={astronautImage} memoryStatus={memoryStatus} />
    </div>
  );
};

export default MemoryConsiderateMedia;
