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
import './memory-considerate-media.css';

const MemoryConsiderateMedia = () => {
  const memoryStatus = useMemoryStatus();

  console.log('[MemoryConsiderateMedia] memoryStatus => ', memoryStatus);
  if (!memoryStatus) return <Loading />;

  return (
    <div className='root-frame'>
      <MemoryStatusUI {...memoryStatus} />
      <ModelViewer model='78f50fd5859746a6bdb611c867dd0229' fallbackSrc='https://media.sketchfab.com/urls/78f50fd5859746a6bdb611c867dd0229/dist/thumbnails/27a441be16a14368bea782ae2b1679f5/756e16cc8b1640cb8058f8252edbf51b.jpeg' memoryStatus={memoryStatus} />
      <ModelViewer model='9d66f3c564d54f1b9457520927cfb93a' fallbackSrc='https://media.sketchfab.com/urls/9d66f3c564d54f1b9457520927cfb93a/dist/thumbnails/9b681d8d7ce64d2e93da3f8c2772423a/f862c178058b431ca2b1fa57e5ca59b2.jpeg' memoryStatus={memoryStatus} />
    </div>
  );
};

export default MemoryConsiderateMedia;