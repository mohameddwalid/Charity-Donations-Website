import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

const SearchBar4 = ({ value, changeInput }) => (
  <div className="searchBar-wrap">
    <SearchIcon className="searchBar-icon" />
    <input
      type='text'
      placeholder='Filter By Medical specialty....'
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar4;
