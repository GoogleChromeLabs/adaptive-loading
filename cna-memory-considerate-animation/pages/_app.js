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

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Layout from '../components/Layout';
import { AnimationEmulationContext } from '../contexts';
import { useMemoryStatus } from '../utils/hooks';
import { DEVICE_MEMORY_LIMIT } from '../config';

const MyApp = ({ Component, pageProps, router }) => {
  const [manualEnabled, setManualEnabled] = useState(false);
  const [isAnimationOn, setIsAnimationOn] = useState(true);
  const {
    deviceMemory: hookDeviceMemory,
    unsupported,
    ...performanceMemoryStatus
  } = useMemoryStatus();
  let hookMemoryStatus = {
    deviceMemory: hookDeviceMemory,
    unsupported,
    ...performanceMemoryStatus
  };
  
  const { clientHintDeviceMemory } = pageProps;
  console.log('[MyApp] hookDeviceMemory, clientHintDeviceMemory, unsupported => ', hookDeviceMemory, clientHintDeviceMemory, unsupported);
  let overLoaded;
  if (clientHintDeviceMemory) {
    overLoaded = clientHintDeviceMemory < DEVICE_MEMORY_LIMIT;
    console.log('[_app MyApp] Client Hint Device Memory based Memory Overloaded => ', overLoaded);
  } else {
    overLoaded = hookDeviceMemory < DEVICE_MEMORY_LIMIT;
    hookMemoryStatus = { ...hookMemoryStatus, overLoaded }
    console.log('[_app MyApp] Memory Hook Device Memory based Memory Overloaded => ', overLoaded);
  }
  
  let animationAllowed;
  if (manualEnabled) {
    animationAllowed = isAnimationOn;
  } else {
    animationAllowed = !overLoaded;
  }

  const enableManualAnimationHandler = flag => {
    setManualEnabled(flag);
  };

  const toggleAnimationHandler = event => {
    setIsAnimationOn(event.target.checked);
  };

  return (
    <AnimationEmulationContext.Provider
      value={{
        manualEnabled,
        isAnimationOn,
        animationAllowed,
        enableManualAnimationHandler,
        toggleAnimationHandler
      }}>
      <Layout clientHintDeviceMemory={clientHintDeviceMemory} hookMemoryStatus={hookMemoryStatus}>
        { animationAllowed ? (
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        ) : (
          <Component {...pageProps} key={router.route} />
        ) }
      </Layout>
    </AnimationEmulationContext.Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps;
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  const clientHintDeviceMemory = ctx.req ? ctx.req.headers['device-memory'] : null;
  pageProps = {...pageProps, clientHintDeviceMemory};
  return {pageProps};
};

export default MyApp;
