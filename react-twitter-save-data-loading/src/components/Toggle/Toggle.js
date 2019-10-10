
import React from 'react';
import Toggle from 'react-toggle';

import './Toggle.css';

const ToggleSwitch = ({ label, ...rest }) => (
  <div className='toggle'>
    <label>{label}</label>
    <Toggle {...rest} />
  </div>
);

export default ToggleSwitch;
