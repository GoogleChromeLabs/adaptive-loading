
import 'github-markdown-css';

import theme from '../../styles/theme';

const GitHubMarkdownWrapper = ({ children }) => (
  <div className='markdown-body'>
    {children}
    <style jsx>{`
      .markdown-body {
        box-sizing: border-box;
        margin: 0 auto;
        min-width: 200px;
        max-width: 1260px;
        padding: 0 20px;
        color: ${theme.colors.subText};
        font-family: ${theme.fontFamily.roboto};
        font-size: 1em;
      }
      .markdown-body :global(h1) {
        color: ${theme.colors.text};
        border-bottom: 1px solid #eaecef;
      }
      .markdown-body :global(h2) {
        border-bottom: 1px solid #eaecef;
      }
      .markdown-body :global(h4) {
        font-size: 1.1em;
      }
      .markdown-body :global(a) {
        color: ${theme.colors.anchorTextOnDark};
      }
      .markdown-body :global(p) {
        font-size: 1em;
      }
      .markdown-body :global(p > code) {
        color: rgb(175, 97, 97);
        margin: 0;
        padding: .2em .4em;
        border-radius: 3px;
        background-color: rgb(27, 29, 35);
      }
      .markdown-body :global(img) {
        background-color: transparent;
      }
      @media (max-width: 767px) {
        .markdown-body {
          padding: 15px;
        }
      }
    `}</style>
  </div>
);

export default GitHubMarkdownWrapper;
