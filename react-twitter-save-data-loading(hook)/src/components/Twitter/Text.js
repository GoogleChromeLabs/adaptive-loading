import React from 'react';
import PropTypes from 'prop-types';
import twemoji from 'twemoji';
import twitterText from 'twitter-text';

import styles from './styles';

class Text extends React.Component {
  render () {
    let {data} = this.props;
    let {text, entities, extended_entities} = data;

    // remove any embedded media links
    if (entities && entities.media) {
      entities.media.forEach( e => {
        text = text.replace(e.url, '');
      })
    }

    // remove any quote links
    if (entities && data.quoted_status) {
      entities.urls.forEach( u => {
        if (u.expanded_url.indexOf('/status/') > -1) {
          text = text.replace(u.url, '');
        }
      })
    }

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
      extended_entities.media.forEach(e => {
        text = text.replace(e.display_url, '');
      });
    }

    const tweetProps = {
      'className': 'tweet-text',
      'style': styles.tweetText,
      'dangerouslySetInnerHTML': {
        '__html': text
      }
    };

    return <p { ...tweetProps } />;
  };
}

Text.propTypes = {
  'data': PropTypes.object
};

Text.displayName = 'Text';

export default Text;
