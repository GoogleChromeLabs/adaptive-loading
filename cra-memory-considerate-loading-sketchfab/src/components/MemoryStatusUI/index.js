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

import React, { Fragment } from 'react';

import './memory-status-ui.css';

const MemoryStatusUI = ({ totalJSHeapSize, usedJSHeapSize, jsHeapSizeLimit, deviceMemory, overLoaded, unsupportMessage }) => (
  <div className='list'>
    <a
      className='notice'
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.chromium.org/developers/how-tos/run-chromium-with-flags'>
      To enable more accurate memory monitoring, start Chrome with the --enable-precise-memory-info flag
    </a>
    {unsupportMessage ? (
      <div>{unsupportMessage}</div>
    ) : (
        <Fragment>
          <div className='list-item'>
            <div>totalJSHeapSize(Byte):</div>
            <div>{totalJSHeapSize}</div>
          </div>
          <div className='list-item'>
            <div>usedJSHeapSize(Byte):</div>
            <div>{usedJSHeapSize}</div>
          </div>
          <div className='list-item'>
            <div>jsHeapSizeLimit(Byte):</div>
            <div>{jsHeapSizeLimit}</div>
          </div>
          <div className='list-item'>
            <div>deviceMemory(GigaByte):</div>
            <div>{deviceMemory}</div>
          </div>

          <div className='list-item'>
            <div>Is Memory overLoaded?:</div>
            <div>{overLoaded.toString()}</div>
          </div>
        </Fragment>
      )}
  </div>
);

export default MemoryStatusUI;
