

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
