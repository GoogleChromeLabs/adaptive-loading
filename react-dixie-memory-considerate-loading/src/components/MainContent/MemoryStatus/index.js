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

import './memory-status.css';

const MemoryStatus = ({ memoryStatus }) => {
  const {
    totalJSHeapSize,
    usedJSHeapSize,
    jsHeapSizeLimit,
    deviceMemory,
    unsupported
  } = memoryStatus;

  const memoryStatusList = [
    {
      label: 'Total JSHeapSize',
      value: `${totalJSHeapSize} (Byte)`
    },
    {
      label: 'Used JSHeapSize',
      value: `${usedJSHeapSize} (Byte)`
    },
    {
      label: 'JSHeapSizeLimit',
      value: `${jsHeapSizeLimit} (Byte)`
    },
    {
      label: 'Device Memory',
      value: `${deviceMemory} (GB)`
    }
  ];

  return (
    <>
      { unsupported ? (
        <p>The Memory Status API is not supported on this platform.</p>
      ) : (
        <div className='tags'>
          { memoryStatusList.map(memoryStatusListItem => (
            <div key={memoryStatusListItem.label} className='tag'>
              <div className='tag-value'>{memoryStatusListItem.value}</div>
              <div className='tag-label'>{memoryStatusListItem.label}</div>
            </div>
          )) }
        </div>
      ) }
    </>
  );
};

export default MemoryStatus;
