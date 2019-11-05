
import React, { lazy, Suspense } from 'react';

import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';
import { useNetworkStatus, useMemoryStatus, useHardwareConcurrency } from '../../utils/hooks';
import './Video.scss';

const LazyHeavyYoutubeEmbed = lazy(() => import(/* webpackChunkName: "heavy-youtube-embed" */ './HeavyYoutubeEmbed/HeavyYoutubeEmbed'));
const LazyLiteYoutubeEmbed = lazy(() => import(/* webpackChunkName: "lite-youtube-embed" */ './LiteYoutubeEmbed/LiteYoutubeEmbed'));

const ECT_LIMIT = '4g';
const DEVICE_MEMORY_LIMIT = 4;
const HARDWARE_CONCURRENCY_LIMIT = 4;

const Video = ({ id }) => {
  const { effectiveConnectionType } = useNetworkStatus();
  const { deviceMemory } = useMemoryStatus();
  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  console.log('[Video] effectiveConnectionType, deviceMemory, numberOfLogicalProcessors => ', effectiveConnectionType, deviceMemory, numberOfLogicalProcessors);

  if(!id) {
    return null;
  }

  const isHeavyExperience = effectiveConnectionType === ECT_LIMIT &&
    deviceMemory > DEVICE_MEMORY_LIMIT &&
    numberOfLogicalProcessors > HARDWARE_CONCURRENCY_LIMIT;

  return (
    <div className='video-container'>
      <div className='video'>
        <LazyLoadingErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            { isHeavyExperience ? (
              <LazyHeavyYoutubeEmbed className='video-player' id={id} />
            ) : (
              <LazyLiteYoutubeEmbed className='video-player' id={id} />
            ) }
          </Suspense>
        </LazyLoadingErrorBoundary>
      </div>
    </div>
  );
};

export default Video;
