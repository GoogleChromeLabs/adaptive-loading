
import React, { Suspense, lazy, useState } from 'react';

import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';
import ManualConsole from './ManualConsole';
import MemoryStatusUI from './MemoryStatusUI';
import { useMemoryStatus } from '../../utils/hooks';
import { DEVICE_MEMORY_LIMIT } from '../../config';
import './main-content.css';

const LazyThreeBox = lazy(() => import(/* webpackChunkName: "heavy-three-box" */ './ThreeBox'));
const LazyTwoBox = lazy(() => import(/* webpackChunkName: "light-two-box" */ './TwoBox'));

const MainContent = () => {
  const [manualEnabled, setManualEnabled] = useState(false);
  const [isThreeBoxOn, setIsThreeBoxOn] = useState(true);
  const { deviceMemory, unsupported, ...performanceMemoryStatus } = useMemoryStatus();
  
  const overLoaded = deviceMemory < DEVICE_MEMORY_LIMIT;
  const memoryStatus = {
    overLoaded,
    unsupported,
    deviceMemory,
    ...performanceMemoryStatus
  };

  console.log('[MainContent] deviceMemory, unsupported => ', deviceMemory, unsupported);

  const enableManualTestingHandler = flag => {
    setManualEnabled(flag);
  };

  const toggleThreeBoxHandler = event => {
    setIsThreeBoxOn(event.target.checked);
  };

  let threeBoxAllowed;
  if (manualEnabled) {
    threeBoxAllowed = isThreeBoxOn;
  } else {
    threeBoxAllowed = !overLoaded;
  }

  return (
    <div className='main-content'>
      <ManualConsole
        manualEnabled={manualEnabled}
        isThreeBoxOn={isThreeBoxOn}
        enableManualTesting={enableManualTestingHandler}
        toggleThreeBox={toggleThreeBoxHandler} />
      <LazyLoadingErrorBoundary>
        <Suspense fallback={<>Loading</>}>
          { !threeBoxAllowed ? (
            <LazyTwoBox />
          ) : (
            <LazyThreeBox />
          ) }
        </Suspense>
      </LazyLoadingErrorBoundary>
      <MemoryStatusUI memoryStatus={memoryStatus} />
    </div>
  );
};

export default MainContent;
