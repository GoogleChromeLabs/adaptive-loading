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

// inspired by https://github.com/rehooks/network-status
import { useState, useEffect } from 'react';

const useEffectiveConnectionType = () => {
  const navigatorConnection = navigator.connection;
  
  const getEffectiveConnectionType = () => {
    return navigatorConnection ? navigatorConnection.effectiveType : null;
  };

  const [effectiveConnectionType, setEffectiveConnectionType] = useState(getEffectiveConnectionType());

  const updateECTStatus = () => {
    setEffectiveConnectionType(getEffectiveConnectionType());
  };
  
  useEffect(() => {
    navigatorConnection && navigatorConnection.addEventListener('change', updateECTStatus);
    return () => {
      navigatorConnection && navigatorConnection.removeEventListener('change', updateECTStatus);
    };
  // eslint-disable-next-line
  }, []);

  return { effectiveConnectionType, updateECTStatus };
};

export { useEffectiveConnectionType };
