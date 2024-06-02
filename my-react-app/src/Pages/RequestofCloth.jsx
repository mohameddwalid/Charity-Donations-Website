import React, { useState, useEffect } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import NoResultsGIF from "./Images/no-result.gif";
import CardMedia from "@mui/material/CardMedia";
import Tshirt from './Images/IMG1.jpg';
import Pants from'./Images/IMG10.jpg';
import Jacket from './Images/IMG6.jpg';
import Skirt from './Images/IMG5.jpg';
import Shorts from './Images/IMG3.jpg';
import tshirt2 from './Images/Img4.jpg' ;
import Pullover from './Images/IMG9.jpg';
import Gloves from './Images/IMG8.jpg';
import IceCap from './Images/IMG7.jpg';
import { Navbar } from "./Navbar";

import {
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Snackbar,
  InputAdornment,
  IconButton,
  Box,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  colors,
} from "@mui/material";
export const initialDataCloth = [
  {
    id: 1,
    Type: "T-shirt",
    Gender: "Woman",
    Season: "Summer",
    category: "Cloth",
    Age: "Above 18",
    Material: "cotton",
    quantity: "60 T-shirt",
    quantitydonated: "29",
    coverSrc: Tshirt,
  },
  {
    id: 2,
    Type: "SweatPants",
    Gender: "Man",
    Season: "Winter",
    category: "Cloth",
    Age: "12 to 18",
    Material: "Cotton",
    quantity: "100 SweatPants",
    quantitydonated: "60",
    coverSrc: Pants,
  },
  {
    id: 3,
    Type: "Jacket",
    Gender: "Woman",
    Season: "Summer",
    category: "Cloth",
    Age: "1 to 12",
    Material: "cotton",
    quantity: "70 Jacket",
    quantitydonated: "50",
    coverSrc: Jacket,
  },
  {
    id: 4,
    Type: "Skirt",
    Gender: "Woman",
    Season: "Summer",
    category: "Cloth",
    Age: "Above 18",
    Material: "cotton",
    quantity: "150 Skirt",
    quantitydonated: "90",
    coverSrc: Skirt,
  },
  {
    id: 5,
    Type: "shorts",
    Gender: "Man",
    Season: "Summer",
    category: "Cloth",
    Age: "Above 18",
    Material: "cotton",
    quantity: "120 shorts",
    quantitydonated: "70",
    coverSrc: Shorts,
  },
  {
    id: 6,
    Type: "T-shirt",
    Gender: "Woman",
    Season: "Summer",
    category: "Cloth",
    Age: "1-6",
    Material: "cotton",
    quantity: "160 T-shirt",
    quantitydonated: "100",
    coverSrc: tshirt2,
  },
  {
    id: 7,
    Type: "Pullover",
    Gender: "Man",
    Season: "Winter",
    category: "Cloth",
    Age: "1-6",
    Material: "cotton",
    quantity: "160 Pullover",
    quantitydonated: "100",
    coverSrc: Pullover,
  },
  {
    id: 8,
    Type: "Winter gloves",
    Gender: "Man",
    Season: "Winter",
    category: "Cloth",
    Age: "above 18",
    Material: "cotton",
    quantity: "90 gloves",
    quantitydonated: "60",
    coverSrc: Gloves,
  },
  {
    id: 9,
    Type: "Winter Hat",
    Gender: "Man",
    Season: "Winter",
    category: "Cloth",
    Age: "above 18",
    Material: "cotton",
    quantity: "100 IceCap",
    quantitydonated: "80",
    coverSrc: IceCap,
  },
];
const MAX = 100;
const MIN = 0;
export const RequestsofCloth = () => {
 const [ageFilter, setAgeFilter] = useState("");
 const [genderFilter, setGenderFilter] = useState("");
  const [seasonFilter, setSeasonFilter] = useState("");
  const [transportion, setTransportion] = React.useState("");
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(initialDataCloth);
  const [openCloth, setopenCloth] = useState(false);
  const [openClothInfo, setopenClothInfo] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [PopOpen, setPopOpen] = useState(false);
  const [maxQuantity, setMaxQuantity] = useState(1);
  const [quantityDonated, setQuantityDonated] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [itemQuantity, setItemQuantity] = useState("");
  const [val, setVal] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [finalValueChange, setFinalValueChange] = useState(0);
  const [noResults, setNoResults] = useState(false);
  const [ChooseDateandTime, setChooseDateandTime] = useState(false);
  const [ChooseTransportion, setChooseTransportion] = useState(false);
  const [errorDate, seterrorDate] = useState(false);
  const [errorTransportion, seterrorTransportion] = useState(false);
  const [errorCont, setErrorCont] = useState("");
  const [TypeCCont, setTypeCCont] = useState('');
  const [TypeC, setTypeC] = useState('');
  const [ageCont, setageCont] = useState('');
  const [age, setage] = useState('');
  const [genderCont, setgenderCont] = useState('');
  const [gender, setgender] = useState('');
  const [TypeseasonCont, setseasonCont] = useState('');
  const [season, setseason] = useState('');
  const [TypematerialCont, setmaterialCont] = useState('');
  const [material, setmaterial] = useState('');
  const [error, setError] = React.useState(false); 

  const marks = [
    { value: MIN, label: '' },
    { value: MAX, label: '' },
];
  const handleChange = (event) => {
    handleFinalValueChange();
    setTransportion(event.target.value);
    setError(false); 
};

const handleFinalValueChange = () => {
    if (isSubmitted) {
        setFinalValueChange(quantityDonated + quantity);
    } else {
        setFinalValueChange(quantityDonated);
    }
};
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const filtered = initialDataCloth.filter((item) =>
      item.category.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const handleOpenCloth = (content1, content2, itemName, maxQuantity, itemQuantity, quantityDonated)=>{
    setDialogTitle(`${content2} ${itemName}`);
    setDialogContent(content1);
    setopenCloth(true);
    seterrorDate(true);
    seterrorTransportion(true);
    setChooseDateandTime(false);
    setChooseTransportion(false);
    setTransportion('');
    setMaxQuantity(maxQuantity);
    setQuantity(1);
    setItemQuantity(itemQuantity);
    setQuantityDonated(quantityDonated);
}
const handleOpenClothInfo=(content2,Title,typecont,ageCont,type,age,genderCont,gender,seasonCont,season,materialCont,material)=>{
    setopenClothInfo(true);
    setTypeC(type);
    setTypeCCont(typecont);
    setage(age);
    setageCont(ageCont);
    setgender(gender);
    setgenderCont(genderCont);
    setmaterialCont(materialCont);
    setmaterial(material);
    setseasonCont(seasonCont);
    setseason(season);
    setDialogContent(`${content2} ${Title}`);
    setDialogTitle(`${content2} ${Title}`);
    
}
const handleCloseCloth = () => {
    setopenCloth(false);
};
const handleCloseClothInfo = () => {
    setopenClothInfo(false);
};
const handleSubmit = () => {
    if (!ChooseDateandTime) {
        seterrorDate(true);
    }
    else if (!ChooseTransportion){
        seterrorTransportion(true);
    }
     else {
        setIsSubmitted(true);
        handlePopOpen();
        handleCloseCloth();
    }
};
const handlePopOpen = () => {
     setPopOpen(true);
};
const handlePopOpenClose = () => {
      setPopOpen(false);
};
const handleDecrement = () => {
    setErrorCont('');
    if (quantity > 1) {
        setErrorCont('');
        setQuantity(prevCount => prevCount - 1);
    } else {
        // Display error message when quantity is already 1
        // You can set an error state here to display the error message
        setQuantity(1);
        setErrorCont("Quantity can not be less than 1");
    }
};
const clearFilters = () => {
    setAgeFilter("");
    setGenderFilter("");
    setSeasonFilter("");
  };
const handleIncrement = () => {
    setErrorCont('');
    const newMaxQuantity = maxQuantity - parseInt(quantityDonated);
    if (quantity<newMaxQuantity){
        setQuantity(prevCount => prevCount + 1);
    }
    else {
        setQuantity(newMaxQuantity);
        setErrorCont(`Quantity can not be greater than ${newMaxQuantity}`);
    }
};
const applyFilters = () => {
    let filtered = initialDataCloth;

    if (ageFilter !== "") {
      filtered = filtered.filter((item) => item.Age === ageFilter);
    }

    if (genderFilter !== "") {
      filtered = filtered.filter((item) => item.Gender === genderFilter);
    }

    if (seasonFilter !== "") {
      filtered = filtered.filter((item) => item.Season === seasonFilter);
    }

    setFilteredData(filtered);
  };
  useEffect(() => {
    applyFilters();
  }, [ageFilter, genderFilter, seasonFilter]);
  const renderFilterPanel = () => {
    return (
      <div >
        <Typography
          variant="h5"
          sx={{ m:1,color: "#fd580b", textAlign: "center", fontWeight: "bold" }}
        >
          Filter
        </Typography> 
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel>Age</InputLabel>
          <Select
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Above 18">Above 18</MenuItem>
            <MenuItem value="12 to 18">12 to 18</MenuItem>
            <MenuItem value="1 to 12">1 to 12</MenuItem>
            {/* Add more age options if needed */}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel>Gender</InputLabel>
          <Select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Man">Man</MenuItem>
            <MenuItem value="Woman">Woman</MenuItem>
            {/* Add more gender options if needed */}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel>Season</InputLabel>
          <Select
            value={seasonFilter}
            onChange={(e) => setSeasonFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Summer">Summer</MenuItem>
            <MenuItem value="Winter">Winter</MenuItem>
            {/* Add more season options if needed */}
          </Select>
        </FormControl>
        <Button sx={{
            borderRadius: "2px",
            marginTop: "7px",
            marginLeft:"110px",
            backgroundColor: "#fd580b",
            color: "white",
            "&:hover": {
              backgroundColor: "#ff6e40",
            },
          }}onClick={clearFilters}>Clear Filters</Button>
      </div>
    );
  };
  return (
    <div> <Navbar/>
    <Grid container spacing={2}>
    {/* Filter panel */}
    <Grid item xs={12} md={3}>
      {renderFilterPanel()}
    </Grid>
    {/* Main content */}
    <Grid item xs={12} md={9}>
      {filteredData.length === 0 ? (
        <img src={NoResultsGIF} alt="No Results" />
      ) : (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Grid container spacing={2} alignItems="center">
      {filteredData.map((cloth) => (
        <Grid item xs={12} sm={6} md={4} key={cloth.id}>
          <Card
            sx={{
              m:1,
              maxWidth: 385,
              alignContent: "center",
              borderRadius: "1rem",
              transition: "box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="140px"
              image={cloth.coverSrc}
              alt="cloth Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cloth.Type}
              </Typography>
              <Typography variant="body2">
                Category: {cloth.category}
              </Typography>

              <Box sx={{ width: 335 }}>
                <Slider
                  aria-label="Always visible"
                  marks={marks}
                  step={1}
                  value={parseInt(cloth.quantitydonated)}
                  valueLabelDisplay="on"
                  valueLabelFormat={(value) =>
                    `${value} ${itemQuantity.replace(
                      /\d+/g,
                      ""
                    )} already donated`
                  }
                  min={0}
                  max={parseInt(cloth.quantity)}
                  onChange={handleChange}
                  disabled
                  sx={{
                    color: "#fd580b",
                    "& .MuiSlider-track": {
                      color: "#fd580b",
                    },
                    "& .MuiSlider-thumb": {
                      color: "#fd580b",
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    onClick={() => setVal(parseInt(cloth.quantitydonated))}
                    sx={{ cursor: "pointer" }}
                  >
                    {MIN}
                  </Typography>
                  <Typography
                    variant="body2"
                    onClick={() => setVal(parseInt(cloth.quantitydonated))}
                    sx={{ cursor: "pointer" }}
                  >
                    {parseFloat(cloth.quantity)}
                    {cloth.quantity.replace(/\d+/g, "")}
                  </Typography>
                </Box>
              </Box>
              <Button
                onClick={() =>
                  handleOpenCloth(
                    "Please add the quantity you would like to donate:",
                    "Donation Process for",
                    cloth.Type,
                    parseFloat(cloth.quantity),
                    cloth.quantity.replace(/S/g, ""),
                    parseInt(cloth.quantitydonated)
                  )
                }
                variant="outlined"
                sx={{
                  borderRadius: "1rem",
                  color: "black",
                  border: "1px solid black",
                  marginRight: "30px",
                  "&:hover": {
                    bgcolor: "#fd580b",
                    color: "white",
                    border: "2px solid #fd580b",
                  },
                }}
              >
                Donate
              </Button>
              <Button
                onClick={() =>
                  handleOpenClothInfo(
                    "Donation Process For",
                    cloth.Type,
                    `Type:`,
                    `Age:`,
                    cloth.Type,
                    cloth.Age,
                    `Gender:`,
                    cloth.Gender,
                    `Season:`,
                    cloth.Season,
                    `Material:`,
                    cloth.Material
                  )
                }
                variant="outlined"
                sx={{
                  borderRadius: "1rem",
                  color: "black",
                  border: "1px solid black",
                  "&:hover": {
                    bgcolor: "#fd580b",
                    color: "white",
                    border: "2px solid #fd580b",
                  },
                }}
              >
                More Information
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
         <Dialog open={openCloth}  fullWidth maxWidth="md">
         <DialogTitle>{dialogTitle}</DialogTitle>
         <DialogContent sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                        <DateTimePicker
                                        slotProps={{
                                            textField:({errorDate})=>({color:errorDate===true?'red':'warning'})
                                        }}
                                            label="Select pickup date and time"
                                            viewRenderers={{
                                                hours: renderTimeViewClock,
                                                minutes: renderTimeViewClock,
                                                seconds: renderTimeViewClock,
                                            }}
                                             onChange={() => {
                                                setChooseDateandTime(true);
                                                  seterrorDate(false); // Set errorDate to false when date and time are selected
                                      }}
                                        />
                                 {errorDate && <Typography variant="caption" color="error">You must choose a date and time</Typography>}
                                        <FormControl fullWidth  color='warning'>
                                            <InputLabel id="demo-simple-select-label">Choose  transportation type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={transportion}
                                                onChange={(event) => {
                                                    setTransportion(event.target.value);
                                                    setChooseTransportion(true);
                                                    seterrorTransportion(false);
                                                }}
                                            >
                                                <MenuItem value="">Select Transportation</MenuItem>
                                                <MenuItem value={10}>Truck</MenuItem>
                                                <MenuItem value={20}>Car</MenuItem>
                                                <MenuItem value={30}>Motorcycle</MenuItem>
                                            </Select>
                                            {errorTransportion && <Typography variant="caption" color="error">You must choose one from the list</Typography>}
                                        </FormControl>
                                    </DemoContainer>
                            <Grid container spacing={1} alignItems="center" >
                                <Grid item><DialogContentText sx={{ marginRight: '16px' }}>{dialogContent}</DialogContentText></Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleDecrement}>-</Button>
                                    </Grid>
                                    <Grid item>
                                        <div sx={{ maxWidth: '20px', minWidth: '20px' }}>{quantity}</div>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleIncrement}>+</Button>
                                    </Grid>
                                    {errorCont && <Typography variant="caption" color="error">{errorCont}</Typography>}

                            </Grid>
                            {<span>Quantity to be donate = {quantity}{itemQuantity.replace(/\d+/g, '')}</span>}
                        </div>   
                        </DialogContent>
                        <DialogActions>
                    <form>
                        <Button sx={{
                                borderRadius: '2px',
                                backgroundColor: '#fd580b',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#ff6e40',
                                }
                            }} variant='contained' onClick={() => {
                                handleSubmit();
                            }}>
                                Submit
                        </Button>
                    </form>
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseCloth();}}> Close</Button>
                        </DialogActions> 
                </DialogActions>
         </Dialog>
         <Dialog open={openClothInfo} fullWidth maxWidth="md">
         <DialogTitle>{dialogTitle}</DialogTitle>
         <DialogContent sx={{display: 'flex', alignItems: 'center', marginRight: '16px'}}>
                        <div>
                        <Typography variant="body1">
                                {TypeCCont}{TypeC}
                            </Typography>
                            <Typography variant="body1">
                                {ageCont}{age}
                            </Typography>
                            <Typography variant="body1">
                                {genderCont}{gender}
                            </Typography>
                            <Typography variant="body1">
                                {'Season:'}{season}
                            </Typography>
                            <Typography variant="body1">
                            {'Material:'}{material}
                            </Typography>
                        </div>
                    </DialogContent>
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseClothInfo();}}> Close</Button>
                        </DialogActions>

            </Dialog>  
            <Dialog
      open={PopOpen}
      fullWidth
      maxWidth="sm"
      classes={{ paper: "custom-dialog" }}
      className="dialog"
    >
      <DialogTitle>Donation Successful!!</DialogTitle>
      <DialogContent>
        <div className="image-container">
          {/* Smaller Image */}
          <img
            src="/images/gif/Done2.gif"
            alt="Image"
            className="popup-image"
          />
          {/* Centered text */}
          <div className="thank-you-text">
            <strong>Thank You for your generous donation!!</strong>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        {/* Close button with orange background and white font color */}
        <Button
          onClick={handlePopOpenClose}
          variant="contained"
          style={{ backgroundColor: "#fd580b", color: "white" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </Grid>
    </LocalizationProvider>
      )}
    </Grid>
    </Grid>
    </div>
  );
};
