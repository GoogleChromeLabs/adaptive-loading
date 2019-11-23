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

import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from './containers/Home/Home';
import Watch from './containers/Watch/Watch';
import Trending from './containers/Trending/Trending';
import Search from './containers/Search/Search';
import { AppLayout } from './components/AppLayout/AppLayout';
import { youtubeLibraryLoaded } from './store/actions/api';
import { EmulationContext } from './contexts'
import { useLiteModeDebugging } from './utils/hooks';
import { YOUTUBE_API_DEV_MODE } from './config';

const API_KEY = YOUTUBE_API_DEV_MODE ? '' : process.env.REACT_APP_YOUTUBE_API_KEY;

const App = ({ youtubeLibraryLoaded, location }) => {
  const {
    manualEnabled,
    isLiteModeOn,
    liteModeEnabled,
    enableManualTestingHandler,
    toggleLiteModeHandler
  } = useLiteModeDebugging();

  useEffect(() => {
    if (!YOUTUBE_API_DEV_MODE) {
      loadYoutubeApi();
    }
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
