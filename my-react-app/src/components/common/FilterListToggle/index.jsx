import React, { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: '8px',
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '.8rem',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '10px',
    color: '#fff',
    margin: '8px 0',
    '&.Mui-selected': {
      borderRadius: '10px',
      background: '#fd580b',
      color: '#fff',
    },
    '&.MuiToggleButton-root': {
      color: '#000',
      '&:hover': {
        background: '#fd580b',
        color: '#fff',
      },
    },
  },
  resetButton: {
    textTransform: 'none',
    backgroundColor: 'white', // Set background color to white
    color: 'black', // Set text color to black
    borderRadius: '10px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    '&:hover': {
      backgroundColor: '#fd580b', // Change background color to orange on hover
      color: '#fff', // Change text color to white on hover
    },
  },
});

const FilterListToggle = ({ options, selectToggle }) => {
  const classes = useStyles();
  const [value, setValue] = useState(null);

  const handleToggle = (event, newValue) => {
    if (newValue === null || newValue !== value) {
      setValue(newValue);
      selectToggle(event, newValue);
    } else {
      setValue(null);
      selectToggle(event, null);
    }
  };

  const handleReset = () => {
    setValue(null);
    selectToggle(null);
  };

  return (
    <div>
      <ToggleButtonGroup
        value={value}
        onChange={handleToggle}
        exclusive
        className={classes.root}
        orientation="vertical"
      >
        {options.map(({ label, id, value }) => (
          <ToggleButton className={classes.toggle} key={id} value={value}>
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Button className={classes.resetButton} onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default FilterListToggle;
