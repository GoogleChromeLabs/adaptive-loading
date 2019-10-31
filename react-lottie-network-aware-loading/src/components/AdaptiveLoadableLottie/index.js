
import React, { lazy, Suspense } from 'react';

import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';

const AdaptiveLoadable = lazy(() => {
  return new Promise(resolve => {
    navigator.connection ? resolve(navigator.connection.effectiveType) : resolve(null);
  }).then(
    effectiveType => {
      console.log('effectiveType => ', effectiveType);
      switch (effectiveType) {
        case '4g':
          return import(/* webpackChunkName: "heavy-with-animation" */ './HeavyWithAnimation');
        case '3g':
        case '2g':
        case 'slow-2g':
          return import(/* webpackChunkName: "light-with-placeholder" */ './LightWithPlaceholder');
        default:
          return import(/* webpackChunkName: "heavy-with-animation" */ './HeavyWithAnimation');
      }
    }
  );
});

const AdaptiveLoadableLottie = () => (
  <LazyLoadingErrorBoundary>
    <Suspense fallback={<>Loading...</>}>
      <AdaptiveLoadable />
    </Suspense>
  </LazyLoadingErrorBoundary>
);

export default AdaptiveLoadableLottie;
