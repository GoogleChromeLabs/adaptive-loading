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
import { getDeviceClass } from "./utils/helpers";
import './App.css';

const Product = lazy(() => {
  return new Promise(resolve => {
    resolve(getDeviceClass());
  }).then(
    deviceClass => {
      console.log('[ProductView] device class => ', deviceClass);
      switch (deviceClass) {
        case 'heavy':
          return import(/* webpackChunkName: "heavy" */ './components/Heavy');
        case 'light':
          return import(/* webpackChunkName: "light" */ './components/Light');
        default:
          return import(/* webpackChunkName: "heavy" */ './components/Heavy');
      }
    }
  );
});

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div>Loading...</div>}>
          <Product imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" width={500} />
        </Suspense>
      </header>
    </div>
  );
};

export default App;
