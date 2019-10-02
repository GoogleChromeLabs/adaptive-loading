
import React, { Fragment, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useMemoryStatus } from '../utils/hooks';
import AnimationEmulationContext from '../components/AnimationEmulationContext';

const Loading = () => <Fragment>Loading...</Fragment>;

const MyApp = ({ Component, pageProps, router }) => {
  const [manualEnabled, setManualEnabled] = useState(false);
  const [isAnimationOn, setIsAnimationOn] = useState(true);
  useEffect(() => {
    if (manualEnabled) {
      setManualEnabled(manualEnabled);
    }

    if (isAnimationOn) {
      setIsAnimationOn(isAnimationOn);
    }
  }, []);

  const memoryStatus = useMemoryStatus();
  if (!memoryStatus) return <Loading />;
  const { overLoaded } = memoryStatus;

  let animationAllowed = true;
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
        enableManualAnimationHandler: enableManualAnimationHandler,
        toggleAnimationHandler: toggleAnimationHandler
      }}>
        { animationAllowed ? (
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        ) : (
          <Component {...pageProps} key={router.route} />
        )}
    </AnimationEmulationContext.Provider>
  )
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps;
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return {pageProps};
};

export default MyApp;
