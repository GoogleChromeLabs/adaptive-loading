
import React from 'react';

import './checkbox-with-label.css';

const CheckboxWithLabel = ({ label, onChange, ...rest }) => {
  const onChangeHandler = event => {
    onChange(event.target.checked);
  };

  return (
    <div className='checkbox'>
      <label>
        <input type='checkbox' onChange={onChangeHandler} {...rest} />
        {label}
      </label>
    </div>
  )
};

export default CheckboxWithLabel;
