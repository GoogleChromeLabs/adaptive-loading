
import { useState, useEffect } from 'react';

const unsupportMessage = 'The Memory Status API is not supported on this platform.';
const windowPerformance = window.performance;

const MAX_MEMORY_LIMIT = 20 * 1048576; // 20MB
// const MAX_PERCENT_THRESHOLD = 90;

const isMemorySupported = () => {
  return windowPerformance && windowPerformance.memory;
};

const useMemoryStatus = () => {
  const [memoryStatus, setMemoryStatus] = useState(null);

  const getTotalJSHeapSize = () => windowPerformance.memory.totalJSHeapSize;
  const getUsedJSHeapSize = () => windowPerformance.memory.usedJSHeapSize;
  const getJSHeapSizeLimit = () => windowPerformance.memory.jsHeapSizeLimit;

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
      setMemoryStatus({
        totalJSHeapSize: getTotalJSHeapSize(),
        usedJSHeapSize: getUsedJSHeapSize(),
        jsHeapSizeLimit: getJSHeapSizeLimit(),
        overUsedMemorySize: getOverUsedMemorySize(),
        usedMemoryPercent: getUsedMemoryPercent()
      });
    } else {
      setMemoryStatus({unsupportMessage});
    }
  // eslint-disable-next-line
  }, []);

  return memoryStatus;
};

export { useMemoryStatus };
