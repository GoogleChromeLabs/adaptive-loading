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

import { useEffectiveConnectionType } from '../../../utils/hooks';
import { IMAGE_BASE_URL, POSTER_SIZES } from '../../../config';

const ConnectionAwareImage = ({ path, alt, ...rest }) => {
  const { effectiveConnectionType } = useEffectiveConnectionType();

  let posterSize;

  switch(effectiveConnectionType) {
    // case 'offline':
    //   break;
    case 'slow-2g':
      posterSize = 'w92';
      break;
    case '2g':
      posterSize = 'w154';
      break;
    case '3g':
      posterSize = 'w342';
      break;
    case '4g':
      posterSize = 'w500';
      break;
    default:
      posterSize = 'w500';
      break;
  }

  if (!POSTER_SIZES.has(posterSize)) {
    throw new Error('the backdrop size is not supported');
  }

  const imgUrl = path && `${IMAGE_BASE_URL}${posterSize}${path}`;

  return (
    <img src={imgUrl} alt={alt} {...rest} />
  );
};

export default ConnectionAwareImage;
