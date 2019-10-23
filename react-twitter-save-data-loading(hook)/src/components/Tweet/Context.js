import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class Context extends React.Component {
  render () {
    const {data, linkProps} = this.props;
    return (
      <div className="context" style={styles.context}>
        <div className="tweet-context">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 24 24" style={{'verticalAlign': 'sub'}}> 
            <path opacity="0" d="M0 0h24v24H0z"></path> 
            <path fill="rgb(101, 119, 134)" d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"></path> 
          </svg>
          <span className="retweet-text" style={styles.retweet}>
            <a className={styles.prettyLink} href={`https://twitter.com/${data.user.screen_name}`} style={{'textDecoration': 'none', 'color': '#657786'}} {...linkProps}>
              {data.user.name}
            </a>
            {' Retweeted'}
          </span>
        </div>
      </div>
    );
  };
}

Context.propTypes = {
  'data': PropTypes.object
};

Context.displayName = 'Context';

export default Context;
