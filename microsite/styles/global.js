
import css from 'styled-jsx/css';

import theme from './theme';

export default css.global`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fontFamily.roboto};
    margin: 0;
    padding: 0;
    font-size: calc(10px + 1vmin);
    font-weight: 400;
  }
  p {
    font-size: 1em;
    color: ${theme.colors.subText};
    margin: 0;
    margin-bottom: 16px;
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: unset;
  }
  .uppercase {
    text-transform: uppercase;
  }
  h1 {
    font-size: 40px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 8px;
  }
  h4 {
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 4px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: ${theme.breakpoint.mobile}px) {
    h1 {
      font-size: 50px;
    }
  }
  @media screen and (min-width: ${theme.breakpoint.tablet}px) {
    h1 {
      font-size: 60px;
    }
  }
`;
