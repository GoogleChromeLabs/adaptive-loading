
import ReactMarkdown from 'react-markdown';

import ReactCodeBlock from '../ReactCodeBlock';

const ReactMarkdownWithCode = ({ source, ...rest }) => (
  <ReactMarkdown source={source} renderers={{code: ReactCodeBlock}} {...rest} />
);

export default ReactMarkdownWithCode;
