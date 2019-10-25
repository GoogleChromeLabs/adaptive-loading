
import React from 'react';

import './white-card-wrapper.css';

const WhiteCardWrapper = ({ children, className }) => (
  <div className={`white-card-wrapper ${className}`}>{children}</div>
);

export default WhiteCardWrapper;
