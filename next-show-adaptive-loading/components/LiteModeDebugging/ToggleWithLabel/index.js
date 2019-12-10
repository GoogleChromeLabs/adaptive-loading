
import React from 'react';
import Toggle from 'react-toggle'; // TODO: update -> deprecated lifecyle usage detected
import 'react-toggle/style.css';

const ToggleWithLabel = ({ label, onChange, ...rest }) => {
  const onChangeHandler = event => {
    onChange(event.target.checked);
  };

  return (
    <>
      <div className='toggle-with-label'>
        <Toggle onChange={onChangeHandler} {...rest} />
        <label>{label}</label>
      </div>
      <style jsx global>{`
        .toggle-with-label {
          display: flex;
          align-items: center;
          padding: 8px;
        }
        :global(.toggle-with-label > .react-toggle) {
          margin-right: 8px;
        }
      `}</style>
    </>
  );
};

export default ToggleWithLabel;
