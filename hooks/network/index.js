
// inspired by https://github.com/rehooks/network-status
import { useState, useEffect } from 'react';

const navigatorConnection = navigator.connection;

const getConnectionEffectiveType = () => {
  return navigatorConnection ? navigatorConnection.effectiveType : null;
};

const useConnectionEffectiveType = () => {
  let [connectionEffectiveType, setConnectionEffectiveType] = useState(getConnectionEffectiveType());

  const updateCETStatus = () => {
    setConnectionEffectiveType(getConnectionEffectiveType());
  };
  useEffect(() => {
    navigatorConnection && navigatorConnection.addEventListener('change', updateCETStatus);
    return () => {
      navigatorConnection && navigatorConnection.removeEventListener('change', updateCETStatus);
    };
  });

  return connectionEffectiveType;
};

export default useConnectionEffectiveType;
