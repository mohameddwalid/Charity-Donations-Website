import React,{useState,useEffect } from 'react';
import Apple from './Images/Apples.png';
import Carrot from './Images/Carrot.png';
import Banana from './Images/Banana.webp';
import Cucumbers from './Images/cucumbers.webp';
import muffins from './Images/Blueberry muffins.webp';
import Pie from './Images/Pie.jpeg';
import Dounts from './Images/Dounts.jpeg';
import Croissants from './Images/Croissants.png';
import Bread from './Images/Bread.jpeg';
import Chickpeacurry from './Images/Chickpea curry with brown rice.webp';
import Bakedsalmon from './Images/Baked salmon with quinoa and roasted asparagus.png';
import Macaroni from './Images/Macaroni and cheese with broccoli canned.jpeg';
import chickenbreast from './Images/top-view-grilled-chicken-with-vegetables-isolated-on-white-background-free-photo.jpg';
import Potato from './Images/potatoes-box.webp';
import Onion from './Images/onion.webp';
import beans from './Images/beans.jpeg';
import soup from './Images/canned soup.jpg';
import Mango from './Images/mango.jpg';
import Grapes from './Images/Grapes.jpeg';
import Pepper from './Images/coloredpepper.jpg';
import Kiwi from './Images/kiwi.webp';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CardMedia from '@mui/material/CardMedia';
import { TextField, Card,CardContent, Typography, Grid, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Snackbar, InputAdornment, IconButton,Box,Slider, FormControl, InputLabel, Select, MenuItem, colors} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NoResultsGIF from './Images/no-result.gif';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import{Navbar}from "./Navbar";
import '../App.css'


const initialData = [
    { id: 1, name: 'Apple', category: 'Fruit',quantity:'40 KG',quantitydonated:'30',img:Apple },
    { id: 2, name: 'Carrot', category: 'Vegetable',quantity:'25 KG',quantitydonated:'17',img:Carrot },
    { id: 3, name: 'Banana', category: 'Fruit',quantity:'60 KG',quantitydonated:'30',img:Banana },
    { id: 4, name: 'Cucumbers', category: 'Vegetable',quantity:'20 KG',quantitydonated:'12',img:Cucumbers },
    { id: 5, name: 'Grapes', category: 'Fruit',quantity:'84 KG',quantitydonated:'50',img:Grapes },
    { id: 6, name: 'Mango', category: 'Fruit',quantity:'15 KG',quantitydonated:'11',img:Mango },
    { id: 7, name: 'Canned soup', category: 'Canned foods',quantity:'50 Cans',quantitydonated:'30',img:soup },
    { id: 8, name: 'Canned beans', category: 'Canned foods',quantity:'90 Cans',quantitydonated:'57',img:beans },
    { id: 9, name: 'Onion', category: 'Vegetable',quantity:'90 KG',quantitydonated:'80',img:Onion },
    { id: 10, name: 'Potato', category: 'Vegetable',quantity:'55 KG',quantitydonated:'30',img:Potato },
    { id: 11, name: 'Grilled chicken breast with steamed vegetables', category: 'Fresh meals',quantity:'20 meals',quantitydonated:'14',img:chickenbreast },
    { id: 12, name: 'Macaroni and cheese with broccoli canned', category: 'Canned foods',quantity:'5 meals',quantitydonated:'3',img:Macaroni },
    { id: 13, name: 'Baked salmon with quinoa and roasted asparagus', category: 'Fresh meals',quantity:'30 meals',quantitydonated:'15',img:Bakedsalmon },
    { id: 14, name: 'Chickpea curry with brown rice', category: 'Fresh meals',quantity:'60 meals' ,quantitydonated:'50',img:Chickpeacurry},
    { id: 15, name: 'Bread', category: 'Baked goods',quantity:'60 breads' ,quantitydonated:'40',img:Bread},
    { id: 16, name: 'Croissants', category: 'Baked goods',quantity:'55 croissants',quantitydonated:'40',img:Croissants },
    { id: 17, name: 'Dounts', category: 'Baked goods',quantity:'20 dounts' ,quantitydonated:'14',img:Dounts},
    { id: 18, name: 'Pie', category: 'Baked goods',quantity:'7 pies',quantitydonated:'5',img:Pie },
    { id: 19, name: 'Blueberry muffins', category: 'Baked goods',quantity:'30 muffins',quantitydonated:'19',img:muffins },
    { id: 20, name: 'Colored Pepper', category: 'Vegetable',quantity:'30 KG',quantitydonated:'19',img:Pepper },
    { id: 21, name: 'Blueberry muffins', category: 'Fruit',quantity:'60 KG',quantitydonated:'29',img:Kiwi }];
    const MAX = 100;
    const MIN = 0;
