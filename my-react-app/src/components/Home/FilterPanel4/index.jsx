import React from 'react';
import { typeList4, ratingList4,orgList4 } from '../../../constants'; // Importing typeList4 and ratingList4
import FilterListToggle from '../../common/FilterListToggle';
import './styles.css';

const FilterPanel4 = ({
  selectedType,
  selectToggle,
  selectedRating,
  selectRating,
  selectedOrg,
  selectOrg
}) => (
  <div>
    <div className='input-group'>
    <p className='label'>Filtering Options:</p>
      <p className='label'>By Governorate:</p>
      <FilterListToggle options={typeList4} value={selectedType} selectToggle={selectToggle} />
    </div>
    <div className='input-group'>
      <p className='label'>By Area:</p>
      <FilterListToggle options={ratingList4} value={selectedRating} selectToggle={selectRating} />
    </div>
    <div className='input-group'>
      <p className='label'>By Organization:</p>
      <FilterListToggle options={orgList4} value={selectedOrg} selectToggle={selectOrg} />
    </div>
  </div>
);

export default FilterPanel4;
