
import React from 'react';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

const HeavyYoutubeEmbed = ({ id, className }) => {
  const embedUrl = `${BASE_EMBED_URL}${id}`;
  return (
    <iframe
      className={className}
      src={embedUrl}
      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
      title='video' />
  );
};

export default HeavyYoutubeEmbed;
