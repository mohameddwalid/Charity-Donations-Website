import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import FilterPanel4 from '../../components/Home/FilterPanel4';
import SearchBar4 from '../../components/Home/SearchBar4';
import { initialDataApp } from '../../constants';
import MedicalappCard from '../../components/Home/MedicalappCard'; // Import MedicalappCard
import { Grid } from '@mui/material'; // Import only necessary components

import './styles.css';
import ImagePopup from '../../components/common/ImagePopup'; 

export const Medicalappointments = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState(null);

  const [list, setList] = useState(initialDataApp);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [showImagePopup, setShowImagePopup] = useState(false);

  const handleSelectType = (event, value) =>
    !value ? null : setSelectedType(value);
  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);
  const handleSelectOrg = (event, value) =>
    !value ? null : setSelectedOrg(value);

  const applyFilters = () => {
    let updatedList = initialDataApp;

    if (selectedType) {
      updatedList = updatedList.filter((item) => item.type === selectedType);
    }

    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => item.cuisine === selectedRating
      );
    }

    if (selectedOrg) {
      updatedList = updatedList.filter(
        (item) => item.orgname === selectedOrg
      );
    }

    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.medicalspec
            .toLowerCase()
            .search(searchInput.toLowerCase().trim()) !== -1
      );
    }

    setList(updatedList);
    setResultsFound(updatedList.length > 0);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedType, selectedOrg,searchInput]);

  return (
    <div className='home'>
      <SearchBar4
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className='home_panelList-wrap'>
        <div className='home_panel-wrap'>
          <FilterPanel4
            selectToggle={handleSelectType}
            selectedType={selectedType}
            selectedRating={selectedRating}
            selectRating={handleSelectRating}
            selectedOrg={selectedOrg}
            selectOrg={handleSelectOrg}
          />
        </div>
        <div className='home_list-wrap'>
          {resultsFound ? (
            <Grid container spacing={2}>
              {list.map((item) => (
                <MedicalappCard // Replace MedicalCard with MedicalappCard
                  key={item.id}
                  Med={item}
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
  );
};