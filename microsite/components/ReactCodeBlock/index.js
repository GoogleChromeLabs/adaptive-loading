
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';

const ReactCodeBlock = ({ value }) => (
  <SyntaxHighlighter language='jsx' style={okaidia}>
    {value}
  </SyntaxHighlighter>
);

export default ReactCodeBlock;
