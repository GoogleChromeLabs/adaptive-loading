
import React, { Suspense, lazy } from 'react';

import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';
import { useMemoryStatus } from '../../utils/hooks';
import { DEVICE_MEMORY_LIMIT } from '../../config';
import './main-content.css';

const LazyThreeBox = lazy(() => import(/* webpackChunkName: "heavy-three-box" */ './ThreeBox'));
const LazyTwoBox = lazy(() => import(/* webpackChunkName: "light-two-box" */ './TwoBox'));

const MainContent = () => {
  const { deviceMemory, unsupported } = useMemoryStatus();

  console.log('[MainContent] deviceMemory, unsupported => ', deviceMemory, unsupported);

  return (
    <div className='main-content'>
      <LazyLoadingErrorBoundary>
        <Suspense fallback={<>Loading</>}>
          { deviceMemory < DEVICE_MEMORY_LIMIT ? (
            <LazyTwoBox />
          ) : (
            <LazyThreeBox />
          ) }
        </Suspense>
      </LazyLoadingErrorBoundary>
    </div>
  );
};

export default MainContent;
