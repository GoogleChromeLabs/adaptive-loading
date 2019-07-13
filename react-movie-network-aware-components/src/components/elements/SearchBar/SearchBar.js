import React, { useState, useEffect } from "react";
import FontAwesome from "react-fontawesome";
import "./SearchBar.css";

const SearchBar = ({ callback }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (value) {
      const timeout = setTimeout(() => { callback(value); }, 500);
      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const doSearch = event => {
    setValue(event.target.value);
  };

  return (
    <div className="rmdb-searchbar">
      <div className="rmdb-searchbar-content">
        <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
        <input
          type="text"
          className="rmdb-searchbar-input"
          placeholder="Search"
          onChange={doSearch}
          value={value} />
      </div>
    </div>
  );
};

export default SearchBar;
