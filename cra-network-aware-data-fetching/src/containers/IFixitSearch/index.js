
import React, { useState } from 'react';

import './ifixit-search.css';
import SearchBar from '../../components/SearchBar';
import List from '../../components/List';
import Spinner from '../../components/Spinner';
import { useConnectionEffectiveType } from '../../utils/hooks';

const IFixitSearch = () => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const connectionEffectiveType = useConnectionEffectiveType();
  let searchLimit;
  switch(connectionEffectiveType) {
    // case 'offline':
    //   break;
    case 'slow-2g':
    case '2g':
      searchLimit = 5;
      break;
    case '3g':
      searchLimit = 15;
      break;
    case '4g':
      searchLimit = 40;
      break;
    default:
      searchLimit = 40;
      break;
  }

  const searchHandler = searchKey => {
    if (!searchKey) return;
    
    setLoading(true);
    const endpoint = `https://www.ifixit.com/api/2.0/search/${searchKey}?limit=${searchLimit}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        setLoading(false);
        console.log('ray : response => ', response);
        setSearchResults(response.results);
      })
      .catch(error => {
        setLoading(false);
        console.error('Error: ', error)
      });
  };

  return (
    <div className='ifixit-search'>
      <SearchBar search={searchHandler} />
      { loading ? (
        <Spinner />
      ) : (
        <List items={searchResults} />
      ) }
    </div>
  )
};

export default IFixitSearch;
