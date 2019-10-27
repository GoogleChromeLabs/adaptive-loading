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

import React, { lazy, Suspense, Fragment } from 'react';

import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';
import { useDeviceClass } from '../../utils/hooks';

const LazyHeavy = lazy(() => import(/* webpackChunkName: 'heavy' */ './Heavy'));
const LazyLight = lazy(() => import(/* webpackChunkName: 'light' */ './Light'));
const Loading = <Fragment>Loading...</Fragment>;

const Product = ({ ...rest }) => {
  const { deviceClass, unsupported } = useDeviceClass();

  console.log('[Product] deviceClass, unsupported => ', deviceClass, unsupported);
  
  return (
    <>
      { unsupported && <p>The Save Data API is not supported on this platform.</p> }
      <LazyLoadingErrorBoundary>
        <Suspense fallback={Loading}>
          { (unsupported || deviceClass === 'heavy') ? (
            <LazyHeavy {...rest} />
          ) : (
            <LazyLight {...rest} />
          ) }
        </Suspense>
      </LazyLoadingErrorBoundary>
    </>
  );
};

export default Product;
