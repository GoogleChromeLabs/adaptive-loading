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

import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
// ray test touch <
// import { useMemoryStatus } from 'react-adaptive-hooks/memory';
// import { useNetworkStatus } from 'react-adaptive-hooks/network';
import { useNetworkStatus, useMemoryStatus } from 'react-adaptive-hooks/dist/index.umd.js';
// ray test touch >

import { EmulationContext } from '../contexts';
import { ADAPTIVE_FACTORS, checkLiteMode } from '../config';
import { QUERY_PARAMS, ADAPTIVE_MODE } from './constants';

const useCheckLiteMode = (clientHintEct, clientHintDeviceMemory) => {
  const { effectiveConnectionType } = useNetworkStatus(clientHintEct || ADAPTIVE_FACTORS.DEFAULT_ECT);
  const { deviceMemory } = useMemoryStatus({deviceMemory: clientHintDeviceMemory || ADAPTIVE_FACTORS.DEFAULT_DEVICE_MEMORY});
  const { manualEnabled, isLiteModeOn } = useContext(EmulationContext);
  
  let isLiteMode = checkLiteMode(effectiveConnectionType, deviceMemory);
  if (manualEnabled) {
    isLiteMode = isLiteModeOn;
  }

  return isLiteMode;
};

const useLiteModeDebugging = () => {
  const router = useRouter();
  const [manualEnabled, setManualEnabled] = useState(router.query[QUERY_PARAMS.MODE] ? true : false);
  const [isLiteModeOn, setIsLiteModeOn] = useState(router.query[QUERY_PARAMS.MODE] === ADAPTIVE_MODE.LITE);

  const enableManualTestingHandler = isManual => {
    setManualEnabled(isManual);
  };

  const toggleLiteModeHandler = isLite => {
    setIsLiteModeOn(isLite);
  };

  return {
    manualEnabled,
    isLiteModeOn,
    enableManualTestingHandler,
    toggleLiteModeHandler
  };
};

export { useCheckLiteMode, useLiteModeDebugging };
