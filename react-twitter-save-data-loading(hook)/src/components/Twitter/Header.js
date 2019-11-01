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

import styles from './styles';

function VerifiedBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.6" viewBox="0 0 24 24" className="htc-icon htc-icon--verified">
      <path style={{fill: "#1DA1F2"}} opacity="0" d="M0 0h24v24H0z"></path> 
      <path style={{fill: "#1DA1F2"}} d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5c-1.51 0-2.816.917-3.437 2.25-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path> 
    </svg>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  };

  componentDidMount() {
    this.setState({
      mounted: true,
    });
  };

  createTimestamp (time) {
    if (!time || !this.state.mounted) return null;

    const parseTwitterDate = tdate => {
      let system_date = new Date(Date.parse(tdate));
      var user_date = new Date();

      let diff = Math.floor((user_date - system_date) / 1000);
      if (diff < 59) {return diff + "s";}
      if (diff <= 3540) {return Math.round(diff / 60) + "m";}
      if (diff <= 86400) {return Math.round(diff / 3600) + "h";}
      if (diff < 604800) {return Math.round(diff / 86400) + "d";}
      return system_date.toString().substring(4, 10);
    };

    return parseTwitterDate(time);
  };

  render () {
    const {data, linkProps} = this.props;
    const timestamp = this.createTimestamp(data.created_at);
    
    let verified = null;
    if (data.user.verified) {
      verified = <VerifiedBadge />;
    }

    return (
      <div className="header">
        <a className="account-group" style={styles.accountGroup} href={`https://twitter.com/${data.user.screen_name}`} {...linkProps}>
          <img alt="avatar" className="avatar" src={data.user.profile_image_url} style={styles.avatar} />
          <strong className="fullname" style={styles.fullname}>{data.user.name}</strong>
          {verified}
          <span>&nbsp;</span>
          <span className="username" style={styles.username}>
            <s style={styles.s}>{'@'}</s>
            <b style={styles.b}>{data.user.screen_name}</b>
          </span>
        </a>
        <small className="time" style={styles.time}>
          <a href={`https://twitter.com/${data.user.screen_name}/status/${data.id_str}`} className="tweet-timestamp" style={styles.timestamp} {...linkProps}>
            {' • '}{timestamp}
          </a>
        </small>
        <a href={`https://twitter.com/${data.user.screen_name}/status/${data.id_str}`} title="View on Twitter" {...linkProps}>
        <div style={{'float': 'right', 'marginTop': '-3px'}}>
        <svg id="Logo_FIXED" data-name="Logo — FIXED" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 400 400">
          <path fill='#1da1f2' d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"/>
        </svg>
        </div>
        </a>
      </div>
    );
  };
}

Header.defaultProps = {
  'data': {
    'user': {}
  }
};

Header.displayName = 'Header';

export default Header;
