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

// MEMO: tweak
import React from 'react';
import PropTypes from 'prop-types';
import twemoji from 'twemoji';
import twitterText from 'twitter-text';

import styles from './styles';

const Text = ({ data }) => {
  const { entities, extended_entities } = data;
  let { text } = data;

  // remove any embedded media links
  if (entities && entities.media) {
    entities.media.forEach(item => {
      text = text.replace(item.url, '');
    });
  }

  // remove any quote links
  if (entities && data.quoted_status) {
    entities.urls.forEach(item => {
      if (item.expanded_url.indexOf('/status/') > -1) {
        text = text.replace(item.url, '');
      }
    });
  }

  // replace line break
  text = text.replace(/\r?\n/, '<br />');

  // replace + style links and mentions
  text = twitterText.autoLinkWithJSON(text, (entities || {}), {'usernameIncludeSymbol': true});
  text = text.replace(/href=/g, 'style="text-decoration: none;color:#1da1f2;" href=');

  // replace + style emoji
  text = twemoji.parse(text);
  text = text.replace(/<img class="emoji"/g, '<img class="emoji" style="height:14px;margin-right:5px;"');
  // browsers add http which causes isomorphic rendering probs
  text = text.replace(/src="\/\/twemoji/g, 'src="http://twemoji');

  // remove any extended entities links
  if (extended_entities && extended_entities.media) {
    extended_entities.media.forEach(item => {
      text = text.replace(item.display_url, '');
    });
  }

  const tweetProps = {
    className: 'tweet-text',
    style: styles.tweetText,
    dangerouslySetInnerHTML: {
      '__html': text
    }
  };

  return <p {...tweetProps} />;
};

Text.propTypes = {
  data: PropTypes.object
};

Text.displayName = 'Text';

export default Text;
