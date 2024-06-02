import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import FilterPanel3 from '../../components/Home/FilterPanel3';
import List3 from '../../components/Home/List3';
import SearchBar3 from '../../components/Home/SearchBar3';
import { Navbar } from '../Navbar';
import { dataList3 } from '../../constants'; // Importing DataList3
import './styles.css';

export const RegisteredOrg = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedorgtype,setSelectedorgtype] = useState(null);

 

  const [list, setList] = useState(dataList3); // Using dataList3
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectType = (event, value) =>
    !value ? null : setSelectedType(value);
  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);
  const handleSelectorgtype = (event, value) =>
    !value ? null : setSelectedorgtype(value);

 

  const applyFilters = () => {
    let updatedList = dataList3;

    if (selectedType) {
      updatedList = updatedList.filter((item) => item.type === selectedType);
    }

    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => item.cuisine === selectedRating
      );
    }
    if (selectedorgtype) {
      updatedList = updatedList.filter(
        (item) => item.orgtype === selectedorgtype
      );
    }

    
    

    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);
    setResultsFound(updatedList.length > 0);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedType, selectedorgtype,searchInput]);

  return (
    <div><Navbar/>
    <div className='home'>
      <SearchBar3
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className='home_panelList-wrap'>
        <div className='home_panel-wrap'>
          <FilterPanel3
            selectToggle={handleSelectType}
            selectedType={selectedType}
            selectedRating={selectedRating}
            selectRating={handleSelectRating}
            selectorgtype={handleSelectorgtype}
            selectedorgtype={selectedorgtype}
           
          />
        </div>
        <div className='home_list-wrap'>
          {resultsFound ? <List3 list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
    </div>
  );
};

