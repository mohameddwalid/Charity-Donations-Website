import React from 'react';
import { typeList,ratingList } from '../../../constants';
import FilterListToggle from '../../common/FilterListToggle';
import './styles.css';


const FilterPanel = ({
  selectedType,
  selectToggle,
  selectedRating,
  selectRating,
  
  
}) => (
  <div>
    <div className='input-group'>
    <p className='label'>Filtering Options:</p>
      <p className='label'>By Category:</p>
      <FilterListToggle
        options={typeList}
        value={selectedType}
        selectToggle={selectToggle}
      />
    </div>
    <div className='input-group'>
      <p className='label'>By Medication Type:</p>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
    </div>
);

export default FilterPanel;
