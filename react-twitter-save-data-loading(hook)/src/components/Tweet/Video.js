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
import React from 'react';
import PropTypes from 'prop-types';
import VideoJS from 'react-video-wrapper';

import './Video.css';
import styles from './styles';

const Video = ({ media, gif, autoPlay }) => {
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

  return (
    <div className='AdaptiveMedia' style={styles.AdaptiveMedia}>
      {VideoPlayer}
      { gif && (
        <div className='AdaptiveMedia-badge' style={styles.AdaptiveMediaBadge}>
          GIF
        </div>
      ) }
    </div>
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
