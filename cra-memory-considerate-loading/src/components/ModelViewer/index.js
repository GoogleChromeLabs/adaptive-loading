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

import React, { Suspense, lazy } from 'react';

import Loading from '../Loading';
import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';

const LazyModel3DViewer = lazy(() => import(/* webpackChunkName: "heavy-3d-viewer" */ './Model3DViewer'));
const LazyModelImageViewer = lazy(() => import(/* webpackChunkName: "light-image-viewer" */ './ModelImageViewer'));

const ModelViewer = ({ src, fallbackSrc, memoryStatus }) => {
  const { overLoaded } = memoryStatus;

  const viewer = overLoaded ? (
    <LazyModelImageViewer src={fallbackSrc} />
  ) : (
      <LazyModel3DViewer src={src} />
    );

  return (
    <LazyLoadingErrorBoundary>
      <Suspense fallback={<Loading />}>
        {viewer}
      </Suspense>
    </LazyLoadingErrorBoundary>
  );
};

export default ModelViewer;
