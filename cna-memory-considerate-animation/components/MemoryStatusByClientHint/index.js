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

import { CLIENT_HINT_MEMORY_LIMIT } from '../../config';

const MemoryStatusByClientHint = ({ clientHintDeviceMemory }) => (
  <>
    { clientHintDeviceMemory ? (
      <>
        <h4 className='annotation'>{`[Client Hint Device Memory from Server Side Rendering: ${clientHintDeviceMemory} GByte]`}</h4>
        <h4 className='annotation'>{`[Client Hint Device Memory Limit for Animation: ${CLIENT_HINT_MEMORY_LIMIT} GByte]`}</h4>
        <h4 className='annotation'>{`[Device Memory Overloaded: ${clientHintDeviceMemory < CLIENT_HINT_MEMORY_LIMIT ? 'Yes, so we have no animation.' : 'No, so we have animation.'}]`}</h4>
      </>
    ) : (
      <h4 className='annotation'>{`[Client Hint Device Memory from Server Side is not detected so we are using Memory React Hook.]`}</h4>
    ) }
    <style jsx>{`
      .annotation {
        margin: 0;
        margin-bottom: 8px;
      }
    `}</style>
  </>
);

export default MemoryStatusByClientHint;
