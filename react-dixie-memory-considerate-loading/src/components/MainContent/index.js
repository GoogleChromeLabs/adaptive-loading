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

import React, { Suspense, lazy, useState } from 'react';
import { useMemoryStatus } from 'react-adaptive-hooks/memory';

import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';
import ManualConsole from './ManualConsole';
import MemoryStatus from './MemoryStatus';
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
      <div style={{padding: '10px'}} />
      <ManualConsole
        manualEnabled={manualEnabled}
        isThreeBoxOn={isThreeBoxOn}
        enableManualTesting={enableManualTestingHandler}
        toggleThreeBox={toggleThreeBoxHandler} />
      <LazyLoadingErrorBoundary>
        <Suspense fallback={<div>Loading</div>}>
          { !threeBoxAllowed ? (
            <LazyTwoBox />
          ) : (
            <LazyThreeBox />
          ) }
        </Suspense>
      </LazyLoadingErrorBoundary>
      <MemoryStatus memoryStatus={memoryStatus} />
    </div>
  );
};

export default MainContent;
