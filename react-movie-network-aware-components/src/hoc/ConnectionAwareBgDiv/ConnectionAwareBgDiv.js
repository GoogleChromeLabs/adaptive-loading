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

import { useEffectiveConnectionType } from '../../utils/hooks';
import { IMAGE_BASE_URL, BACKDROP_SIZES } from '../../config';

const ConnectionAwareBgDiv = ({ children, backdropPath, ...rest }) => {
  const { effectiveConnectionType } = useEffectiveConnectionType();

  let backdropSize;
  switch(effectiveConnectionType) {
    // case 'offline':
    //   break;
    case 'slow-2g':
      backdropSize = 'w300';
      break;
    case '2g':
      backdropSize = 'w300';
      break;
    case '3g':
      backdropSize = 'w780';
      break;
    case '4g':
      backdropSize = 'w1280';
      break;
    default:
      backdropSize = 'w1280';
      break;
  }

  if (!BACKDROP_SIZES.has(backdropSize)) {
    throw new Error('the backdrop size is not supported');
  }
  
  const bgUrl = `${IMAGE_BASE_URL}${backdropSize}${backdropPath}`;

  return (
    <div
      {...rest}
      style={{
        background: bgUrl
          ? `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%), url('${bgUrl}'), #1c1c1c`
          : "#000"
      }}>
      {children}
    </div>
  );
};

export default ConnectionAwareBgDiv;
