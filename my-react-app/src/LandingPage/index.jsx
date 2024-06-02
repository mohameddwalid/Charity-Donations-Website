import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Components/Header';
import PlaceToVist from './Components/PlaceToVist';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + './images/landingpage3.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export const LandingPage=()=> {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <CssBaseline />
         <Header />
        <PlaceToVist /> 
      </div>
    </div>
  );
}