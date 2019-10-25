
import React from 'react';

import LeftSummary from './LeftSummary';
import RightSummary from './RightSummary';
import './product-summary.css';

const ProductSummary = () => {
  return (
    <div className='product-summary'>
      <div className='left-product-summary'>
        <LeftSummary />
      </div>
      <div className='right-product-summary'>
        <RightSummary />
      </div>
    </div>
  );
};

export default ProductSummary;
