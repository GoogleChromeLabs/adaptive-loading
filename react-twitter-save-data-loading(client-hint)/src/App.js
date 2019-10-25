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

import React, { Component, Fragment } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import Tweet from './components/Tweet/Tweet';
import Navbar from './components/Navbar/Navbar';
import tweets from './data/tweets';
import { IMAGE_TYPE } from './config';
import { checkMobile } from './utils/helpers';
import './App.css';

const linkProps = {target: '_blank'};

class App extends Component {
  state = {
    saveData: null,
    testSaveDataEnabled: false
  };

  componentDidMount() {
    const { testSaveDataEnabled } = this.state;
    if (!testSaveDataEnabled) {
      this.getDataHandler();
    } else {
      this.setState({saveData: false});
    }
  }

  toggleClientSaveDataHandler = event => {
    this.setState({saveData: event.target.checked});
  };

  enableClientSaveDataHandler = event => {
    this.setState({testSaveDataEnabled: event.target.checked});
  };

  getDataHandler = () => {
    fetch('/save-data')
      .then(response => response.json())
      .then(result => {
        this.setState({saveData: result.saveData});
      })
      .catch(error => {
        console.log('[App getDataHandler] error => ', error);
        this.setState({saveData: false});
      });
  };

  render() {
    const { testSaveDataEnabled, saveData } = this.state;

    if (saveData === null) {
      return <Fragment>Loading...</Fragment>;
    }
    
    const ListTweet = ({ index, style }) => {
      const imagePath = `./assets/images/${!saveData ? IMAGE_TYPE.HEAVY : IMAGE_TYPE.LIGHT}/${index + 1}.jpg`;
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
          testSaveDataEnabled={testSaveDataEnabled}
          toggleClientSaveData={this.toggleClientSaveDataHandler}
          enableClientSaveData={this.enableClientSaveDataHandler} />
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
  }
};

export default App;
