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

import React, { useEffect, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useNetworkStatus } from 'react-adaptive-hooks/network';
import { useMemoryStatus } from 'react-adaptive-hooks/memory';
import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';

import { ADAPTIVE_FACTORS } from './config';
import { EmulationContext } from './contexts'
import Home from './containers/Home/Home';
import Watch from './containers/Watch/Watch';
import Trending from './containers/Trending/Trending';
import Search from './containers/Search/Search';
import { AppLayout } from './components/AppLayout/AppLayout';
import { youtubeLibraryLoaded } from './store/actions/api';
import { YOUTUBE_API_DEV_MODE } from './config';

const API_KEY = YOUTUBE_API_DEV_MODE ? '' : process.env.REACT_APP_YOUTUBE_API_KEY;

const App = ({ youtubeLibraryLoaded, location }) => {
  // TODO: extract as custom hook
  const { effectiveConnectionType } = useNetworkStatus();
  const { deviceMemory } = useMemoryStatus();
  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  console.log('[App] effectiveConnectionType, deviceMemory, numberOfLogicalProcessors => ', effectiveConnectionType, deviceMemory, numberOfLogicalProcessors);

  const [manualEnabled, setManualEnabled] = useState(false);
  const [isLiteModeOn, setIsLiteModeOn] = useState(false);

  const isLiteModeEnv = !(
    effectiveConnectionType === ADAPTIVE_FACTORS.ECT_LIMIT &&
    deviceMemory > ADAPTIVE_FACTORS.DEVICE_MEMORY_LIMIT &&
    numberOfLogicalProcessors > ADAPTIVE_FACTORS.HARDWARE_CONCURRENCY_LIMIT
  );

  const liteModeEnabled = manualEnabled ? isLiteModeOn : isLiteModeEnv;

  const enableManualTestingHandler = event => {
    setManualEnabled(event.target.checked);
  };

  const toggleLiteModeHandler = event => {
    setIsLiteModeOn(event.target.checked);
  };

  useEffect(() => {
    loadYoutubeApi();
  // eslint-disable-next-line
  }, []);

  const loadYoutubeApi = () => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  };

  return (
    <EmulationContext.Provider
      value={{
        manualEnabled,
        isLiteModeOn,
        liteModeEnabled,
        enableManualTestingHandler,
        toggleLiteModeHandler
      }}>
      <AppLayout>
        <Switch>
          <Route path='/feed/trending' component={Trending}/>
          <Route path='/results' render={() => <Search key={location.key}/>}/>
          <Route path='/watch' render={() => <Watch key={location.key}/>}/>
          <Route path='/' component={Home}/>
        </Switch>
      </AppLayout>
    </EmulationContext.Provider>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
};

export default withRouter(connect(null, mapDispatchToProps)(App));
