/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useEffect } from 'react';

import theme from '../../../styles/theme';
import { imagePlaceHolder } from '../../../styles/images';
import { getDemosPath } from '../../../data/demos';

const Thumbnail = ({
  posterName,
  alt,
  onClick,
  clickable,
  lazyload
}) => {
  useEffect(() => {
    if (lazyload) {
      (async () => {
        if ('loading' in HTMLImageElement.prototype) {
          console.log('[components Thumbnail] loading attribute is supported');
          const images = document.querySelectorAll('img.lazyload');
          images.forEach(img => {
            img.src = img.dataset.src;
          });
        } else {
          console.log('[components Thumbnail] loading attribute is not supported');
          // Dynamically import the LazySizes library
          await import('lazysizes');
          // Initiate LazySizes (reads data-src & class=lazyload)
          lazySizes.init(); // lazySizes works off a global.
        }
      })();
    }
  }, []);

  let classes = '';
  if (clickable) {
    classes += ' clickable';
  }
  if (lazyload) {
    classes += ' lazyload';
  }

  return (
    <div className='thumbnail'>
      <picture>
        <source srcSet={getDemosPath('webp') + posterName + '.webp'} type='image/webp' />
        <source srcSet={getDemosPath('jpg') + posterName + '.jpg'} type='image/jpeg' />
        <img
          width='272px'
          height='164px'
          className={classes}
          data-src={imagePlaceHolder}
          onClick={onClick}
          alt={alt}
          loading={lazyload ? 'lazy' : 'auto'} />
      </picture>
      <style jsx>{`
        .thumbnail {
          height: 100%;
        }
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        .clickable {
          cursor: pointer;
        }
        .clickable:hover {
          opacity: 0.8;
        }
        @media only screen and (min-width: ${theme.breakpoint.mobile}px) {
          .thumbnail img {
            width: 413.5px;
            height: 164px;
          }
        }
        @media only screen and (min-width: ${theme.breakpoint.tablet}px) {
          .thumbnail img {
            width: 272px;
            height: 164px;
          }
        }
      `}</style>
    </div>
  );
};

export default Thumbnail;
