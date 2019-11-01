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

import React from 'react';
import PropTypes from 'prop-types';

import Context from './Context';
import Header from './Header';
import Text from './Text';
import Media from './Media';
import Modal from './Modal';
import Quote from './Quote';
import Footer from './Footer';
import styles from './styles';

class Tweet extends React.Component {
  constructor (props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      'modalActive': false,
      'modalIndex': 0
    };
  };

  toggleModal (idx) {
    this.setState({
      'modalActive': true,
      'modalIndex': idx
    });
  };

  closeModal () {
    this.setState({
      'modalActive': false
    });
  };

  getChildContext () {
    return {
      'toggleModal': this.toggleModal,
      'closeModal': this.closeModal
    };
  };

  render () {
    const {modalActive, modalIndex} = this.state;
    // MEMO: tweak
    let {data, linkProps} = this.props, isRT = false;
    let MediaComponent = null, QuoteComponent = null;
    
    //Support for extended tweets
    if ('full_text' in data) {
      data.text = data.full_text;

      if ('quoted_status' in data) {
        data.quoted_status.text = data.quoted_status.full_text;
      }
      
      if ('retweeted_status' in data) {
        data.retweeted_status.text = data.retweeted_status.full_text;

        if ('quoted_status' in data.retweeted_status) {
          data.retweeted_status.quoted_status.text = data.retweeted_status.quoted_status.full_text;
        }
      }
    }
    
    if ('extended_tweet' in data) {
      data.text = data.extended_tweet.full_text;
      data.entities = data.extended_tweet.entities;
      data.extended_entities = data.extended_tweet.extended_entities;
      data.display_text_range = data.extended_tweet.display_text_range;
    }
    if ('quoted_status' in data) {
      if ('extended_tweet' in data.quoted_status) {
        data.quoted_status.text = data.quoted_status.extended_tweet.full_text;
        data.quoted_status.entities = data.quoted_status.extended_tweet.entities;
        data.quoted_status.extended_entities = data.quoted_status.extended_tweet.extended_entities;
        data.quoted_status.display_text_range = data.quoted_status.extended_tweet.display_text_range;
      }
    }
    if ('retweeted_status' in data) {
      if ('extended_tweet' in data.retweeted_status) {
        data.retweeted_status.text = data.retweeted_status.extended_tweet.full_text;
        data.retweeted_status.entities = data.retweeted_status.extended_tweet.entities;
        data.retweeted_status.extended_entities = data.retweeted_status.extended_tweet.extended_entities;
        data.retweeted_status.display_text_range = data.retweeted_status.extended_tweet.display_text_range;
      }
      if (data.retweeted_status.is_quote_status) {
        if ('extended_tweet' in data.retweeted_status.quoted_status) {
          data.retweeted_status.quoted_status.text = data.retweeted_status.quoted_status.extended_tweet.full_text;
          data.retweeted_status.quoted_status.entities = data.retweeted_status.quoted_status.extended_tweet.entities;
          data.retweeted_status.quoted_status.extended_entities = data.retweeted_status.quoted_status.extended_tweet.extended_entities;
          data.retweeted_status.quoted_status.display_text_range = data.retweeted_status.quoted_status.extended_tweet.display_text_range;
        }
      }
    }
    
    // use retweet as data if its a RT
    if (data.retweeted_status) {
      data = data.retweeted_status;
      isRT = true;
    }

    // use Media component if media entities exist
    if (data.entities && data.entities.media) {
      // MEMO: tweak
      MediaComponent = <Media autoPlay={this.props.autoPlay} media={data.entities.media} />;
    }

    // extended_entities override, these are multi images, videos, gifs
    if (data.extended_entities && data.extended_entities.media) {
      // MEMO: tweak
      MediaComponent = <Media autoPlay={this.props.autoPlay} media={data.extended_entities.media} />;
    }

    // use Quote component if quoted status exists
    if (data.quoted_status) {
      QuoteComponent = <Quote data={data.quoted_status} linkProps={linkProps}/>;
    }

    return (
      <div className="tweet" style={styles.tweet}>
        {isRT ? <Context {... this.props} /> : null}
        <div className="content" style={styles.content}>
          {/* MEMO: tweak */}
          <Header data={data} linkProps={linkProps} />
          <a style={styles.link} href={`https://twitter.com/${data.user.screen_name}/status/${data.id_str}`} {...linkProps}>
            <Text data={data} />
          </a>
          {MediaComponent}
          {QuoteComponent}
          <Footer data={data} linkProps={linkProps} />
        </div>
        {/* MEMO: tweak */}
        {modalActive ? <Modal data={data} modalIndex={modalIndex} /> : null}
      </div>
    );
  }
}

Tweet.childContextTypes = {
  'toggleModal': PropTypes.func,
  'closeModal': PropTypes.func
};

Tweet.propTypes = {
  'data': PropTypes.object,
  'linkProps': PropTypes.object
};

Tweet.defaultProps = {
  'data': {
    'entities': {},
    'user': {}
  },
  'linkProps': {}
};

export default Tweet;
