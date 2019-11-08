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

import React, { lazy, Suspense } from 'react';

import LazyLoadingErrorBoundary from './components/LazyLoadingErrorBoundary';
import './App.css';
import kitchen from './assets/images/kitchen.jpg';

const Product = lazy(() => {
  return new Promise(resolve => {
    navigator.connection ? resolve(navigator.connection.effectiveType) : resolve(null);
  }).then(
    effectiveType => {
      console.log('effectiveType => ', effectiveType);
      switch (effectiveType) {
        case '4g':
          return import(/* webpackChunkName: "heavy" */ './components/Heavy');
        case '3g':
        case '2g':
          return import(/* webpackChunkName: "light" */ './components/Light');
        default:
          return import(/* webpackChunkName: "heavy" */ './components/Heavy');
      }
    }
  );
});

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <LazyLoadingErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Product imageUrl={kitchen} className='product' />
          </Suspense>
        </LazyLoadingErrorBoundary>
      </header>
    </div>
  );
};

export default App;
