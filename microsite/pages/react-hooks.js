
import Head from '../components/Head';
import ReactMarkdownWithCode from '../components/ReactMarkdownWithCode';
import HeroSection from '../hoc/HeroSection';
import GitHubMarkdownWrapper from '../hoc/GitHubMarkdownWrapper';
import { pages } from '../utils/links';
import { reactHooksDoc } from '../data/react-hooks';

const ReactHooks = () => (
  <>
    <Head title={pages.reactHooks.title} />
    <HeroSection>
      <GitHubMarkdownWrapper>
        <ReactMarkdownWithCode source={reactHooksDoc} />
      </GitHubMarkdownWrapper>
    </HeroSection>
  </>
);

export default ReactHooks;
