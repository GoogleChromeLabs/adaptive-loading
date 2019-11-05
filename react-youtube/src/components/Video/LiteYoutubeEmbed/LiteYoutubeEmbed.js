
import React, { useRef, useEffect } from 'react';

const LiteYoutubeEmbed = ({ id, className }) => {
  const ref = useRef();

  useEffect(() => {
    // TODO: potential npm package use
    const script = document.createElement('script');
    script.defer = true;
    script.src = './libs/lite-youtube-embed/lite-youtube-embed.js';
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type ='text/css';
    link.href = './libs/lite-youtube-embed/lite-youtube-embed.css';
    document.head.appendChild(link);

    if (ref.current) {
      ref.current.dataset.videoid = id;
    }
  }, [id]);

  return (
    <lite-youtube class={className} ref={ref}></lite-youtube>
  );
};

export default LiteYoutubeEmbed;
