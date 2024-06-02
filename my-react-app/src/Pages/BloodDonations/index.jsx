import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import FilterPanel2 from '../../components/Home/FilterPanel2';
import SearchBar2 from '../../components/Home/SearchBar2';
import { dataList2 } from '../../constants'; 
import BloodCard from '../../components/Home/BloodCard'; 
import { Navbar } from '../Navbar';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Snackbar } from '@mui/material'; // assuming these are the relevant imports

import './styles.css';
import ImagePopup from '../../components/common/ImagePopup'; // Import the ImagePopup component

export const BloodDonations = () => {
  
  const [selectedType, setSelectedType] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const [list, setList] = useState(dataList2); // Use initialDataMedical instead of dataList
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [showImagePopup, setShowImagePopup] = useState(false);

  const handleSelectType = (event, value) =>
    !value ? null : setSelectedType(value);
  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);


  const applyFilters = () => {
    let updatedList = dataList2; // Use initialDataMedical for filtering

    // Category Filter
    if (selectedType) {
      updatedList = updatedList.filter(
        (item) => item.type === selectedType
      );
    }
    // Rating Filter (Assuming cuisine here refers to rating)
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => item.cuisine === selectedRating
      );
    }


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
  }, [selectedRating, selectedType, searchInput]);

  return (
    <div><Navbar/>
    <div className='home'>
      {/* Search Bar */}
      <SearchBar2
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className='home_panelList-wrap'>
        {/* Filter Panel */}
        <div className='home_panel-wrap'>
          <FilterPanel2
            selectToggle={handleSelectType}
            selectedType={selectedType}
            selectedRating={selectedRating}
            selectRating={handleSelectRating}
          />
        </div>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {resultsFound ? (
            <Grid container spacing={2}>
              {list.map((item) => (
                <BloodCard
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
      {showImagePopup && <ImagePopup handleClose={() => setShowImagePopup(false)} />}
    </div>
    </div>
  );
};