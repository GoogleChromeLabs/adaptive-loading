
import React from 'react';

import './list-item.css';

const ListItem = ({ item, index }) => {
  return (
    <div className='list-item'>
      <h1>{`${index+1}. ${item.title}`}</h1>
      <h3>SUMMARY</h3>
      <p>{item.summary}</p>
      <h3>DATA TYPE</h3>
      <p className='data-type'>
        {item.dataType}
      </p>
      <div className='list-item-thumbnail'>
        <img src={item.image.thumbnail} alt='thumbnail' />
      </div>
    </div>
  )
};

export default ListItem;
