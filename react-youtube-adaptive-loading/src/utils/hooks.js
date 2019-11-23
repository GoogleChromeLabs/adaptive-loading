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

import { useState } from 'react';
import { useNetworkStatus } from 'react-adaptive-hooks/network';
import { useMemoryStatus } from 'react-adaptive-hooks/memory';
import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';

import { ADAPTIVE_FACTORS } from '../config';

const useLiteModeDebugging = () => {
  const { effectiveConnectionType } = useNetworkStatus();
  const { deviceMemory } = useMemoryStatus();
  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  console.log('[useLiteModeDebugging] effectiveConnectionType, deviceMemory, numberOfLogicalProcessors => ', effectiveConnectionType, deviceMemory, numberOfLogicalProcessors);

  const [manualEnabled, setManualEnabled] = useState(false);
  const [isLiteModeOn, setIsLiteModeOn] = useState(false);

  const isLiteModeEnv = !(
    effectiveConnectionType === ADAPTIVE_FACTORS.ECT_LIMIT &&
    deviceMemory > ADAPTIVE_FACTORS.DEVICE_MEMORY_LIMIT &&
    numberOfLogicalProcessors > ADAPTIVE_FACTORS.HARDWARE_CONCURRENCY_LIMIT
  );

  const liteModeEnabled = manualEnabled ? isLiteModeOn : isLiteModeEnv;

  const enableManualTestingHandler = event => {
    setManualEnabled(event.target.checked);
  };

  const toggleLiteModeHandler = event => {
    setIsLiteModeOn(event.target.checked);
  };

  return {
    manualEnabled,
    isLiteModeOn,
    liteModeEnabled,
    enableManualTestingHandler,
    toggleLiteModeHandler
  };
};

export {
  useLiteModeDebugging
};
