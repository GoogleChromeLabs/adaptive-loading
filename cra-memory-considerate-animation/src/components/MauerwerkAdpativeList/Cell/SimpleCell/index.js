
import React from 'react';

const SimpleCell = ({ toggle, name, description, css, maximized }) => (
  <div
    className='cell'
    style={{backgroundImage: css}}
    onClick={toggle}>
    { maximized && (
      <div className='details'>
        <div className='circle' style={{background: css}} />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    ) }
    { !maximized && <div className='default'>{name}</div> }
  </div>
);

export default SimpleCell;
