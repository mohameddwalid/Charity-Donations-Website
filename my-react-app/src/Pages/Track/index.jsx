import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import SearchBar5 from '../../components/Home/SearchBar5';
import { Tracklist } from '../../constants'; 
import TrackCard from '../../components/Home/TrackCard'; 
import { Navbar } from '../Navbar';
import { Grid } from '@mui/material'; // You only need to import Grid from MUI

import './styles.css';

export const Track = () => {
  
  const [list, setList] = useState(Tracklist);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const applyFilters = () => {
    let updatedList = Tracklist;

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
      );
    }

    setList(updatedList);
    setResultsFound(updatedList.length > 0);
  };

  useEffect(() => {
    applyFilters();
  }, [searchInput]);

  return (
    <div>
      <Navbar/>
    <div className='home'>
      {/* Search Bar */}
      <SearchBar5
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      {/* List & Empty View */}
      <div className='home_list-wrap'>
        {resultsFound ? (
          <Grid container spacing={2}>
            {list.map((item) => (
              <TrackCard
                key={item.id}
                Med={item}
                // Add other props as needed for MedicalCard
              />
            ))}
          </Grid>
        ) : (
          <EmptyView />
        )}
      </div>
    </div>
    </div>
  );
};