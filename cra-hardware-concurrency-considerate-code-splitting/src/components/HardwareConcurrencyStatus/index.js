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

import { useHardwareConcurrency } from '../../utils/hooks';
import { HARDWARE_CONCURRENCY_LIMIT } from '../../config';

const HardwareConcurrencyStatus = () => {
  const { hardwareConcurrency: { numberOfLogicalProcessors, unsupportMessage } } = useHardwareConcurrency();
  return (
    <>
      <p>{unsupportMessage && unsupportMessage}</p>
      { numberOfLogicalProcessors && (
        <p>{`The number of logical processors on this device: ${numberOfLogicalProcessors}. If it is greater than a certain threshold (e.g. ${HARDWARE_CONCURRENCY_LIMIT} for this demo), we load heavy experience otherwise lite experience.`}</p>
      ) }
    </>
  );
};

export default HardwareConcurrencyStatus;
