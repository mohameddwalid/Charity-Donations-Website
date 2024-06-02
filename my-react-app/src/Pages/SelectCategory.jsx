import React, { useState } from 'react';
import { Box, Grid, Paper, createTheme, styled, ThemeProvider } from '@mui/material';
import MedicalImage from './Images/medicaldonation.png'; // Import images
import BloodImage from './Images/blooddonation.png';
import FoodImage from './Images/fooddonation.png';
import ClothesImage from './Images/clothdonation (2).png';
import SchoolSuppliesImage from './Images/schoolsuppliesdonation.png';
import ToysImage from './Images/toysdonation.png';
import { Navbar } from './Navbar';

import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  fontWeight: theme.palette.mode === 'light' ? 'bold' : 'inherit',
  color: theme.palette.mode === 'light' ? '#fd580b' : theme.palette.text.primary,
  width: 150,
  height: 150,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: theme.palette.mode === 'light' ? '2px solid #000' : 'none',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });
const darkTheme = createTheme({ palette: { mode: 'dark' } });

const images = {
  'Medical donations': MedicalImage,
  'Blood donations': BloodImage,
  'Food donations': FoodImage,
  'Clothes donations': ClothesImage,
  'School supplies donations': SchoolSuppliesImage,
  'Toys donations': ToysImage,
};

export const SelectCategory = () => {
  const [boxTexts, setBoxTexts] = useState(['Medical donations', 'Blood donations', 'Food donations', 'Clothes donations', 'School supplies donations', 'Toys donations']);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (category) => {
    if (category === 'Food donations') {
      navigate('/food');
    }
    if (category === 'School supplies donations'){
      navigate('/schoolsupplies');
    }
    if (category === 'Clothes donations'){
      navigate('/cloth');
    }
    if (category === 'Toys donations'){
      navigate('/toy');
    }
    if (category === 'Medical donations'){
      navigate('/medical');
    }
    if (category === 'Blood donations'){
      navigate('/blood');
    }
    
  }

  return (
    <div>   <Navbar/>
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            border: '1px solid #000',
            padding: '4px',
            borderRadius: '4px',
            maxWidth: 'fit-content',
          }}
        >
          <Box sx={{
            fontFamily: 'verdena',
            fontSize: '3em',
            fontWeight: 'bold',
            color: '#fd580b',
            textAlign: 'center',
            backgroundColor: '#F6F5F2',
          }}>Select one of the Categories</Box>

          <Grid container spacing={0}>
            {boxTexts.map((text, index) => (
              <Grid item xs={6} key={index}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: index === hoveredIndex ? '#333' : '#F6F5F2',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                    },
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(text)}
                >
                  <Item elevation={0}>
                    <img src={images[text]} alt={text} style={{ width: '80%', marginBottom: '8px' }} />
                    {text}
                  </Item>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
    </div>
  );
};

