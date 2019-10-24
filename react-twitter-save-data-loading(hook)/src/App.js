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

import React, { Fragment, useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import Tweet from './components/Tweet/Tweet';
import Navbar from './components/Navbar/Navbar';
import tweets from './data/tweets';
import { IMAGE_TYPE, SAVE_DATA_MODE } from './config';
// ray test touch <
import { useSaveData } from './utils/hooks';
import { checkMobile } from './utils/helpers';
// ray test touch >
import './App.css';

const linkProps = {target: '_blank'};

const App = () => {
  const [saveData, setSaveData] = useState(null);
  const [clientSaveDataEnabled, setClientSaveDataEnabled] = useState(false);

  useEffect(() => {
    if (!clientSaveDataEnabled) {
      getDataHandler();
    } else {
      setSaveData(SAVE_DATA_MODE.OFF);
    }
  }, []);

  const toggleClientSaveDataHandler = event => {
    setSaveData(event.target.checked ? SAVE_DATA_MODE.ON : SAVE_DATA_MODE.OFF);
  };

  const enableClientSaveDataHandler = event => {
    setClientSaveDataEnabled(event.target.checked);
  };

  const getDataHandler = () => {
    fetch('/save-data')
      .then(response => response.json())
      .then(result => {
        setSaveData(result.saveData);
      })
      .catch(error => {
        console.log('[App getDataHandler] error => ', error);
        setSaveData(SAVE_DATA_MODE.OFF);
      });
  };

  if (!saveData) {
    return <Fragment>Loading...</Fragment>;
  }
  
  const ListTweet = ({ index, style }) => {
    const imagePath = `./assets/images/${saveData === SAVE_DATA_MODE.OFF ? IMAGE_TYPE.HEAVY : IMAGE_TYPE.LIGHT}/${index + 1}.jpg`;
    return (
      <div className='tweet-stream' style={style}>
        <Tweet
          key={imagePath}
          linkProps={linkProps}
          autoPlay={true} // TODO: autoplay specification implementation for videos
          data={tweets[index]}
          imagePath={imagePath} />
      </div>
    );
  };

  const itemSize = checkMobile() ? 420 : 540;

  return (
    <div className='tweet-page'>
      <Navbar
        saveData={saveData}
        clientSaveDataEnabled={clientSaveDataEnabled}
        toggleClientSaveData={toggleClientSaveDataHandler}
        enableClientSaveData={enableClientSaveDataHandler} />
      <AutoSizer>
        { ({ height, width }) => (
          <List
            width={width}
            height={height}
            itemCount={tweets.length}
            itemSize={itemSize}>
            {ListTweet}
          </List>
        ) }
      </AutoSizer>
    </div>
  );
};

export default App;
