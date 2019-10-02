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

import { useContext } from 'react';

import SwitchWithLabel from '../SwitchWithLabel';
import CheckboxWithLabel from '../CheckboxWithLabel';
import AnimationEmulationContext from '../AnimationEmulationContext';

const githubLink = {
  label: 'GitHub',
  href: 'https://github.com/anton-karlovskiy/cna-memory-considerate-animation'
};

const Nav = () => {
  const {
    manualEnabled,
    isAnimationOn,
    enableManualAnimationHandler,
    toggleAnimationHandler
  } = useContext(AnimationEmulationContext);
  return (
    <nav>
      <ul>
        <li>
          <SwitchWithLabel 
            label='Animation On/Off'
            disabled={!manualEnabled}
            checked={isAnimationOn}
            onChange={toggleAnimationHandler} />
          <CheckboxWithLabel
            label='Enable Manual Animation'
            checked={manualEnabled}
            toggle={enableManualAnimationHandler} />
        </li>
        <li><a href={githubLink.href}>{githubLink.label}</a></li>
      </ul>
      <style jsx>{`
        :global(body) {
          margin: 0;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          font-size: 14px;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
