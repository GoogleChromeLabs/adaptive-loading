
import React, { useState } from 'react';

import './search-bar.css';

const SearchBar = ({ search }) => {
  const [searchKey, setSearchKey] = useState('');

  const searchKeyChangeHandler = event => {
    setSearchKey(event.target.value);
  };

  const goSearchHandler = () => {
    search(searchKey);
  };

  return (
    <div className='searchbar'>
      <div className='searchbar-content'>
        <div onClick={goSearchHandler} className='searchbar-search-icon' />
        <input
          type='text'
          className='searchbar-input'
          placeholder='Search'
          onChange={searchKeyChangeHandler}
          value={searchKey} />
      </div>
    </div>
  )
};

export default SearchBar;
