
import React from 'react';

import './Checkbox.css';

const Checkbox = ({ label, ...rest }) => (
  <div className='checkbox'>
    <input type='checkbox' {...rest} />
    <label>{label}</label>
  </div>
);

export default Checkbox;
