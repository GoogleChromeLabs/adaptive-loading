
import { useState, useEffect } from 'react';

const useNetworkStatus = () => {
  let unsupported;
  if ('connection' in navigator && 'effectiveType' in navigator.connection) {
    unsupported = false;
  } else {
    unsupported = true;
  }

  const initialNetworkStatus = !unsupported ? {
    effectiveConnectionType: navigator.connection.effectiveType
  } : {
    unsupported
  };

  const [networkStatus, setNetworkStatus] = useState(initialNetworkStatus);

  useEffect(() => {
    if (!unsupported) {
      const navigatorConnection = navigator.connection;
      const updateECTStatus = () => {
        setNetworkStatus({effectiveConnectionType: navigatorConnection.effectiveType});
      };
      navigatorConnection.addEventListener('change', updateECTStatus);
      return () => {
        navigatorConnection.removeEventListener('change', updateECTStatus);
      };
    }
  // eslint-disable-next-line
  }, []);

  return { ...networkStatus, setNetworkStatus };
};

const useMemoryStatus = () => {
  let unsupported;
  if ('deviceMemory' in navigator) {
    unsupported = false;
  } else {
    unsupported = true;
  }

  let initialMemoryStatus;
  if (!unsupported) {
    const performanceMemory = ('memory' in performance) ? performance.memory : null;
    initialMemoryStatus = {
      deviceMemory: navigator.deviceMemory,
      totalJSHeapSize: performanceMemory ? performanceMemory.totalJSHeapSize : null,
      usedJSHeapSize: performanceMemory ? performanceMemory.usedJSHeapSize : null,
      jsHeapSizeLimit: performanceMemory ? performanceMemory.jsHeapSizeLimit : null
    };
  } else {
    initialMemoryStatus = {unsupported};
  }

  const [memoryStatus, setMemoryStatus] = useState(initialMemoryStatus);

  return { ...memoryStatus, setMemoryStatus };
};

const useHardwareConcurrency = () => {
  let initialHardwareConcurrency;
  if ('hardwareConcurrency' in navigator) {
    initialHardwareConcurrency = {numberOfLogicalProcessors: navigator.hardwareConcurrency};
  } else {
    initialHardwareConcurrency = {unsupported: true};
  }

  const [hardwareConcurrency, setHardwareConcurrency] = useState(initialHardwareConcurrency);

  return { ...hardwareConcurrency, setHardwareConcurrency };
};

export {
  useNetworkStatus,
  useMemoryStatus,
  useHardwareConcurrency
};
