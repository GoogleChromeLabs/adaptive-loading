/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
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
