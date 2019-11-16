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

import React from 'react';
import { useNetworkStatus } from 'react-adaptive-hooks/network';

import minResImage from '../../assets/images/min-res.jpg';
import mediumResImage from '../../assets/images/medium-res.jpg';
import maxResImage from '../../assets/images/max-res.jpg';
import video from '../../assets/videos/4g-video.mp4';
import './connection-aware-media.css';

const ConnectionAwareMedia = () => {
  const { effectiveConnectionType, unsupported } = useNetworkStatus();

  console.log('[ConnectionAwareMedia] effectiveConnectionType => ', effectiveConnectionType);

  let media;
  switch (effectiveConnectionType) {
    case 'slow-2g':
      media = <img className='responsive' src={minResImage} alt='low resolution' />;
      break;
    case '2g':
      media = <img className='responsive' src={mediumResImage} alt='medium resolution' />;
      break;
    case '3g':
      media = <img className='responsive' src={maxResImage} alt='high resolution' />;
      break;
    case '4g':
      media = <video className='responsive' src={video} controls />;
      break;
    default:
      media = <video className='responsive' src={video} controls />;
      break;
  }

  return (
    <div className='root-frame'>
      {media}
      { unsupported && <p>The Network Information API is not supported on this platform.</p> }
    </div>
  );
};

export default ConnectionAwareMedia;
