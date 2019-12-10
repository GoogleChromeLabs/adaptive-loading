
import css from 'styled-jsx/css';

import theme from './theme';

export default css.global`
  * {
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    margin-bottom: 100px;
    background: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
    font-size: ${theme.typography.fontSize}px;
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightRegular};
    line-height: ${theme.typography.body2.lineHeight};
    letter-spacing: ${theme.typography.body2.letterSpacing};
    text-align: center;
  }
`;
