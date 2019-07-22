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

import React, { Fragment, Suspense, lazy } from 'react';

import Loading from '../Loading';

const SketchFabEmbed = lazy(() => import('./SketchFabEmbed'));
const LazyModelImageViewer = lazy(() => import('./ModelImageViewer'));

const ModelViewer = ({ model, fallbackSrc, memoryStatus }) => {
  const { usedMemoryPercent } = memoryStatus;

  let viewer = null;
  switch (true) {
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
          <SketchFabEmbed model={model} />
        </Suspense>
      );
      break;
    default:
      viewer = (
        <Suspense fallback={<Loading />}>
          <SketchFabEmbed model={model} />
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
