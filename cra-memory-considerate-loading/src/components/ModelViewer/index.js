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

const LazyModel3DViewer = lazy(() => import('./Model3DViewer'));
const LazyModelImageViewer = lazy(() => import('./ModelImageViewer'));

const ModelViewer = ({ src, fallbackSrc, memoryStatus }) => {
  const { overLoad } = memoryStatus;

  const viewer = overLoad ? (
    <Suspense fallback={<Loading />}>
      <LazyModelImageViewer src={fallbackSrc} />
    </Suspense>
  ) : (
    <Suspense fallback={<Loading />}>
      <LazyModel3DViewer src={src} />
    </Suspense>
  );

  return (
    <Fragment>
      {viewer}
    </Fragment>
  );
};

export default ModelViewer;
