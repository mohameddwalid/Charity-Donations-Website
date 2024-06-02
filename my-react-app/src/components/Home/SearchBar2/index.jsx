import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

const SearchBar2 = ({ value, changeInput }) => (
  <div className="searchBar-wrap">
    <SearchIcon className="searchBar-icon" />
    <input
      type='text'
      placeholder='Search By Hospital Name....'
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar2;
