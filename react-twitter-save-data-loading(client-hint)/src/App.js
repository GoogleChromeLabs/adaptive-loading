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

import React, { Component } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import Tweet from './components/Twitter/Tweet';
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
      return <div>Loading...</div>;
    }
    
    const ListTweet = ({ index, style }) => {
      const mediaType = tweets[index].retweeted_status.extended_entities.media[0].type;

      if (mediaType === 'photo') {
        const entitiesMediaFilename = tweets[index].retweeted_status.entities.media[0].media_url_filename;
        const extendedEntitiesMediaFilename = tweets[index].retweeted_status.extended_entities.media[0].media_url_filename;
        const avatarFilename = tweets[index].user.profile_image_url_filename;
        const retweetedStatusAvatarFilename = tweets[index].retweeted_status.user.profile_image_url_filename;
    
        const AdaptivePhotosDir = `./assets/photos/${!saveData ? IMAGE_TYPE.HEAVY : IMAGE_TYPE.LIGHT}/`;
    
        const entitiesMediaURL = AdaptivePhotosDir + entitiesMediaFilename;
        const extendedEntitiesMediaURL = AdaptivePhotosDir + extendedEntitiesMediaFilename;
        const avatarURL = AdaptivePhotosDir + avatarFilename;
        const retweetedStatusAvatarURL = AdaptivePhotosDir + retweetedStatusAvatarFilename;
    
        tweets[index].retweeted_status.entities.media[0].media_url = entitiesMediaURL;
        tweets[index].retweeted_status.extended_entities.media[0].media_url = extendedEntitiesMediaURL;
        tweets[index].user.profile_image_url = avatarURL;
        tweets[index].retweeted_status.user.profile_image_url = retweetedStatusAvatarURL;
      } else if (mediaType === 'video') {
        tweets[index].retweeted_status.extended_entities.media[0].additional_media_info.saveData = saveData;
      }

      return (
        <div className='tweet-stream' style={style}>
          <Tweet
            key={tweets[index].user.profile_image_url}
            linkProps={linkProps}
            autoPlay={true} // TODO: autoplay specification implementation for videos
            data={tweets[index]} />
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
}

export default App;
