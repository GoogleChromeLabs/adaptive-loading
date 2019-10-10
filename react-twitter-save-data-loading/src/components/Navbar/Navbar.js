import React from 'react';

import Checkbox from '../Checkbox/Checkbox';
import ToggleSwitch from '../Toggle/Toggle';
import { SAVE_DATA_MODE } from '../../config';
import './Navbar.css';

const Navbar = ({
  saveData,
  toggleClientSaveData,
  clientSaveDataEnabled,
  enableClientSaveData
}) => (
  <div className='navbar'>
    <a href='/'>
      <strong>HOME</strong>
    </a>
    <div className='client-save-data'>
      <Checkbox
        label='Testing Save-Data on Client'
        checked={clientSaveDataEnabled}
        onChange={enableClientSaveData} />
      <ToggleSwitch
        label='Save Data'
        disabled={!clientSaveDataEnabled}
        checked={saveData === SAVE_DATA_MODE.ON ? true : false}
        onChange={toggleClientSaveData} />
    </div>
  </div>
);

export default Navbar;
