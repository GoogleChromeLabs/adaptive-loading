
import ReactMarkdown from 'react-markdown';

import Head from '../components/Head';
import HeroSection from '../hoc/HeroSection';
import GitHubMarkdownWrapper from '../hoc/GitHubMarkdownWrapper';
import { pages } from '../utils/links';
import { resourcesDoc } from '../data/resources';

const Resources = () => (
  <>
    <Head title={pages.resources.title} />
    <HeroSection>
      <GitHubMarkdownWrapper>
        <ReactMarkdown source={resourcesDoc} />
      </GitHubMarkdownWrapper>
    </HeroSection>
  </>
);

export default Resources;
