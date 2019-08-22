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

const MEDIA_TYPE = {
  VIDEO: 'video',
  IMAGE: 'image'
};

const ResponsiveMedia = ({mediaType, objectURL}) => {
  let responsiveMedia = null;

  if (mediaType === MEDIA_TYPE.VIDEO) {
    responsiveMedia = <video className='responsive' src={objectURL} controls />;
  } else if (mediaType === MEDIA_TYPE.IMAGE) {
    responsiveMedia = <img className='responsive' src={objectURL} alt='resolution based on effective connection type' />;
  }

  return responsiveMedia;
};

const requestMedia = async ect => {
  let baseURL;
  switch (ect) {
    case 'slow-2g':
      baseURL = '/assets/responsive-media/image-min-res.jpg';
      break;
    case '2g':
      baseURL = '/assets/responsive-media/image-medium-res.jpg';
      break;
    case '3g':
        baseURL = '/assets/responsive-media/video-hd-res.mp4';
      break;
    case '4g':
      baseURL = '/assets/responsive-media/video-hd-res.mp4';
      break;
    default:
      baseURL = '/assets/responsive-media/video-hd-res.mp4';
      break;
  }

  const imageQualities = ['max-res', 'medium-res', 'min-res'];
  const videoQualities = ['hd-res'];

  let qualities;
  let mediaType;
  if (baseURL.includes(MEDIA_TYPE.VIDEO)) {
    mediaType = MEDIA_TYPE.VIDEO;
    qualities = videoQualities;
  } else if (baseURL.includes(MEDIA_TYPE.IMAGE)) {
    mediaType = MEDIA_TYPE.IMAGE;
    qualities = imageQualities;
  }

  if (!mediaType) return null;

  for (const quality of qualities) {
    const regexFromQualities = new RegExp(qualities.join("|"));
    const url = baseURL.replace(regexFromQualities, quality);
    try {
      const response = await fetch(url, {
        cache: 'only-if-cached',
        // only-if-cached will only work for same-origin requests.
        mode: 'same-origin'
      });
      if (response.ok) {
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        console.log('only-if-cached feeding url => ', url);
        return <ResponsiveMedia mediaType={mediaType} objectURL={objectURL} />;
      }
    } catch(error) {
      console.log('[ConnectionAwareMedia requestImage only-if-cached] error => ', error);
    }
  }

  // If we get this far, there's no match in the HTTP cache.
  // Make a network request:
  try {
    const blob = await fetch(baseURL).then(response => response.blob());
    const objectURL = URL.createObjectURL(blob);
    console.log('network request feeding url => ', baseURL);
    return <ResponsiveMedia mediaType={mediaType} objectURL={objectURL} />;
  } catch(error) {
    console.log('[ConnectionAwareMedia requestImage default] error => ', error);
  }

  return null;
};

const ConnectionAwareMedia = () => {
  const { effectiveConnectionType } = useEffectiveConnectionType();
  const [responsiveMedia, setResponsiveMedia] = useState(null);

  console.log('[ConnectionAwareMedia] effectiveConnectionType => ', effectiveConnectionType);

  useEffect(() => {
    requestMedia(effectiveConnectionType).then(media => {
      setResponsiveMedia(media);
    });
  }, [effectiveConnectionType]);

  return (
    <div className='root-frame'>
      {responsiveMedia}
    </div>
  );
};

export default ConnectionAwareMedia;
