import React from 'react';
import { typeList3, ratingList3,orgtypeList3 } from '../../../constants'; // Importing typeList3 and ratingList3
import FilterListToggle from '../../common/FilterListToggle';
import './styles.css';

const FilterPanel3 = ({
  selectedType,
  selectToggle,
  selectedRating,
  selectRating,
  selectedorgtype,
  selectorgtype

}) => (
  <div>
    <div className='input-group'>
    <p className='label'>Filtering Options:</p>
      <p className='label'>By Governorate:</p>
      <FilterListToggle options={typeList3} value={selectedType} selectToggle={selectToggle} />
    </div>
    <div className='input-group'>
      <p className='label'>By Area:</p>
      <FilterListToggle options={ratingList3} value={selectedRating} selectToggle={selectRating} />
    </div>
    <div className='input-group'>
      <p className='label'>By Organization Type:</p>
      <FilterListToggle options={orgtypeList3} value={selectedorgtype} selectToggle={selectorgtype} />
    </div>
  </div>
);

export default FilterPanel3;
