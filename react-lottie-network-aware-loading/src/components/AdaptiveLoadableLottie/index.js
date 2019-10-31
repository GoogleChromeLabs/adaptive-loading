
import React, { lazy, Suspense, useState } from 'react';

import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';
import ToggleSwitch from '../ToggleSwitch';
import { useNetworkStatus } from '../../utils/hooks';

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
    <>
      <ToggleSwitch
        label='Slow CPU On/Off'
        checked={slowMode}
        onChange={toggleSlowModeHandler} />
      <LazyLoadingErrorBoundary>
        <Suspense fallback={<>Loading...</>}>
          { slowMode ? (
            <LightWithPlaceholder />
          ) : (
            <HeavyWithAnimation />
          ) }
        </Suspense>
      </LazyLoadingErrorBoundary>
    </>
  );
};

export default AdaptiveLoadableLottie;
