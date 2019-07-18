
import React, { Fragment, Suspense, lazy } from 'react';

import Loading from '../Loading';

const LazyModel3DViewer = lazy(() => import('./Model3DViewer'));
const LazyModelImageViewer = lazy(() => import('./ModelImageViewer'));

const ModelViewer = ({ src, fallbackSrc, memoryStatus }) => {
  const { usedMemoryPercent } = memoryStatus;

  let viewer = null;
  switch(true) {
    case usedMemoryPercent > 75:
      viewer = (
        <Suspense fallback={<Loading />}>
          <LazyModelImageViewer src={fallbackSrc} />
        </Suspense>
      );
      break;
    case usedMemoryPercent > 0:
      viewer = (
        <Suspense fallback={<Loading />}>
          <LazyModel3DViewer src={src} />
        </Suspense>
      );
      break;
    default:
      viewer = (
        <Suspense fallback={<Loading />}>
          <LazyModel3DViewer src={src} />
        </Suspense>
      );
      break;
  }

  return (
    <Fragment>
      {viewer}
    </Fragment>
  );
};

export default ModelViewer;
