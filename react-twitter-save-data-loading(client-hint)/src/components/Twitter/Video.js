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

// MEMO: tweak
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VideoJS from 'react-video-wrapper';

import Photos from './Photos';
import './Video.css';
import styles from './styles';
import play from '../../assets/images/play.webp';

const Video = ({ media, gif, autoPlay }) => {
  const externalSaveData = media[0].additional_media_info.saveData;
  const [internalSaveData, setInternalSaveData] = useState(externalSaveData);

  let videoSrc = '';
  media[0].video_info.variants.forEach(variant => {
    if (variant.url.includes('.mp4')) {
      videoSrc = variant.url;
    }
  });

  let VideoPlayer = (
    <video src={videoSrc} controls={!gif} autoPlay={gif || autoPlay} loop={gif} className='video' style={styles.video}>
      Your browser does not support the <code>video</code> element.
    </video>
  );

  if (typeof videojs !== 'undefined') {
    VideoPlayer = (
      <VideoJS src={videoSrc} controls={!gif} autoPlay={gif || autoPlay} loop={gif} className='video' style={styles.video}>
        Your browser does not support the <code>video</code> element.
      </VideoJS>
    );
  }

  const playHandler = () => {
    internalSaveData && setInternalSaveData(false);
  };

  const playButton = (
    <button className='play-button' onClick={playHandler}>
      <img width='100%' src={play} alt='blue play icon' />
    </button>
  );

  return (
    <>
      { !internalSaveData ? (
        <div className='AdaptiveMedia' style={styles.AdaptiveMedia}>
          {VideoPlayer}
          { gif && (
            <div className='AdaptiveMedia-badge' style={styles.AdaptiveMediaBadge}>
              GIF
            </div>
          ) }
        </div>
      ) : (
        <Photos
          media={media}
          playButton={playButton} />
      ) }
    </>
  );
};

Video.propTypes = {
  media: PropTypes.array,
  gif: PropTypes.bool
};

Video.defaultProps = {
  media: [],
  gif: false
};

Video.displayName = 'Video';

export default Video;
