import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Text from './Text';
// import Media from './Media';
import Footer from './Footer';
import styles from './styles';
import {cloneDeep} from './utils';

class Modal extends React.Component {
  close = () => {
    this.context.closeModal()
  };

  render () {
    if (typeof window === "undefined") return null;

    let {data, modalIndex} = this.props/*, isRT = false*/;
    // let MediaComponent = null;

    // use retweet as data if its a RT
    if (data.retweeted_status) {
      data = data.retweeted_status;
      // isRT = true;
    }

    let media = data.entities.media[modalIndex];
    if (data.extended_entities && data.extended_entities.media) {
      media = data.extended_entities.media[modalIndex];
    }

    const tweetStyle = {
      'backgroundColor': '#ffffff',
      'minHeight': '51px',
      'minWidth': '350px',
      'color': 'white',
      'fontFamily': '"Helvetica Neue", "Helvetica", "Arial", "sans-serif"',
      'fontSize': '14px',
      'lineHeight': '20px',
      'listStyleImage': 'none',
      'listStylePosition': 'outisde',
      'listStyleType': 'none',
      'position': 'relative',
      'textAlign': 'start'
    };

    let contentStyle = cloneDeep(styles.content);
    contentStyle.padding = styles.tweet.padding;

    let modalWrap = {
      'position': 'relative',
      'display': 'inline-block',
      'verticalAlign': 'middle',
      'margin': '0 auto',
      'zIndex': 20,
      'marginTop': '50px',
      'borderRadius': '5px',
      'overflow': 'hidden',
    };

    let imgStyle = {
      'width': '100%',
      'margin': '0 auto',
      'display': 'block'
    };

    let imgWrapStyle = {
      'width': '100%',
      'background': 'black'
    };

    let closeModalStyle = {
      'height': '50px',
      'width': '100%',
      'display': 'flex',
      'justifyContent': 'flex-end',
      'alignItems': 'center',
      'background': 'white',
    };

    const w = media.sizes.large.w;
    const h = media.sizes.large.h;
    if (w > 1000) {
      if (h > 650) {
        imgStyle.width = `${(media.sizes.large.w / media.sizes.large.h) * 650}px`;
        modalWrap.width = `${(media.sizes.large.w / media.sizes.large.h) * 650}px`;
      } else {
        modalWrap.width = `${(media.sizes.large.w / media.sizes.large.h) * 650}px`;
        imgStyle.height = `${(media.sizes.large.h / media.sizes.large.w) * 1000}px`;
      }
    } else {
      if (h > 650) {
        modalWrap.width = `${(media.sizes.large.w / media.sizes.large.h) * 650}px`;
        imgStyle.width = `${(media.sizes.large.w / media.sizes.large.h) * 650}px`;
      } else {
        modalWrap.width = `${w}px`;
      }
    }

    return (
      <div className="Modal" style={styles.Modal}>
        <span style={{'height': '100%', 'display': 'inline-block', 'verticalAlign': 'middle'}} />
        <div className="ModalClose" style={styles.ModalClose} onClick={this.close.bind(this)} />
        <div className="Modal-wrap" style={modalWrap}>
          <div className="closeModal" style={closeModalStyle}  onClick={this.close.bind(this)}>
            <svg fill="#657786" style={{'margin': '10px'}} height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <div className="tweet" style={tweetStyle}>
            <div className="media-wrap" style={imgWrapStyle}>
              <img alt="modal" src={media.media_url} style={imgStyle} />
            </div>
            <div className="content" style={contentStyle}>
              <Header data={data} />
              <Text data={data} />
              <Footer data={data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.contextTypes = {
  'closeModal': PropTypes.func
};

Modal.propTypes = {
  'data': PropTypes.object,
  'active': PropTypes.number
};

Modal.defaultProps = {
  'data': {
    'entities': {},
    'user': {}
  },
  'active': 0
};

export default Modal;
