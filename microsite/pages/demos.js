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

import ThumbnailGrid from '../components/ThumbnailGrid';
import Thumbnail from '../components/ThumbnailGrid/Thumbnail';
import HeroSection from '../hoc/HeroSection';
import CenterLayer from '../hoc/CenterLayer';
import Head from '../components/Head';
import { pages } from '../utils/links';
import { demosMeta } from '../data/demos';

const Demos = () => (
  <>
    <Head title={pages.demos.title} />
    <HeroSection>
      <CenterLayer>
        <ThumbnailGrid>
          { demosMeta.map(demoMeta => {
            const { id, title, posterName, sourceCode, liveDemo } = demoMeta;
            return (
              <Thumbnail
                key={id}
                title={title}
                posterName={posterName}
                alt={title}
                lazyload
                sourceCode={sourceCode}
                liveDemo={liveDemo} />
            );
          }) }
        </ThumbnailGrid>
      </CenterLayer>
    </HeroSection>
  </>
);

export default Demos;
