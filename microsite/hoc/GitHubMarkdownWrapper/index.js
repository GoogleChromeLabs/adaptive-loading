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
