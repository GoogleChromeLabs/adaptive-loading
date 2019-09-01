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

import { useState, useEffect } from 'react';

const unsupportMessage = 'The Memory Status API is not supported on this platform.';

// Tune these for your application
const MAX_MEMORY_LIMIT = 50 * 1048576; // 50MB
const MAX_PERCENT_THRESHOLD = 90;

const useMemoryStatus = () => {
  const windowPerformance = window.performance;
  const isMemorySupported = () => {
    return windowPerformance && windowPerformance.memory && navigator.deviceMemory;
  };

  const [memoryStatus, setMemoryStatus] = useState(null);

  const getTotalJSHeapSize = () => windowPerformance.memory.totalJSHeapSize;
  const getUsedJSHeapSize = () => windowPerformance.memory.usedJSHeapSize;
  const getJSHeapSizeLimit = () => windowPerformance.memory.jsHeapSizeLimit;
  const getDeviceMemory = () => navigator.deviceMemory;

  const getOverUsedMemorySize = () => {
    const usedJSHeapSize = getUsedJSHeapSize();
    const overUsedMemorySize = usedJSHeapSize - MAX_MEMORY_LIMIT;
    return overUsedMemorySize;
  };

  const getUsedMemoryPercent = () => {
    const usedJSHeapSize = getUsedJSHeapSize();
    const jsHeapSizeLimit = getJSHeapSizeLimit();
    const usedMemoryPercent = usedJSHeapSize / jsHeapSizeLimit * 100;
    return usedMemoryPercent;
  };

  useEffect(() => {
    if (isMemorySupported()) {
      const overUsedMemorySize = getOverUsedMemorySize();
      const usedMemoryPercent = getUsedMemoryPercent();
      let overLoaded = false;
      // Check if we've exceeded absolute memory limit
      if (overUsedMemorySize > 0) {
        overLoaded = true;
      }
      // Check if we've exceeded relative memory limit for client
      if (usedMemoryPercent > MAX_PERCENT_THRESHOLD) {
        overLoaded = true;
      }
      setMemoryStatus({
        totalJSHeapSize: getTotalJSHeapSize(),
        usedJSHeapSize: getUsedJSHeapSize(),
        jsHeapSizeLimit: getJSHeapSizeLimit(),
        deviceMemory: getDeviceMemory(),
        overLoaded
      });
    } else {
      setMemoryStatus({ unsupportMessage });
    }
    // eslint-disable-next-line
  }, []);

  return memoryStatus;
};

export { useMemoryStatus };
