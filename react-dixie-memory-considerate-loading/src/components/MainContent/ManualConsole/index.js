
import React from 'react';

import SwitchWithLabel from '../../SwitchWithLabel';
import CheckboxWithLabel from '../../CheckboxWithLabel';

import './manual-console.css';

const ManualConsole = ({ manualEnabled, isThreeBoxOn, enableManualTesting, toggleThreeBox }) => (
  <div className='manual-console'>
    <SwitchWithLabel 
      label='ThreeBox On/Off'
      disabled={!manualEnabled}
      checked={isThreeBoxOn}
      onChange={toggleThreeBox} />
    <CheckboxWithLabel
      label='Enable Manual Testing'
      checked={manualEnabled}
      onChange={enableManualTesting} />
  </div>
);

export default ManualConsole;
