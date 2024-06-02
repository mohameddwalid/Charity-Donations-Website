import React from 'react';
import { typeList2, ratingList2 } from '../../../constants'; // Importing typeList2 and ratingList2
import FilterListToggle from '../../common/FilterListToggle';
import './styles.css';

const FilterPanel2 = ({
  selectedType,
  selectToggle,
  selectedRating,
  selectRating,
}) => (
  <div>
    <div className='input-group'>
    <p className='label'>Filtering Options:</p>
      <p className='label'>By Governorate:</p>
      <FilterListToggle options={typeList2} value={selectedType} selectToggle={selectToggle} />
    </div>
    <div className='input-group'>
      <p className='label'>By Area:</p>
      <FilterListToggle options={ratingList2} value={selectedRating} selectToggle={selectRating} />
    </div>
  </div>
);

export default FilterPanel2;
