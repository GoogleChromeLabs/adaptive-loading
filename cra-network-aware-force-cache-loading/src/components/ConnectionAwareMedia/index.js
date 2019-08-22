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

const maxResURL = '/assets/images/max-res.jpg';
const mediumResURL = '/assets/images/medium-res.jpg';
const minResURL = '/assets/images/min-res.jpg';

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

    const requestImage = async baseURL => {
      const qualities = ['max-res', 'medium-res', 'min-res'];

      const feedImage = blob => {
        const reader = new FileReader();
        reader.onload = function() {
          setBase64Image(this.result); // `this.result` contains a base64 data URI
        };
        reader.readAsDataURL(blob);
      };

      let imageBlob;
      for (const quality of qualities) {
        const url = baseURL.replace(/max-res|medium-res|min-res/, quality);
        try {
          imageBlob = await fetch(url, {
            cache: 'only-if-cached',
            mode: 'same-origin'
          }).then(response => {
            return response.blob();
          });
          console.log('only-if-cached feeding url => ', url);
          if (imageBlob) break;
        } catch(error) {
          console.log('[ConnectionAwareMedia requestImage only-if-cached] error => ', error);
        }
      }

      if (!imageBlob) {
        try {
          imageBlob = await fetch(baseURL).then(response => response.blob());
          console.log('network request feeding url => ', baseURL);
        } catch(error) {
          console.log('[ConnectionAwareMedia requestImage default] error => ', error);
        }
      }

      feedImage(imageBlob);
    };

    requestImage(mediaURL);
  }, [effectiveConnectionType]);

  return (
    <div className='root-frame'>
      { base64Image && <img className='responsive' src={base64Image} alt='resolution based on effective connection type' /> }
    </div>
  );
};

export default ConnectionAwareMedia;
