
import React, { Suspense, lazy, Fragment } from 'react';

import LazyLoadingErrorBoundary from '../../LazyLoadingErrorBoundary';
import { useMemoryStatus } from '../../../utils/hooks';
import './cell.css';

const LazySimpleCell = lazy(() => import(/* webpackChunkName: "simple-cell" */ './SimpleCell'));
const LazyAnimationCell = lazy(() => import(/* webpackChunkName: "animation-cell" */ './AnimationCell'));
const Loading = () => <Fragment>Loading...</Fragment>;

const Cell = ({ manualAnimationTest, animation, ...rest }) => {
  const memoryStatus = useMemoryStatus();
  if (!memoryStatus) return <Loading />;

  const { overLoaded } = memoryStatus;
  let isAnimationCell = true;
  // memory hook override
  if (manualAnimationTest) {
    isAnimationCell = animation;
  } else {
    isAnimationCell = !overLoaded;
  }

  const adaptiveCell = isAnimationCell ? (
    <LazyAnimationCell {...rest} />
  ) : (
    <LazySimpleCell {...rest} />
  );

  return (
    <LazyLoadingErrorBoundary>
      <Suspense fallback={<Loading />}>
        {adaptiveCell}
      </Suspense>
    </LazyLoadingErrorBoundary>
  );
};

export default Cell;
