
import React from 'react';

import './shopping-card.css';

const ShoppingButton = ({ title, className }) => {
  return (
    <button className={`shopping-button font-16 ${className}`}>
      {title}
    </button>
  );
};

const ShoppingCard = () => {
  return (
    <div className='shopping-card'>
      <div className='upper-part'>
        <div className='uniform-flexbox mb-12'>
          <div className='align-right'>
            <span>Price:&nbsp;&nbsp;</span>
            <strong className='bold-font-color font-16'>US $79.99</strong>
          </div>
          <div className='align-left'>
            <ShoppingButton className='shopping-button__dark-blue-bg' title='Buy It Now' />
          </div>
        </div>
        <div className='uniform-flexbox'>
          <div />
          <div className='align-left'>
            <div>
              <ShoppingButton className='shopping-button__light-blue-bg' title='Add to cart' />
            </div>
            <div className='add-to-watchlist'>
              <span className='eye'></span>
              <a href='#https://www.ebay.com/itm/Nike-Flex-Run-2016-Mens-Runinng-Shoe-Crimson-Black-830369-601-sz-11/152669264255?var=452220570389&hash=item238bcc197f:m:m8JGGvA8IYbBZVTWARQvq5g' className='text'>
                Add to Watchlist
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='uniform-flexbox lower-part align-center'>
        <div style={{borderRight: '1px solid #ddd'}}>Longtime member</div>
        <div>Returns accepted</div>
      </div>
    </div>
  );
};

export default ShoppingCard;
