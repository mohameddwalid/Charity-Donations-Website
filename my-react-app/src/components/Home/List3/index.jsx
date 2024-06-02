import React from 'react';
import ListItem3 from './ListItem3';
import './styles.css';

const List3 = ({ list }) => (
  <div className='list-wrap'>
    {list.map((item) => (
      <ListItem3 key={item.id} item={item} />
    ))}
  </div>
);

export default List3;
