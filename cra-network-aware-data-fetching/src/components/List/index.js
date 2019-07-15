
import React from 'react';

import ListItem from './ListItem';

const List = ({ items }) => {
  return (
    <div className='list'>
      { items.map((item, index) => (
        <ListItem key={item.modified_date} item={item} index={index} />
      )) }
    </div>
  )
};

export default List;
