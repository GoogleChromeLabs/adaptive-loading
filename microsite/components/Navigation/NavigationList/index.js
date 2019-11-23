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

import NavitationListItem from './NavitationListItem';
import { pages } from '../../../utils/links';
import theme from '../../../styles/theme';

const NavigationList = () => (
  <nav>
    <ul>
      { Object.entries(pages).map(([key, value]) => (
        <NavitationListItem
          key={key}
          title={value.title}
          href={value.href}
          as={value.as} />
      )) }
      <style jsx>{`
        ul {
          display: flex;
          font-size: 16px;
        }
        ul:hover {
          color: #9e9e9e;
          ${theme.linkHoveringEffect}
        }
        @media screen and (max-width: ${theme.breakpoint.tablet - 1}px) {
          ul {
            position: absolute;
            left: 0;
            right: 0;
            top: 64px;

            width: 100%;
            justify-content: space-evenly;
          }
        }
      `}</style>
    </ul>
  </nav>
);

export default NavigationList;
