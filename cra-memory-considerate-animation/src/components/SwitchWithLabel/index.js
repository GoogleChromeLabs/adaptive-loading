
import React, { Fragment } from 'react';
import { Switch } from 'antd';

import './switch-with-label.css';

const SwitchWithLabel = ({ label, ...rest }) => {
  return (
    <Fragment>
      <span>{label}</span>
      <Switch className="switch" {...rest} />
    </Fragment>
  );
};

export default SwitchWithLabel;
