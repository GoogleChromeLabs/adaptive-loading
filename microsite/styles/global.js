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

import css from 'styled-jsx/css';

import theme from './theme';

export default css.global`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
    font-family: ${theme.typography.fontFamily};
    margin: 0;
    padding: 0;
    font-size: calc(10px + 1vmin);
    font-weight: 400;
  }
  p {
    font-size: 1em;
    color: ${theme.palette.text.secondary};
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
  @media screen and (min-width: ${theme.breakpoints.sm}px) {
    h1 {
      font-size: 50px;
    }
  }
  @media screen and (min-width: ${theme.breakpoints.md}px) {
    h1 {
      font-size: 60px;
    }
  }
`;
