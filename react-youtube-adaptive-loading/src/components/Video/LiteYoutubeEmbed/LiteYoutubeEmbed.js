
import React, { useRef, useEffect } from 'react';

const LiteYoutubeEmbed = ({ id, className }) => {
  const ref = useRef();
  console.log('[components Video LiteYoutubeEmbed] id => ', id);

  useEffect(() => {
    if (ref.current) {
      ref.current.dataset.videoid = id;
    }

    // TODO: potential npm package use
    (() => {
      const desiredSource = 'libs/lite-youtube-embed/lite-youtube-embed.js';
      const scripts = document.getElementsByTagName('script');
      let alreadyLoaded = false;
  
      if (scripts.length) {
        for(const scriptIndex in scripts) {
          if(!alreadyLoaded && scripts[scriptIndex].src && scripts[scriptIndex].src.includes(desiredSource)) {
            alreadyLoaded = true;
          }
        }
      }
      if (!alreadyLoaded) {
        const script = document.createElement('script');
        script.defer = true;
        script.src = `./${desiredSource}`;
        document.body.appendChild(script);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type ='text/css';
        link.href = './libs/lite-youtube-embed/lite-youtube-embed.css';
        document.head.appendChild(link);
      }
    })();
  }, [id]);

  return (
    <lite-youtube class={className} ref={ref}></lite-youtube>
  );
};

export default LiteYoutubeEmbed;
