
// MEMO: tweak
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { cloneDeep } from './utils';
import { IMAGE_TYPE } from '../../config';
import './Photos.css';
import styles from './styles';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: this.props.imagePath
    };
  };

  loadImageHandler = () => {
    const { imagePath } = this.props;
    const newImagePath = imagePath.replace(IMAGE_TYPE.LIGHT, IMAGE_TYPE.HEAVY);
    this.setState({imagePath: newImagePath});
  };

  render () {
    const { media } = this.props;
    const { imagePath } = this.state;

    let mediaElements = [];
    let mediaStyle = cloneDeep(styles.AdaptiveMedia);
    if (media.length === 2) mediaStyle.height = '253px';
    if (media.length === 3) mediaStyle.height = '337px';
    if (media.length === 4) mediaStyle.height = '380px';

    // start media loop
    media.forEach((m, i) => {
      // set initial sizes / styles
      let containStyle = {'width': '100%', 'position': 'relative', 'overflow': 'hidden'};
      let photoStyle = {'width': '100%', 'position': 'relative', 'verticalAlign': 'bottom'};
      let mediaHeight = m.sizes.large.h, mediaWidth = m.sizes.large.w;

      /*
       * format single photo
       */
      if (media.length === 1) {
        // 508 is the width of a tweet media wrapper
        // if image is wider than this, it's height will be reduced
        // proportionally, so we adjust our calculation
        if (mediaWidth > 508) {
          const ratio = (100 / mediaWidth) * 508;
          mediaHeight = mediaHeight * (ratio / 100);
        }

        // check if image is taller than maxHeight, if so
        // center it with a negative top value
        const maxHeight = parseInt(mediaStyle.maxHeight.replace('px', ''));
        if (mediaHeight > maxHeight) {
          photoStyle.top = `${(maxHeight - mediaHeight) / 2}px`;
        }
      }

      /*
       * format two photos
       */
      if (media.length === 2) {
        const maxHeight = 253;
        photoStyle.width = 'auto';
        photoStyle.height = '100%';
        containStyle.display = 'inline-block';
        containStyle.height = '100%';
        // give first image 1px margin right and calc width to adjust
        if (i === 0) containStyle.marginRight = '1px'
        containStyle.width = 'calc(50% - .5px)';

        const ratio = (100 / mediaWidth) * (508 /2);
        mediaHeight = mediaHeight * (ratio / 100);
        if (mediaHeight > maxHeight) {
          photoStyle.top = `${(maxHeight - mediaHeight) / 2}px`;
          photoStyle.width = '100%';
          photoStyle.height = 'auto';
        } else if (mediaWidth > (508 / 2)) {
          const ratio = (100 / m.sizes.large.h) * 253;
          mediaWidth = mediaWidth * (ratio / 100);
          photoStyle.left = `${((508 / 2) - mediaWidth) / 2}px`;
        }
      }

      /*
       * format three photos
       */
      if (media.length === 3)  {
        if (i === 0) {
          const maxHeight = 337;
          containStyle.width = `${100 * (2/3)}%`;
          containStyle.marginRight = '1px';
          containStyle.height = '337px';
          containStyle.float = 'left';
          const firstWrapWidth = 508 * (2 / 3);
          const ratio = (100 / mediaHeight) * 337;
          mediaWidth = mediaWidth * (ratio / 100);
          const newRatio = (100 / m.sizes.medium.w) * firstWrapWidth;
          mediaHeight = mediaHeight * (newRatio / 100);

          if (mediaHeight > maxHeight) {
            photoStyle.top = `${(maxHeight - mediaHeight) / 2}px`;
          }

          if (mediaWidth > firstWrapWidth) {
            photoStyle.width = 'auto';
            photoStyle.height = '100%';
            photoStyle.left = `${((508 * (2/3)) - mediaWidth) / 2}px`;
          }
        }
        if (i !== 0) {
          mediaHeight = m.sizes.medium.h;
          mediaWidth = m.sizes.medium.w;
          const maxHeight = 337 / 2;
          const maxWidth = 508 * 1/3;
          const ratio = (100 / mediaWidth) * maxWidth;
          mediaHeight = mediaHeight * (ratio / 100);

          if (mediaHeight > maxHeight) {
            photoStyle.top = `${(maxHeight - mediaHeight) / 2}px`;
          } else if (mediaWidth > maxWidth) {
            photoStyle.width = 'auto';
            photoStyle.height = '100%';
            const newRatio = (100 / m.sizes.medium.h) * maxWidth;
            mediaWidth = mediaWidth * (newRatio / 100);
            photoStyle.left = `${(maxWidth - mediaWidth) / 2}px`;
          }

          containStyle.float = 'left';
          containStyle.marginBottom = '1px';
          containStyle.height = `calc(100% / 2 - 1px/2)`;
          containStyle.width = `calc(100% / 3 - 1px)`;
        }
      }

      /*
       * format four photos
       */
      if (media.length === 4) {
        if (i === 0) {
          containStyle.width = '75%';
          containStyle.marginRight = '1px';
          containStyle.height = '380px';
          containStyle.float = 'left';
          const firstWrapWidth = 508 * 0.75;
          const maxHeight = 380;
          const ratio = (100 / mediaHeight) * 380;
          mediaWidth = mediaWidth * (ratio / 100);
          const newRatio = (100 / m.sizes.medium.w) * firstWrapWidth;
          mediaHeight = mediaHeight * (newRatio / 100);

          if (mediaHeight > maxHeight) {
            photoStyle.top = `${(maxHeight - mediaHeight) / 2}px`;
          }

          if (mediaWidth > firstWrapWidth) {
            photoStyle.width = 'auto';
            photoStyle.height = '100%';
            photoStyle.left = `${((508 * 0.75) - mediaWidth) / 2}px`;
          }
        }
        if (i !== 0) {
          mediaHeight = m.sizes.medium.h;
          mediaWidth = m.sizes.medium.w;
          const maxHeight = 380 / 3;
          const maxWidth = 508 * 1/4;

          const ratio = (100 / mediaWidth) * maxWidth;
          mediaHeight = mediaHeight * (ratio / 100);

          if (mediaHeight > maxHeight) {
            photoStyle.top = `${(maxHeight - mediaHeight) / 2}px`;
          } else if (mediaWidth > maxWidth) {
            photoStyle.width = 'auto';
            photoStyle.height = '100%';
            const newRatio = (100 / m.sizes.medium.h) * maxWidth;
            mediaWidth = mediaWidth * (newRatio / 100);
            photoStyle.left = `${(maxWidth - mediaWidth) / 2}px`;
          }

          containStyle.height = 'calc(100% / 3 - 2px/3)';
          containStyle.marginBottom = '1px';
          containStyle.float = 'left';
          containStyle.width = 'calc(25% - 1px)';
        }
      }
      mediaElements.push(
        <div className='AdaptiveMedia-photoContainer' style={containStyle} key={i}>
          { imagePath.includes(IMAGE_TYPE.LIGHT) ? (
            <div className='adaptive-photo'>
              <img alt='tweet' src={imagePath} style={photoStyle} />
              <button className='load-image'onClick={this.loadImageHandler}>Load Image</button>
            </div>
          ) : (
            <div className='adaptive-photo'>
              <img alt='tweet' src={imagePath} style={photoStyle} />
            </div>
          ) }
        </div>
      );
    });
    // end media loop

    return (
      <div className='AdaptiveMedia' style={mediaStyle}>
        {mediaElements}
      </div>
    );
  };
}

Photos.propTypes = {
  media: PropTypes.array
};

Photos.displayName = 'Photos';

export default Photos;
