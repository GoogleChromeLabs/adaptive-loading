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

import React, { lazy, Suspense, useState } from 'react';
import { useNetworkStatus } from 'react-adaptive-hooks/network';

import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';
import ToggleSwitch from '../ToggleSwitch';
import './adaptive-loadable-lottie.css';

const HeavyWithAnimation = lazy(() => import(/* webpackChunkName: "heavy-with-animation" */ './HeavyWithAnimation'));
const LightWithPlaceholder = lazy(() => import(/* webpackChunkName: "light-with-placeholder" */ './LightWithPlaceholder'));

const AdaptiveLoadableLottie = () => {
  const { effectiveConnectionType } = useNetworkStatus();
  console.log('[AdaptiveLoadableLottie] effectiveConnectionType => ', effectiveConnectionType);
  const isSlowNetwork = effectiveConnectionType !== '4g';
  const [slowMode, setSlowMode] = useState(isSlowNetwork);

  const toggleSlowModeHandler = () => {
    setSlowMode(!slowMode);
  };

  return (
    <div className='adaptive-loadable-lottie'>
      <ToggleSwitch
        label='Slow network On/Off'
        checked={slowMode}
        onChange={toggleSlowModeHandler} />
      <LazyLoadingErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          { slowMode ? (
            <LightWithPlaceholder />
          ) : (
              <HeavyWithAnimation />
            )}
        </Suspense>
      </LazyLoadingErrorBoundary>
    </div>
  );
};

export default AdaptiveLoadableLottie;
