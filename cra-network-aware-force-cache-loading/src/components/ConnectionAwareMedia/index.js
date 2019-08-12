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

import React, { useEffect, useState } from 'react';

import { useEffectiveConnectionType } from '../../utils/hooks';
import './connection-aware-media.css';

const minResURL = 'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmin-res.jpg?v=1562842586912';
const mediumResURL = 'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmedium-res.jpg?v=1562842587169';
const maxResURL = 'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmax-res.jpg?v=1562842587982';
// const videoURL = 'https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2F4g-video.mp4?v=1562842601068';

const ConnectionAwareMedia = () => {
  const { effectiveConnectionType } = useEffectiveConnectionType();

  const [base64Image, setBase64Image] = useState(null);
  useEffect(() => {
    let mediaURL;
    switch (effectiveConnectionType) {
      case 'slow-2g':
      case '2g':
        mediaURL = minResURL;
        break;
      case '3g':
        mediaURL = mediumResURL;
        break;
      case '4g':
        mediaURL = maxResURL;
        break;
      default:
        mediaURL = maxResURL;
        break;
    }

    console.log('[ConnectionAwareMedia] effectiveConnectionType => ', effectiveConnectionType);

    fetch(mediaURL, {cache: 'force-cache'})
      .then(response => response.blob())
      .then(blob => {
          const reader = new FileReader();
          reader.onload = function() {
            setBase64Image(this.result); // `this.result` contains a base64 data URI
          };
          reader.readAsDataURL(blob);
      });
  }, [effectiveConnectionType]);

  return (
    <div className='root-frame'>
      { base64Image && <img className='responsive' src={base64Image} alt='resolution based on effective connection type' /> }
    </div>
  );
};

export default ConnectionAwareMedia;
