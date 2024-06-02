import React, { useState, useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import NoResultsGIF from "./Images/no-result.gif";
import CardMedia from "@mui/material/CardMedia";
import Barbie2 from "./Images/Barbie2.jpg";
import CAR from "./Images/CAR.jpg";
import Chess from "./Images/chess.jpg";
import Football from "./Images/Football.jpg";
import girlbaby from "./Images/girlbaby.jpg";
import boybaby from "./Images/boybaby.jpg";
import electriCar from "./Images/electriCar.jpg";
import bowling from "./Images/bowling.jpg";
import Soccorball from "./Images/Soccorball.jpg";
import trampoline from "./Images/trampoline.jpg";
import{Navbar}from "./Navbar";

import stuffedtoy from "./Images/stuffedtoy.jpg";

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
export const initialDataToys = [
  {
    id: 1,
    Type: "Barbie",
    Gender: "Girl",
    category: "Toys",
    subcategory: "dolls",
    Age: "1 to 4",
    quantity: "10 Toys",
    quantitydonated: "5",
    coverSrc: Barbie2,
  },
  {
    id: 2,
    Type: "Remote Contol car",
    Gender: "Boy",
    subcategory: "Cars",
    Age: "4 to 8",
    quantity: "5 Toys",
    category: "Toys",
    coverSrc: CAR,
    quantitydonated: "3",
  },
  {
    id: 3,
    Type: "Chess",
    Gender: "Both",
    subcategory: "Board Games",
    category: "Toys",
    Age: "8 to 12",
    quantity: "3 Toys",
    coverSrc: Chess,
    quantitydonated: "2",
  },
  {
    id: 4,
    Type: "Football",
    Gender: "Boy",
    subcategory: "Sports",
    category: "Toys",
    Age: "12 to 16",
    quantity: "15 Toys",
    coverSrc: Football,
    quantitydonated: "10",
  },
  {
    id: 5,
    Type: "Baby doll",
    Gender: "Girl",
    subcategory: "Dolls",
    category: "Toys",
    Age: "1 to 4",
    quantity: "8 Toys",
    coverSrc: girlbaby,
    quantitydonated: "4",
  },
  {
    id: 6,
    Type: "Baby doll",
    Gender: "Boy",
    subcategory: "Dolls",
    category: "Toys",
    Age: "1 to 4",
    quantity: "10 Toys",
    coverSrc: boybaby,
    quantitydonated: "7",
  },
  {
    id: 7,
    Type: "Electric Car ",
    Gender: "Boy",
    subcategory: "Cars",
    category: "Toys",
    Age: "12 to 16",
    quantity: "9 Toys",
    coverSrc: electriCar,
    quantitydonated: "7",
  },
  {
    id: 8,
    Type: "Bowling Game",
    Gender: "Both",
    subcategory: "Outdoor",
    category: "Toys",
    Age: "8 to 12",
    quantity: "4 Toys",
    coverSrc: bowling,
    quantitydonated: "2",
  },
  {
    id: 9,
    Type: "Bear",
    Gender: "Girl",
    subcategory: "Stuffed toys",
    category: "Toys",
    Age: "12 to 16",
    quantity: "4 Toys",
    coverSrc: stuffedtoy,
    quantitydonated: "2",
  },
  {
    id: 10,
    Type: "Soccor Ball",
    Gender: "Boy",
    subcategory: "Sports",
    category: "Toys",
    Age: "12 to 16",
    quantity: "10 Toys",
    coverSrc: Soccorball,
    quantitydonated: "7",
  },

  {
    id: 11,
    Type: "Trampoline",
    Gender: "Both",
    subcategory: "Outdoor",
    category: "Toys",
    Age: "12 to 16",
    quantity: "6 Toys",
    coverSrc: trampoline,
    quantitydonated: "4",
  },
  {
    id: 12,
    Type: "Bear",
    Gender: "Girl",
    subcategory: "Stuffed toys",
    category: "Toys",
    Age: "12 to 16",
    quantity: "20 Toys",
    coverSrc: stuffedtoy,
    quantitydonated: "17",
  },
];
const MAX = 100;
const MIN = 0;
export const RequestsofToys = () => {
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [transportion, setTransportion] = React.useState("");
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(initialDataToys);
  const [openToy, setopenToy] = useState(false);
  const [openToyInfo, setopenToyInfo] = useState(false);
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
  const [TypeCCont, setTypeCCont] = useState("");
  const [TypeC, setTypeC] = useState("");
  const [ageCont, setageCont] = useState("");
  const [age, setage] = useState("");
  const [genderCont, setgenderCont] = useState("");
  const [gender, setgender] = useState("");
  const [categoryCont, setcategoryCont] = useState("");
  const [category, setcategory] = useState("");
  const [error, setError] = React.useState(false);

  const marks = [
    { value: MIN, label: "" },
    { value: MAX, label: "" },
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
  };
  const handleOpenToy = (
    content1,
    content2,
    itemName,
    maxQuantity,
    itemQuantity,
    quantityDonated
  ) => {
    setDialogTitle(`${content2} ${itemName}`);
    setDialogContent(content1);
    setopenToy(true);
    seterrorDate(true);
    seterrorTransportion(true);
    setChooseDateandTime(false);
    setChooseTransportion(false);
    setTransportion("");
    setMaxQuantity(maxQuantity);
    setQuantity(1);
    setItemQuantity(itemQuantity);
    setQuantityDonated(quantityDonated);
  };
  const handleOpenToyInfo = (
    content2,
    Title,
    typecont,
    ageCont,
    type,
    age,
    genderCont,
    gender,
    categoryCont,
    category
  ) => {
    setopenToyInfo(true);
    setTypeC(type);
    setTypeCCont(typecont);
    setage(age);
    setageCont(ageCont);
    setgender(gender);
    setgenderCont(genderCont);
    setcategoryCont(categoryCont);
    setcategory(category);

    setDialogContent(`${content2} ${Title}`);
    setDialogTitle(`${content2} ${Title}`);
  };
  const handleCloseToy = () => {
    setopenToy(false);
  };
  const handleCloseToyInfo = () => {
    setopenToyInfo(false);
  };
  const handleSubmit = () => {
    if (!ChooseDateandTime) {
      seterrorDate(true);
    } else if (!ChooseTransportion) {
      seterrorTransportion(true);
    } else {
      setIsSubmitted(true);
      handlePopupOpen();
      handleCloseToy();
    }
  };
  const handlePopupOpen = () => {
    setPopOpen(true);
  };
  const handlePopupClose = () => {
    setPopOpen(false);
  };
  const handleDecrement = () => {
    setErrorCont("");
    if (quantity > 1) {
      setErrorCont("");
      setQuantity((prevCount) => prevCount - 1);
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
    setCategoryFilter("");
  };
  const handleIncrement = () => {
    setErrorCont("");
    const newMaxQuantity = maxQuantity - parseInt(quantityDonated);
    if (quantity < newMaxQuantity) {
      setQuantity((prevCount) => prevCount + 1);
    } else {
      setQuantity(newMaxQuantity);
      setErrorCont(`Quantity can not be greater than ${newMaxQuantity}`);
    }
  };
  const applyFilters = () => {
    let filtered = initialDataToys;

    if (ageFilter !== "") {
      filtered = filtered.filter((item) => item.Age === ageFilter);
    }

    if (genderFilter !== "") {
      filtered = filtered.filter((item) => item.Gender === genderFilter);
    }

    if (categoryFilter !== "") {
      filtered = filtered.filter((item) => item.subcategory === categoryFilter);
    }

    setFilteredData(filtered);
  };
  useEffect(() => {
    applyFilters();
  }, [ageFilter, genderFilter, categoryFilter]);
  
  return (
    <div><Navbar/>
    <Grid container spacing={2}>
      {/* Filter panel */}
      <Grid item xs={12} md={3}>
      <div>
        <Typography
          variant="h5"
          sx={{ color: "#fd580b", textAlign: "center", fontWeight: "bold" }}
        >
          Filter
        </Typography>
        <FormControl fullWidth sx={{ m: 2 }}>
          <InputLabel>Age</InputLabel>
          <Select
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="1 to 4">1 to 4</MenuItem>
            <MenuItem value="4 to 8">4 to 8</MenuItem>
            <MenuItem value="8 to 12">8 to 12</MenuItem>
            <MenuItem value="12 to 16">12 to 16</MenuItem>
            {/* Add more age options if needed */}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 2 }}>
          <InputLabel>Gender</InputLabel>
          <Select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Boy">Boy</MenuItem>
            <MenuItem value="Girl">Girl</MenuItem>
            <MenuItem value="Both">Both</MenuItem>
            {/* Add more gender options if needed */}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="dolls">Dolls</MenuItem>
            <MenuItem value="Cars">Cars</MenuItem>
            <MenuItem value="Board Games">Board Games</MenuItem>
            <MenuItem value="Sports">Sports</MenuItem>
            <MenuItem value="Outdoor">Outdoor</MenuItem>
            <MenuItem value="Stuffed toys">Stuffed toys</MenuItem>
            {/* Add more season options if needed */}
          </Select>
        </FormControl>
        <Button
          sx={{
            borderRadius: "2px",
            marginTop: "7px",
            marginLeft:"110px",
            backgroundColor: "#fd580b",
            color: "white",
            "&:hover": {
              backgroundColor: "#ff6e40",
            },
          }}
          onClick={clearFilters}
        >
          Clear Filters
        </Button>
      </div>
      </Grid>
      {/* Main content */}
      <Grid item xs={12} md={9}>
        {filteredData.length === 0 ? (
          <img src={NoResultsGIF} alt="No Results" />
        ) : (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2} alignItems="center">
              {filteredData.map((toy) => (
                <Grid item xs={12} sm={6} md={4} key={toy.id}>
                  <Card
                    sx={{
                      maxWidth: 385,
                      padding: 1,
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
                      image={toy.coverSrc}
                      //style={{ objectFit: 'cover' }}
                      alt="Toy Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {toy.Type}
                      </Typography>
                      <Typography variant="body2">
                        Category: {toy.category}
                      </Typography>

                      <Box sx={{ width: 335 }}>
                        <Slider
                          aria-label="Always visible"
                          marks={marks}
                          step={1}
                          value={parseInt(toy.quantitydonated)}
                          valueLabelDisplay="on"
                          valueLabelFormat={(value) =>
                            `${value} ${itemQuantity.replace(
                              /\d+/g,
                              ""
                            )} already donated`
                          }
                          min={0}
                          max={parseInt(toy.quantity)}
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
                            onClick={() =>
                              setVal(parseInt(toy.quantitydonated))
                            }
                            sx={{ cursor: "pointer" }}
                          >
                            {MIN}
                          </Typography>
                          <Typography
                            variant="body2"
                            onClick={() =>
                              setVal(parseInt(toy.quantitydonated))
                            }
                            sx={{ cursor: "pointer" }}
                          >
                            {parseFloat(toy.quantity)}
                            {toy.quantity.replace(/\d+/g, "")}
                          </Typography>
                        </Box>
                      </Box>
                      <Button
                        onClick={() =>
                          handleOpenToy(
                            "Please add the quantity you would like to donate:",
                            "Donation Process for",
                            toy.Type,
                            parseFloat(toy.quantity),
                            toy.quantity.replace(/S/g, ""),
                            parseInt(toy.quantitydonated)
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
                          handleOpenToyInfo(
                            "Donation Process For",
                            toy.Type,
                            `Type:`,
                            `Age:`,
                            toy.Type,
                            toy.Age,
                            `Gender:`,
                            toy.Gender,
                            `Category:`,
                            toy.subcategory
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
              <Dialog open={openToy} fullWidth maxWidth="md">
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "16px",
                  }}
                >
                  <div sx={{ display: "flex", alignItems: "center" }}>
                    <DemoContainer
                      components={["DateTimePicker", "DateTimePicker"]}
                    >
                      <DateTimePicker
                        slotProps={{
                          textField: ({ errorDate }) => ({
                            color: errorDate === true ? "red" : "warning",
                          }),
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
                      {errorDate && (
                        <Typography variant="caption" color="error">
                          You must choose a date and time
                        </Typography>
                      )}
                      <FormControl fullWidth color="warning">
                        <InputLabel id="demo-simple-select-label">
                          Choose transportation type
                        </InputLabel>
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
                        {errorTransportion && (
                          <Typography variant="caption" color="error">
                            You must choose one from the list
                          </Typography>
                        )}
                      </FormControl>
                    </DemoContainer>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <DialogContentText sx={{ marginRight: "16px" }}>
                          {dialogContent}
                        </DialogContentText>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          sx={{
                            maxWidth: "15px",
                            minWidth: "15px",
                            borderRadius: "2px",
                            backgroundColor: "#fd580b",
                            color: "white",
                            "&:hover": {
                              backgroundColor: "#ff6e40",
                            },
                          }}
                          onClick={handleDecrement}
                        >
                          -
                        </Button>
                      </Grid>
                      <Grid item>
                        <div sx={{ maxWidth: "20px", minWidth: "20px" }}>
                          {quantity}
                        </div>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          sx={{
                            maxWidth: "15px",
                            minWidth: "15px",
                            borderRadius: "2px",
                            backgroundColor: "#fd580b",
                            color: "white",
                            "&:hover": {
                              backgroundColor: "#ff6e40",
                            },
                          }}
                          onClick={handleIncrement}
                        >
                          +
                        </Button>
                      </Grid>
                      {errorCont && (
                        <Typography variant="caption" color="error">
                          {errorCont}
                        </Typography>
                      )}
                    </Grid>
                    {
                      <span>
                        Quantity to be donate = {quantity}
                        {itemQuantity.replace(/\d+/g, "")}
                      </span>
                    }
                  </div>
                </DialogContent>
                <DialogActions>
                  <form>
                    <Button
                      sx={{
                        borderRadius: "2px",
                        backgroundColor: "#fd580b",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#ff6e40",
                        },
                      }}
                      variant="contained"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Submit
                    </Button>
                  </form>
                  <DialogActions>
                    <Button
                      sx={{
                        borderRadius: "2px",
                        backgroundColor: "#fd580b",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#ff6e40",
                        },
                      }}
                      variant="contained"
                      onClick={() => {
                        handleCloseToy();
                      }}
                    >
                      {" "}
                      Close
                    </Button>
                  </DialogActions>
                </DialogActions>
              </Dialog>
              <Dialog open={openToyInfo} fullWidth maxWidth="md">
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "16px",
                  }}
                >
                  <div>
                    <Typography variant="body1">
                      {TypeCCont}
                      {TypeC}
                    </Typography>
                    <Typography variant="body1">
                      {ageCont}
                      {age}
                    </Typography>
                    <Typography variant="body1">
                      {genderCont}
                      {gender}
                    </Typography>
                    <Typography variant="body1">
                      {"Category:"}
                      {category}
                    </Typography>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button
                    sx={{
                      borderRadius: "2px",
                      backgroundColor: "#fd580b",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#ff6e40",
                      },
                    }}
                    variant="contained"
                    onClick={() => {
                      handleCloseToyInfo();
                    }}
                  >
                    {" "}
                    Close
                  </Button>
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
          onClick={handlePopupClose}
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
