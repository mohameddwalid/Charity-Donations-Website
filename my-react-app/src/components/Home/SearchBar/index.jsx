import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import'./styles.css';

const SearchBar = ({value, changeInput}) => (
    <div className="searchBar-wrap">
      <SearchIcon className="searchBar-icon"/>
      <input 
      type='text'
      placeholder='Search By Name....'
      value={value}
      onChange={changeInput}
      />
     
    </div>
  );

export default SearchBar
