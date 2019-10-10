
import React, { Component, Fragment } from 'react';

import Tweet from './components/Tweet/Tweet';
import Navbar from './components/Navbar/Navbar';
import tweets from './data/tweets';
import { IMAGE_TYPE, SAVE_DATA_MODE } from './config';
import './App.css';

const linkProps = {target: '_blank'};

class App extends Component {
  state = {
    saveData: null,
    clientSaveDataEnabled: false
  };

  componentDidMount() {
    const { clientSaveDataEnabled } = this.state;
    if (!clientSaveDataEnabled) {
      this.getDataHandler();
    } else {
      this.setState({saveData: SAVE_DATA_MODE.OFF});
    }
  }

  toggleClientSaveDataHandler = event => {
    this.setState({saveData: event.target.checked ? SAVE_DATA_MODE.ON : SAVE_DATA_MODE.OFF});
  };

  enableClientSaveDataHandler = event => {
    this.setState({clientSaveDataEnabled: event.target.checked});
  };

  getDataHandler = () => {
    fetch('/save-data')
      .then(response => response.json())
      .then(result => {
        this.setState({saveData: result.saveData});
      })
      .catch(error => {
        console.log('[App getDataHandler] error => ', error);
        this.setState({saveData: SAVE_DATA_MODE.OFF});
      });
  };

  render() {
    const { clientSaveDataEnabled, saveData } = this.state;

    if (!saveData) {
      return <Fragment>Loading...</Fragment>;
    }

    return (
      <div className='tweet-page'>
        <Navbar
          saveData={saveData}
          clientSaveDataEnabled={clientSaveDataEnabled}
          toggleClientSaveData={this.toggleClientSaveDataHandler}
          enableClientSaveData={this.enableClientSaveDataHandler} />
        <div className='tweet-stream'>
          { tweets.map((tweet, index) => {
            const imagePath = `/assets/images/${saveData === SAVE_DATA_MODE.OFF ? IMAGE_TYPE.HEAVY : IMAGE_TYPE.LIGHT}/${index + 1}.jpg`;
            return (
              <Tweet
                key={imagePath}
                linkProps={linkProps}
                autoPlay={true} // TODO: autoplay specification implementation for videos
                data={tweet}
                imagePath={imagePath} />
            );
          }) }
        </div>
      </div>
    );
  }
};

export default App;
