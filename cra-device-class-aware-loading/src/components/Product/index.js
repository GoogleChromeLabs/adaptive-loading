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

import React, { lazy, Suspense, Fragment } from 'react';

import LazyLoadingErrorBoundary from '../LazyLoadingErrorBoundary';
import { useDeviceParams } from '../../utils/hooks';
import { Multicore_Score_Threshold } from '../../config';

const LazyHeavy = lazy(() => import(/* webpackChunkName: "heavy" */ './Heavy'));
const LazyLight = lazy(() => import(/* webpackChunkName: "light" */ './Light'));
const Loading = <Fragment>Loading...</Fragment>;

const DeviceNotice = ({ unsupportMessage, modelName, multicoreScore }) => (
  <Fragment>
    <p>Currently this demo focuses on Android/iOS devices, does not detect Windows phones and desktop machines(Windows & Mac)</p>
    { unsupportMessage ? (
      <p>{unsupportMessage}</p>
    ) : (
      <Fragment>
        <p>{`Model: ${modelName}`}</p>
        <p>{`Multicore Score: ${multicoreScore}`}</p>
      </Fragment>
    ) }
  </Fragment>
);

const Product = ({ imageUrl, ...rest }) => {
  const deviceParams = useDeviceParams();
  
  if (!deviceParams) return Loading;
  
  const { name, multicore_score, unsupportMessage } = deviceParams;
  return (
    <Fragment>
      <DeviceNotice
        unsupportMessage={unsupportMessage}
        modelName={name}
        multicoreScore={multicore_score} />
      <LazyLoadingErrorBoundary>
        <Suspense fallback={Loading}>
          { multicore_score > Multicore_Score_Threshold || unsupportMessage ? (
            <LazyHeavy imageUrl={imageUrl} {...rest} />
          ) : (
            <LazyLight imageUrl={imageUrl} {...rest} />
          ) }
        </Suspense>
      </LazyLoadingErrorBoundary>
    </Fragment>
  );
};

export default Product;
