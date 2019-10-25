
import React from 'react';

import WhiteCardWrapper from '../../../../../hoc/WhiteCardWrapper';
import './shop-with-confidence.css';

const ShopWithConfidence = () => {
  return (
    <WhiteCardWrapper className='shop-with-confidence bold-font-color'>
      <p className='title'>Shop with confidence</p>
      <div className='content'>
        <div className='dollar-mark'>
          <span />
        </div>
        <div>
          <div className='summary-description'>eBay Money Back Guarantee</div>
          <div className='detailed-description'>
            <span className='generic-font-color'>Get the item you ordered or get your money back. </span>
            <a href='https://pages.ebay.com/ebaybuyerprotection/index.html?_trksid=p2047675.m5391.l9995'>Learn more</a>
          </div>
        </div>
      </div>
    </WhiteCardWrapper>
  );
};

export default ShopWithConfidence;
