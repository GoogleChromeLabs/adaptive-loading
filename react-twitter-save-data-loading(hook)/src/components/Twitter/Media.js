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

import Photos from './Photos';
import Video from './Video';

const Media = props => {
  switch (props.media[0].type) {
    case 'photo':
      return <Photos { ...props } />;
    case 'video':
      return <Video { ...props } />;
    case 'animated_gif':
      return <Video gif { ...props } />;
    default:
      return null;
  };
};

Media.propTypes = {
  media: PropTypes.array
};

Media.defaultProps = {
  media: [{'type': ''}]
};

Media.displayName = 'Media';

export default Media;
