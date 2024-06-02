import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import FilterPanel from '../../components/Home/FilterPanel';
import SearchBar from '../../components/Home/SearchBar';
import { initialDataMedical } from '../../constants'; // Assuming this contains the initial data for medical items
import MedicalCard from '../../components/Home/MedicalCard'; // Import the MedicalCard component
import { Grid, Card, CardMedia, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Snackbar } from '@mui/material'; // assuming these are the relevant imports
import ImagePopup from '../../components/common/ImagePopup'; // Import the ImagePopup component
import { Navbar } from '../Navbar';

import './styles.css';

export const MedicalSupplies = () => {
  
  const [selectedType, setSelectedType] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'Antipyretics' },
    { id: 2, checked: false, label: 'Anticoagulant' },
    { id: 3, checked: false, label: 'Antacids' },
  ]);
  const [list, setList] = useState(initialDataMedical); // Use initialDataMedical instead of dataList
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [showImagePopup, setShowImagePopup] = useState(false); // State to control the visibility of ImagePopup

  const handleSelectType = (event, value) =>
    !value ? null : setSelectedType(value);
  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const updatedCuisines = cuisines.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(updatedCuisines);
  };

  const applyFilters = () => {
    let updatedList = initialDataMedical; // Use initialDataMedical for filtering

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

    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
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
  }, [selectedRating, selectedType, cuisines, searchInput]);

  const handleImagePopup = () => {
    setShowImagePopup(true);
  };

  return (
  <div><Navbar/>
    <div className='home'>
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className='home_panelList-wrap'>
        {/* Filter Panel */}
        <div className='home_panel-wrap'>
          <FilterPanel
            selectToggle={handleSelectType}
            selectedType={selectedType}
            selectedRating={selectedRating}
            selectRating={handleSelectRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
          />
        </div>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {resultsFound ? (
            <Grid container spacing={2}>
              {list.map((item) => (
                <MedicalCard
                  key={item.id}
                  Med={item}
                  handleImagePopup={handleImagePopup} // Pass handleImagePopup function to QuantityPopup
                  // Add other props as needed for MedicalCard
                />
              ))}
            </Grid>
          ) : (
            <EmptyView />
          )}
        </div>
      </div>
      {/* Render ImagePopup based on showImagePopup state */}
      {showImagePopup && (
        <ImagePopup
          handleClose={() => setShowImagePopup(false)} // Pass function to close ImagePopup
        />
      )}
    </div>
    </div>
  );
};


export default MedicalSupplies;