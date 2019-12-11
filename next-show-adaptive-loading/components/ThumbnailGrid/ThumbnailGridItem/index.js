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

import { useEffect } from 'react';
import Link from 'next/link';

import { PAGES, QUERY_PARAMS } from '../../../utils/constants';
import { serializeToQueryParam } from '../../../utils/helpers';

const ThumbnailGridItem = ({ id, thumbnail }) => {
  useEffect(() => {
    (async () => {
      if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img.lazyload');
        images.forEach(img => {
          img.src = img.dataset.src;
        });
      } else {
        // Dynamically import the LazySizes library
        await import('lazysizes');
        // Initiate LazySizes (reads data-src & class=lazyload)
        lazySizes.init(); // lazySizes works off a global.
      }
    })();
  }, [thumbnail]);

  return (
    <>
      { thumbnail && (
        <Link href={serializeToQueryParam({[QUERY_PARAMS.ID]: id}, PAGES.SHOW)}>
          <a>
            <div className='zoom-effect'>
              <img data-src={thumbnail} className='lazyload' loading='lazy' width='200px' />
            </div>
          </a>
        </Link>
      ) }
      <style jsx>{`
        .zoom-effect {
          padding: 2px 8px;
          transition: 0.4s ease all;
        }
        .zoom-effect:hover {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
};

export default ThumbnailGridItem;
