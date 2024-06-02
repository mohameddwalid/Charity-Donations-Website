import React, { useState,useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { TextField, Card,CardContent, Typography, Grid, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Snackbar, InputAdornment, IconButton,Box,Slider,FormControl, InputLabel, Select, MenuItem,colors} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Pens from './Images/pens.webp';
import notebook from './Images/notebook1.jpg';
import pencils from './Images/pencils.jpeg';
import calculator from './Images/calculator.webp';
import Glue from './Images/gluestick.jpg';
import GermanBook from './Images/Germanbook.png';
import FrenchBook from './Images/frenchbook.jpg';
import EnglishBook from './Images/englishbook.png';
import SchoolBags from './Images/schoolbags.jpeg';
import NoResultsGIF from './Images/no-result.gif';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import{Navbar}from "./Navbar";

const MAX = 100;
const MIN = 0;
const initialDataBooks = [
    { id: 1, name: "The Boy Who Harnessed the Wind", category: 'Books', Author:"William Kamkwamba and Bryan Mealer", quantity: '80 books', quantitydonated: 40, Language: 'English', Edition: 'Young Readers Edition (2015)', Summary:'Tells the inspiring true story of William Kamkwamba, a young Malawian boy who built a windmill to bring electricity to his village. ',img:EnglishBook },
    { id: 2, name: 'Le Petit Prince', category: 'Books', Author: 'Antoine de Saint-Exupéry', Language: 'French', quantity: '30 books', quantitydonated: 15, Edition: 'Various editions available', Summary: 'A beloved novel that tells the story of a young prince who travels from planet to planet, meeting various inhabitants and learning valuable life lessons along the way.',img:FrenchBook },
    { id: 3, name: 'Die Macht der Geographie', category: 'Books', Author: 'Tim Marshall', Language: 'German', Edition: '1st Edition (2016)', quantity: '70 books', quantitydonated: 20, Summary: 'Delves into the geopolitical significance of geography, using ten maps to illustrate key global dynamics.',img:GermanBook },
];
const initialDataStationery = [
    { id: 1, name: 'Pens',category:'Stationery', quantity: '100 Pens', quantitydonated: '50',img:Pens },
    { id: 2, name: 'Pencils',category:'Stationery', quantity: '150 Pencils', quantitydonated: '70',img:pencils },
    { id: 3, name: 'Notebooks',category:'Stationery', quantity: '70 Notebooks', quantitydonated: '40',img:notebook },
    { id: 4, name: 'Calculator',category:'Stationery', quantity: '70 Calculators', quantitydonated: '50',img:calculator },
    { id: 5, name: 'Glue Stick',category:'Stationery', quantity: '90 Glue sticks', quantitydonated: '75',img:Glue },
    { id: 6, name: 'School Bags',category:'Stationery', quantity: '110 Bags', quantitydonated: '75',img:SchoolBags }

];

export const RequestsofSchoolsupplies = () => {
    const [filter, setFilter] = useState('');
    const [filteredDataBooks, setFilteredDataBooks] = useState(initialDataBooks);
    const [filteredDataStationery, setFilteredDataStationery] = useState(initialDataStationery);
    const [open, setOpen] = useState(false);
    const[openInfo,setOpenInfo]=useState(false);
    const [dialogContent, setDialogContent] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');
    const [PopOpen, setPopOpen] = useState(false);
    const [maxQuantity, setMaxQuantity] = useState(1);
    const [quantityDonated, setQuantityDonated] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [itemQuantity, setItemQuantity] = useState('');
    const [Lang, setLang] = useState('');
    const [Author, setAuthor] = useState('');
    const [Edition, setEdition] = useState('');
    const [Summaryy, setSummaryy] = useState('');
    const [langCont, setlangCont] = useState('');
    const [AuthorCont, setAuthorCont] = useState('');
    const [EditionCont, setEditionCont] = useState('');
    const [SummaryCont, setSummaryCont] = useState('');
    const [val, setVal] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [finalValueChange, setFinalValueChange] = useState(0);
    const [noResults, setNoResults] = useState(false);
    const [ChooseDateandTime, setChooseDateandTime] = useState(false);    
    const [ChooseTransportion, setChooseTransportion] = useState(false); 
    const[errorDate,seterrorDate]=useState(false); 
    const[errorTransportion,seterrorTransportion]=useState(false);
    const [transportion, setTransportion] = React.useState('');
    const[errorCont,setErrorCont]=useState('');
    const handleFilterChange = (event) => {
        setFilter(event.target.value);

        const filteredBooks = initialDataBooks.filter(item =>
            item.category.toLowerCase().includes(event.target.value.toLowerCase()) 
        );
        setFilteredDataBooks(filteredBooks);

        const filteredStationery = initialDataStationery.filter(item =>
            item.category.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredDataStationery(filteredStationery);
    };
    const handleOpen = (content1, content2, itemName, maxQuantity, itemQuantity, quantityDonated) => {
        setChooseDateandTime(false);
        setChooseTransportion(false);
        setTransportion('');
        seterrorDate(true);
        seterrorTransportion(true);
        setDialogTitle(`${content2} ${itemName}`);
        setDialogContent(content1);
        setOpen(true);
        setMaxQuantity(maxQuantity);
        setQuantity(1);
        setItemQuantity(itemQuantity);
        setQuantityDonated(quantityDonated);

    };
    const handleOpenInfo=(languageCont,editionCont,summaryCont,authorCont,content1,content2,itemName,language,author,edition,summary)=>{
        setOpenInfo(true);
        setDialogTitle(`${content2} ${itemName}`);
        setDialogContent(content1);
        setAuthor(author);
        setEdition(edition);
        setLang(language);
        setSummaryy(summary);
        setSummaryCont(summaryCont);
        setEditionCont(editionCont);
        setAuthorCont(authorCont);
        setlangCont(languageCont);

    }
    const handleCloseInfo = () => {
        setOpenInfo(false);
    };
    const handleClose = () => {
        setOpen(false);
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
            handlePopupOpen();
            handleClose();
        }
    };

    const handlePopupOpen = () => {
        setPopOpen(true);
    };

    const handlePopupClose = () => {
        setPopOpen(false);
    };

    const handleChange = () => {
        handleFinalValueChange();
    };

    const handleFinalValueChange = () => {
        if (isSubmitted) {
            setFinalValueChange(quantityDonated + quantity);
        } else {
            setFinalValueChange(quantityDonated);
        }
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

    const marks = [
        { value: MIN, label: '' },
        { value: MAX, label: '' },
    ];
    useEffect(() => {
        if (filteredDataBooks.length === 0 && filteredDataStationery.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [filteredDataBooks, filteredDataStationery]);
    return (
        <div><Navbar/>
        <LocalizationProvider dateAdapter={AdapterDayjs}> 
        <div >
            <TextField
                label="Filter"
                value={filter}
                onChange={handleFilterChange}
                variant="outlined"
                color='warning'
                margin="normal"
                style={{ width: '25%', borderRadius: '20px' }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                placeholder="Enter either books or stationery to filter"
            />

            <Grid container spacing={2} justifyContent="center">
                {filteredDataBooks.map(book => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                        <Card sx={{
                            maxWidth: 385,
                            padding: 1,
                            alignContent: 'center',
                            borderRadius: '1rem',
                            transition: 'box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                            }
                        }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={book.img}
                                alt="Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {book.name}
                                </Typography>
                                <Typography variant="body2">
                                    Category: {book.category}
                                </Typography>
                                <Box sx={{ width: 350 }}>
                                    <Slider
                                        aria-label="Always visible"
                                        marks={marks}
                                        step={1}
                                        value={parseInt(book.quantitydonated)}
                                        valueLabelDisplay="on"
                                        valueLabelFormat={(value) => `${value} ${itemQuantity.replace(/\d+/g, '')} already donated`}
                                        min={0}
                                        max={parseInt(book.quantity)}
                                        onChange={handleChange}
                                        disabled
                                        sx={{
                                            color: '#fd580b',
                                            '& .MuiSlider-track': {
                                                color: '#fd580b',
                                            },
                                            '& .MuiSlider-thumb': {
                                                color: '#fd580b',
                                            },
                                        }}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                                        <Typography
                                            variant="body2"
                                            onClick={() => setVal(parseInt(book.quantitydonated))}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            {MIN}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            onClick={() => setVal(parseInt(book.quantitydonated))}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            {parseFloat(book.quantity)}{(book.quantity).replace(/\d+/g, '')}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Button onClick={() => handleOpen('Please add the quantity you would like to donate:',
                                    'For Donation Process', book.name, parseFloat(book.quantity),
                                    (book.quantity).replace(/S/g, ''), parseInt(book.quantitydonated))} variant='outlined' sx={{
                                        borderRadius: '1rem',
                                        color: '#fd580b',
                                        margin:'1.5rem',
                                        border: '1px solid black',
                                        '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                                    }}>Donate</Button>
                                <Button onClick={() => handleOpenInfo(`Language:`, `Edition:` ,`Summary:`,`Author:`, 'Donation Process For','Donation Process for', book.name,book.Language,book.Author,book.Edition,book.Summary)} variant='outlined' sx={{
                                borderRadius: '1rem',
                                color: '#fd580b',
                                border: '1px solid black',
                                '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                            }}>More Information</Button>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <Dialog open={openInfo} fullWidth maxWidth="md">
                    <DialogTitle>{dialogTitle}</DialogTitle>
                        <DialogContent sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                        <div>
                            <Typography variant="body1">
                                {langCont}{Lang}
                            </Typography>
                            <Typography variant="body1">
                                {AuthorCont}{Author}
                            </Typography>
                            <Typography variant="body1">
                            {SummaryCont}{Summaryy}
                            </Typography>
                            <Typography variant="body1">
                                {EditionCont}{Edition}
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
                            }}variant='contained' onClick={() => {handleCloseInfo();}}> Close</Button>
                        </DialogActions>
                 </Dialog>    
                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
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
                            }}variant='contained' onClick={() => {handleClose();}}> Close</Button>
                        </DialogActions>
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
                {filteredDataStationery.map(stationery => (
                    <Grid item xs={12} sm={6} md={4} key={stationery.id}>
                        <Card sx={{
                            maxWidth: 385,
                            padding: 1,
                            alignContent: 'center',
                            borderRadius: '1rem',
                            transition: 'box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                            }
                        }}>
                        <CardMedia
                                component="img"
                                height="140"
                                image={stationery.img}
                                alt="food Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {stationery.name}
                                </Typography>
                                <Typography variant="body2">
                                    Category: {stationery.category}
                                </Typography>
                                <Box sx={{ width: 350 }}>
                                <Slider
                                        aria-label="Always visible"
                                        marks={marks}
                                        step={1}
                                        value={parseInt(stationery.quantitydonated)}
                                        valueLabelDisplay="on"
                                        valueLabelFormat={(value) => `${value} ${itemQuantity.replace(/\d+/g, '')} already donated`}
                                        min={0}
                                        max={parseInt(stationery.quantity)}
                                        onChange={handleChange}
                                        disabled
                                        sx={{
                                            color: '#fd580b',
                                            '& .MuiSlider-track': {
                                                color: '#fd580b',
                                            },
                                            '& .MuiSlider-thumb': {
                                                color: '#fd580b',
                                            },
                                        }}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                                        <Typography
                                                variant="body2"
                                                onClick={() => setVal(parseInt(stationery.quantitydonated))}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                {MIN}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                onClick={() => setVal(parseInt(stationery.quantitydonated))}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                {parseFloat(stationery.quantity)}{(stationery.quantity).replace(/\d+/g, '')}
                                            </Typography>
                                    </Box>
                                </Box>
                                <Button onClick={() => handleOpen('Please add the quantity you would like to donate:',
                                    'For Donation Process', stationery.name, parseFloat(stationery.quantity),
                                    (stationery.quantity).replace(/S/g, ''), parseInt(stationery.quantitydonated))} variant='outlined' sx={{
                                        borderRadius: '1rem',
                                        color: '#fd580b',
                                        border: '1px solid black',
                                        '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                                    }}>Donate</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Dialog open={open}  fullWidth maxWidth="md">
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
                            }}variant='contained' onClick={() => {handleClose();}}> Close</Button>
                        </DialogActions> 
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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            {noResults && <img src={NoResultsGIF} alt="No Results"style={{ width: '100%', maxWidth: '500px' }} />}            
            </div>
        </div>
        </LocalizationProvider> 
        </div>
    );
};
