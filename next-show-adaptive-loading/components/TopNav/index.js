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

import { useContext } from 'react';

import HomeLink from './HomeLink';
import BackLink from './BackLink';
import LiteModeDebuggingWidgets from '../LiteModeDebuggingWidgets';
import { AppContext } from '../../contexts';

const TopNav = () => {
  const { theme } = useContext(AppContext);

  return (
    <>
    <div className='top-nav'>
      <div className='links'>
        <HomeLink />
        <div className='separator' />
        <BackLink />
      </div>
      <LiteModeDebuggingWidgets />
    </div>
    <style jsx>{`
      .top-nav {
        position: absolute;
        top: 0;
        padding: 0 12px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .links {
        display: flex;
        padding: 12px 0;
      }
      :global(a) {
        color: ${theme.palette.text.primary};
        text-decoration: none;
      }
      :global(h3.link) {
        margin: 0 8px;
      }
      .separator {
        width: 2px;
        background-color: ${theme.palette.text.primary};
      }
    `}</style>
    </>
  );
};

export default TopNav;
