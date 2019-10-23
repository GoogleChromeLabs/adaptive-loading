
import React from 'react';

import './property-field.css';

const PropertyField = ({ label, value, verticalAlignTop }) => (
  <div className={verticalAlignTop ? 'property-field property-top-alignment' : 'property-field property-center-alignment'}>
    <div className='property-label'>{label && `${label}:`}</div>
    <div className='property-value'>{value}</div>
  </div>
);

export default PropertyField;
