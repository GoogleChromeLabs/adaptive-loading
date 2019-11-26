
import React, { lazy, Suspense, useContext } from 'react';

import { EmulationContext } from '../../contexts';
import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';
import './Video.scss';

const LazyHeavyYoutubeEmbed = lazy(() => import(/* webpackChunkName: "heavy-youtube-embed" */ './HeavyYoutubeEmbed/HeavyYoutubeEmbed'));
const LazyLiteYoutubeEmbed = lazy(() => import(/* webpackChunkName: "lite-youtube-embed" */ './LiteYoutubeEmbed/LiteYoutubeEmbed'));

const Video = ({ id }) => {
  const { liteModeEnabled } = useContext(EmulationContext);

  if(!id) {
    return null;
  }

  return (
    <div className='video-container'>
      <div className='video'>
        <LazyLoadingErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            { !liteModeEnabled ? (
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
