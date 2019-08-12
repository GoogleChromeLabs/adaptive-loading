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

import React from 'react';

import { useEffectiveConnectionType } from '../../utils/hooks';
import './connection-aware-media.css';

const ConnectionAwareMedia = () => {
  const { effectiveConnectionType } = useEffectiveConnectionType();

  console.log('[ConnectionAwareMedia] effectiveConnectionType => ', effectiveConnectionType);
  let media;
  switch (effectiveConnectionType) {
    case 'slow-2g':
      media = <img className='responsive' src='https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmin-res.jpg?v=1562842586912' alt='low resolution' />;
      break;
    case '2g':
      media = <img className='responsive' src='https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmedium-res.jpg?v=1562842587169' alt='medium resolution' />;
      break;
    case '3g':
      media = <img className='responsive' src='https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmax-res.jpg?v=1562842587982' alt='high resolution' />;
      break;
    case '4g':
      media = <video className='responsive' src='https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2F4g-video.mp4?v=1562842601068' controls />;
      break;
    default:
      media = <video className='responsive' src='https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2F4g-video.mp4?v=1562842601068' controls />;
      break;
  }

  return (
    <div className='root-frame'>
      {media}
    </div>
  );
};

export default ConnectionAwareMedia;
