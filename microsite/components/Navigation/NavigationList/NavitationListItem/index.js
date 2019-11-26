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

import Link from 'next/link';
import { useRouter } from 'next/router';

import theme from '../../../../styles/theme';

const NavitationListItem = ({ title, href, as }) => {
  const { asPath } = useRouter();

  return (
    <li>
      <Link href={href} as={as}>
        <a>
          {title}
          <span />
        </a>
      </Link>
      <style jsx>{`
        li:hover {
          color: #fff;
          ${theme.linkHoveringEffect}
        }
        a {
          position: relative;
          display: inline-block;
          line-height: 48px;
          ${theme.linkHoveringEffect}
        }
        a > span {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 4px;
          background: #fff;
          transform: scaleY(${asPath === href ? 1 : 0});
          transform-origin: bottom;
          transition: transform 235ms cubic-bezier(.4,0,.2,1);
        }
        @media only screen and (min-width: ${theme.breakpoint.tablet}px) {
          a {
            line-height: 72px;
            margin: 0 16px;
          }
        }
      `}</style>
    </li>
  );
};

export default NavitationListItem;
