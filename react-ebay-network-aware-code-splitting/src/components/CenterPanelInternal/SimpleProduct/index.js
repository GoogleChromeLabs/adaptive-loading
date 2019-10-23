
import React from 'react';

const SimpleProduct = ({ smallImageSrc, altMessage }) => (
  <img className='small-image' width='100%' height='auto' src={smallImageSrc} alt={altMessage} />
);

export default SimpleProduct;