export const Requestsoffood = () => {
    const [transportion, setTransportion] = React.useState('');
    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState(initialData);
    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');
    const [PopOpen, setPopOpen] = useState(false);
    const [maxQuantity, setMaxQuantity] = useState(1);
    const [quantityDonated, setQuantityDonated] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [itemQuantity, setItemQuantity] = useState('');
    const [val, setVal] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [finalValueChange, setFinalValueChange] = useState(0);
    const [noResults, setNoResults] = useState(false);
    const [ChooseDateandTime, setChooseDateandTime] = useState(false);    
    const [ChooseTransportion, setChooseTransportion] = useState(false); 
    const[errorDate,seterrorDate]=useState(false); 
    const[errorTransportion,seterrorTransportion]=useState(false); 
    const[errorCont,setErrorCont]=useState('');

    useEffect(() => {
        const filtered = initialData.filter(item =>
            item.category.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredData(filtered);
        setNoResults(filtered.length === 0); // Check if filtered data is empty
    }, [filter]);

        const handleFilterChange = (event) => {
            setFilter(event.target.value);
            const filtered = initialData.filter(item =>
                item.category.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setFilteredData(filtered);
        };
    
        const handleOpen = (content1, content2, itemName, maxQuantity, itemQuantity, quantityDonated) => {
           setChooseDateandTime(false);
           setChooseTransportion(false);
           setTransportion('')
            setDialogTitle(`${content2} ${itemName}`);
            setDialogContent(content1);
            setOpen(true);
            seterrorDate(true);
            seterrorTransportion(true);
            setMaxQuantity(maxQuantity);
            setQuantity(1);
            setItemQuantity(itemQuantity);
            setQuantityDonated(quantityDonated);
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
            { value: 0, label: '' },
            { value: maxQuantity, label: '' },
        ];
    
        return (
            <div><Navbar/>
          <LocalizationProvider dateAdapter={AdapterDayjs}> 
            <div>
                <TextField
                    label="Filter"
                    value={filter}
                    onChange={handleFilterChange}
                    variant="outlined"
                    fullWidth
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
                    placeholder="Enter a food category to filter"
                />
    
                <Grid container spacing={2} justifyContent="center">
                    {filteredData.map(item => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card sx={{ maxWidth: 385, padding: 1, alignContent: 'center', borderRadius: '1rem', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)' } }}>
                                <CardMedia component="img" height="140" image={item.img} alt="food Image" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
                                    <Typography variant="body2" color="">Category: {item.category}</Typography>
                                    
                                    <Box sx={{ width: 350 }}>
                                        <Slider
                                            aria-label="Always visible"
                                            marks={marks}
                                            step={1}
                                            value={parseInt(item.quantitydonated)}
                                            valueLabelDisplay="on"
                                            valueLabelFormat={(value) => `${value} ${itemQuantity.replace(/\d+/g, '')} already donated`}
                                            min={0}
                                            max={parseInt(item.quantity)}
                                            onChange={handleChange}
                                            disabled
                                            sx={{
                                                color: '#fd580b',
                                                '& .MuiSlider-track': { color: '#fd580b' },
                                                '& .MuiSlider-thumb': { color: '#fd580b' },
                                            }}
                                        />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                                            <Typography variant="body2" onClick={() => setVal(parseInt(item.quantitydonated))} sx={{ cursor: 'pointer' }}>{MIN}</Typography>
                                            <Typography variant="body2" onClick={() => setVal(parseInt(item.quantitydonated))} sx={{ cursor: 'pointer' }}>{parseFloat(item.quantity)}{(item.quantity).replace(/\d+/g, '')}</Typography>
                                        </Box>
                                    </Box>
                                    <Button onClick={() => handleOpen('Please add the quantity you would like to donate:', 'Donation Process For', item.name, parseFloat(item.quantity), (item.quantity).replace(/S/g, ''), parseInt(item.quantitydonated))} variant='outlined' sx={{ borderRadius: '1rem', color: 'black', border: '1px solid black', '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' } }}>Donate</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Dialog open={open} fullWidth maxWidth="md">
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
                                <Grid container spacing={1} alignItems="center" marginTop={"2px"}>
                                <Grid item><DialogContentText sx={{ marginRight: '16px' }}>{dialogContent}</DialogContentText></Grid>
                                <Grid item>
                                    <Button variant="contained" sx={{ maxWidth: '15px', minWidth: '15px', borderRadius: '2px', backgroundColor: '#fd580b', color: 'white', '&:hover': { backgroundColor: '#ff6e40' } }} onClick={handleDecrement}>-</Button>
                                </Grid>
                                <Grid item><div sx={{ maxWidth: '20px', minWidth: '20px' }}>{quantity}</div></Grid>
                                <Grid item><Button variant="contained" sx={{ maxWidth: '15px', minWidth: '15px', borderRadius: '2px', backgroundColor: '#fd580b', color: 'white', '&:hover': { backgroundColor: '#ff6e40' } }}
                                 onClick={handleIncrement}>+</Button>
                                 </Grid>
                                 {errorCont && <Typography variant="caption" color="error">{errorCont}</Typography>}
                            </Grid>
                             {<span>Quantity to be donate = {quantity}{itemQuantity.replace(/\d+/g, '')}</span>}
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <form>
                            <Button sx={{ borderRadius: '2px', backgroundColor: '#fd580b', color: 'white', '&:hover': { backgroundColor: '#ff6e40' } }} variant='contained' 
                            
                            onClick={() => { handleSubmit();}}>Submit</Button>
                        </form>
                        <DialogActions>
                            <Button sx={{ borderRadius: '2px', backgroundColor: '#fd580b', color: 'white', '&:hover': { backgroundColor: '#ff6e40' } }} variant='contained' onClick={handleClose}> Close</Button>
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
                <div style={{ display: 'flex', justifyContent: 'center' }}>{noResults && <img src={NoResultsGIF} alt="No Results" style={{ width: '100%', maxWidth: '500px' }} />}</div>
            </div>
            </LocalizationProvider> 
            </div>
        );

       
}

