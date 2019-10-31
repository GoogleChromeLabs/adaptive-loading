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

// ray test touch <
import React from 'react';
import PropTypes from 'prop-types';
import VideoJS from 'react-video-wrapper';

import styles from './styles';

class Video extends React.Component {
  render () {
    let {media, gif, autoPlay} = this.props, videoSrc = '';
    media[0].video_info.variants.forEach( v => {
      if (v.url.indexOf('.mp4') > -1) {
        videoSrc = v.url;
      }
    });

    let VideoComponent = (
      <video src={videoSrc} controls={!gif} autoPlay={gif || autoPlay} loop={gif} style={styles.video}>
        {'Your browser does not support the '}<code>{'video '}</code>{'element.'}
      </video>
    );

    if (typeof videojs !== 'undefined') {
      VideoComponent = (
        <VideoJS src={videoSrc} controls={!gif} autoPlay={gif || autoPlay} loop={gif} style={styles.video}>
          {'Your browser does not support the '}<code>{'video '}</code>{'element.'}
        </VideoJS>
      );
    }

    return (
      <div className="AdaptiveMedia" style={styles.AdaptiveMedia}>
        {VideoComponent}
        {gif ?
          <div className="AdaptiveMedia-badge" style={styles.AdaptiveMediaBadge}>
            GIF
          </div> : null}
      </div>
    );
  };
}

Video.propTypes = {
  'media': PropTypes.array,
  'gif': PropTypes.bool
};

Video.defaultProps = {
  'media': [],
  'gif': false
};

Video.displayName = 'Video';

export default Video;
// ray test touch >
