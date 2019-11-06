
import React, { lazy, Suspense } from 'react';

import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';
import { useNetworkStatus, useMemoryStatus, useHardwareConcurrency } from '../../utils/hooks';
import { ADAPTIVE_FACTORS } from '../../config';
import './Video.scss';

const LazyHeavyYoutubeEmbed = lazy(() => import(/* webpackChunkName: "heavy-youtube-embed" */ './HeavyYoutubeEmbed/HeavyYoutubeEmbed'));
const LazyLiteYoutubeEmbed = lazy(() => import(/* webpackChunkName: "lite-youtube-embed" */ './LiteYoutubeEmbed/LiteYoutubeEmbed'));

const Video = ({ id }) => {
  const { effectiveConnectionType } = useNetworkStatus();
  const { deviceMemory } = useMemoryStatus();
  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  console.log('[Video] effectiveConnectionType, deviceMemory, numberOfLogicalProcessors => ', effectiveConnectionType, deviceMemory, numberOfLogicalProcessors);

  if(!id) {
    return null;
  }

  const isHeavyExperience =
    effectiveConnectionType === ADAPTIVE_FACTORS.ECT_LIMIT &&
    deviceMemory > ADAPTIVE_FACTORS.DEVICE_MEMORY_LIMIT &&
    numberOfLogicalProcessors > ADAPTIVE_FACTORS.HARDWARE_CONCURRENCY_LIMIT;

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
