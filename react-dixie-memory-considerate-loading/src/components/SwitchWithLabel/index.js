
import React from 'react';
import Toggle from 'react-toggle'; // TODO: update -> deprecated lifecyle usage detected

import './switch-with-label.css';

const SwitchWithLabel = ({ label, ...rest }) => (
  <div className='switch-with-label'>
    <Toggle {...rest}/>
    <label>
      {label}
    </label>
  </div>
);

export default SwitchWithLabel;
