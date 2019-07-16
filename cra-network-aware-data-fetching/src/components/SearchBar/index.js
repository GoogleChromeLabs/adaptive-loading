/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState } from 'react';

import './search-bar.css';

const SearchBar = ({ search }) => {
  const [searchKey, setSearchKey] = useState('');

  const searchKeyChangeHandler = event => {
    setSearchKey(event.target.value);
  };

  const enterKeyHandler = event => {
    if (event.key === 'Enter') {
      goSearchHandler();
    }
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
          onKeyDown={enterKeyHandler}
          onChange={searchKeyChangeHandler}
          value={searchKey} />
      </div>
    </div>
  )
};

export default SearchBar;
