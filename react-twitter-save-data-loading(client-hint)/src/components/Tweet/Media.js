import React from 'react';
import PropTypes from 'prop-types';

import Photos from './Photos';
import Video from './Video';

class Media extends React.Component {
  render () {
    switch (this.props.media[0].type) {
      case 'photo':
        return <Photos { ...this.props } />;
      case 'video':
        return <Video { ...this.props } />;
      case 'animated_gif':
        return <Video gif={true} { ...this.props } />;
      default:
        return <div />;
    };
  };
}

Media.propTypes = {
  'media': PropTypes.array
};

Media.defaultProps = {
  'media': [{'type': ''}]
};

Media.displayName = 'Media';

export default Media;
