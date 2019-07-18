
import React from 'react';

import Loading from '../../components/Loading';
import MemoryStatusUI from '../../components/MemoryStatusUI';
import ModelViewer from '../../components/ModelViewer';
import { useMemoryStatus } from '../../utils/hooks';
import astronautModel from '../../assets/models/astronaut/astronaut.glb';
import astronautImage from '../../assets/models/astronaut/astronaut.png';
import './memory-based-media.css';

const MemoryBasedMedia = () => {
  const memoryStatus = useMemoryStatus();

  console.log('[MemoryBasedMedia] memoryStatus => ', memoryStatus);
  if (!memoryStatus) return <Loading />;

  return (
    <div className='root-frame'>
      <MemoryStatusUI {...memoryStatus} />
      <ModelViewer src={astronautModel} fallbackSrc={astronautImage} memoryStatus={memoryStatus} />
    </div>
  );
};

export default MemoryBasedMedia;
