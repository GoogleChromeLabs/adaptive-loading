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
import { useHardwareConcurrency } from '../../utils/hooks';
import { HARDWARE_CONCURRENCY_LIMIT } from '../../config';
import './product.css';

const LazyHeavy = lazy(() => import(/* webpackChunkName: 'heavy' */ './Heavy'));
const LazyLight = lazy(() => import(/* webpackChunkName: 'light' */ './Light'));
const Loading = <Fragment>Loading...</Fragment>;

const Product = ({ ...rest }) => {
  const { numberOfLogicalProcessors, unsupported } = useHardwareConcurrency();
  
  console.log('[components Product] numberOfLogicalProcessors, unsupported => ', numberOfLogicalProcessors, unsupported);

  return (
    <div className='product'>
      <LazyLoadingErrorBoundary>
        <Suspense fallback={Loading}>
          { (unsupported || numberOfLogicalProcessors > HARDWARE_CONCURRENCY_LIMIT) ? (
            <LazyHeavy {...rest} />
          ) : (
            <LazyLight {...rest} />
          ) }
        </Suspense>
      </LazyLoadingErrorBoundary>
    </div>
  );
};

export default Product;
