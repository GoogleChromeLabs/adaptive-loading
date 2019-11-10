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

import React from 'react';

import Checkbox from '../Checkbox/Checkbox';
import ToggleSwitch from '../Toggle/Toggle';
import './Navbar.css';

const Navbar = ({
  saveData,
  toggleClientSaveData,
  testSaveDataEnabled,
  enableClientSaveData
}) => (
  <div className='navbar'>
    <a href='/'>
      <strong>HOME</strong>
    </a>
    <div className='client-save-data'>
      <Checkbox
        label='Testing Save-Data'
        checked={testSaveDataEnabled}
        onChange={enableClientSaveData} />
      <ToggleSwitch
          label='Save Data on/off'
        disabled={!testSaveDataEnabled}
        checked={saveData}
        onChange={toggleClientSaveData} />
    </div>
  </div>
);

export default Navbar;
