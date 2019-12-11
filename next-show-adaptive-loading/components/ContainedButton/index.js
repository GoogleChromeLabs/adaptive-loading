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

import theme from '../../styles/theme';

const ContainedButton = ({ children, ...rest }) => (
  <>
    <button {...rest}>{children}</button>
    <style jsx>{`
      padding: 8px 16px;
      min-height: 32px;
      cursor: pointer;
      font-family: ${theme.typography.button.fontFamily};
      font-weight: ${theme.typography.fontWeightBold};
      font-size: ${theme.typography.button.fontSize};
      line-height: ${theme.typography.button.lineHeight};
      letter-spacing: ${theme.typography.button.letterSpacing};
      color: ${theme.palette.primary.contrastText};
      background-color: ${theme.palette.primary.main};
      border: none;
      border-radius: 2px;
    `}</style>
  </>
);

export default ContainedButton;
