import * as React from 'react';
import Card from '@mui/material/Card';
import food from './Images/fooddonation.png';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
//import { LocalizationProvider,DateTimePicker } from '@mui/x-date-pickers';
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { DatePicker} from '@mui/x-date-pickers/DatePicker';
//import { DateTimePicker } from '@mui/x-date-pickers';
//import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
//import { TimeClock } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { Button, Dialog, DialogContent, DialogActions,Stack,TextField,DialogContentText, DialogTitle, Snackbar, Grid, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

export const RequestedNeed = () => {
    const [open, setOpen] = React.useState(false);
    const [dialogContent, setDialogContent] = React.useState('');
    const [dialogTitle, setDialogTitle] = React.useState('');
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarContent, setSnackbarContent] = React.useState('');
    const [transportion, setTransportion] = React.useState('');
    const [showTransportation, setShowTransportation] = React.useState(false); 
    const [error, setError] = React.useState(false); 
    const [value, setValue] = React.useState(null);
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [quantity,setQuantity]=useState(1);
    let maxQuantity=50;
    let quantityDonated=20;
    const handleChange = (event) => {
        setTransportion(event.target.value);
        setError(false); 
    };
    const handleIncrement = () => {
        const newMaxQuantity = maxQuantity - parseInt(quantityDonated);
        setQuantity(prevCount => (prevCount < newMaxQuantity ? prevCount + 1 : newMaxQuantity));
    };
    const handleDecrement = () => {
        setQuantity(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };

    const handleOpen = (content1, content2, showTransportation) => {
        setDialogContent(content1);
        setDialogTitle(content2);
        setOpen(true);
        setShowTransportation(showTransportation); 
        setTransportion('');
        setError(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSnackbarOpen = (content) => {
        setSnackbarContent(content);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleDonate = () => {
        if (!transportion) {
            if (dialogTitle !== 'For Donation Process') {
                setError(true);
                handleClose();
            } else {
                setError(true);
            }
        } else {
            handleSnackbarOpen('Thank you for your donation!');
            handleClose();
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Card sx={{
            maxWidth: 365,
            margin: '250px',
            padding: 2,
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
                image={food}
                alt="food Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <Button onClick={() => handleOpen('Thank you for your donation!', 'For Donation Process', true)} variant='outlined' sx={{
                borderRadius: '1rem',
                color: 'black',
                border: '1px solid black',
                '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
            }}>Donate</Button>
            <Button onClick={() => handleOpen('Here is the content details!', 'Asking for more details', false)} variant='outlined' sx={{
                borderRadius: '1rem',
                color: 'black',
                border: '1px solid black',
                marginLeft: '120px',
                '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
            }} >more details</Button>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{dialogContent}</DialogContentText>
                    {showTransportation && (
                        <div>
                            <Grid container spacing={1}>
                                <Grid item>
                                <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                    <DateTimePicker  error={error}
                                    label="Select pickup date and time"
                                    viewRenderers={{
                                        hours: renderTimeViewClock,
                                        minutes: renderTimeViewClock,
                                        seconds: renderTimeViewClock,
                                    }}
                                    />
                                     <FormControl fullWidth error={error} sx={{ width: '100%', mt: 1 }}> 
                                        <InputLabel id="demo-simple-select-label">Choose  transportation type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={transportion}
                                            onChange={handleChange}>
                                            <MenuItem value="">Select Transportation</MenuItem>
                                            <MenuItem value={10}>Truck</MenuItem>
                                            <MenuItem value={20}>Car</MenuItem>
                                            <MenuItem value={30}>Motorcycle</MenuItem>
                                        </Select>
                                        {error && <Typography variant="caption" color="error">You must choose one from the list</Typography>} {/* Display error message */}
                                    </FormControl>  
                                </DemoContainer>
                                </Grid>
                            </Grid>
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                <Button variant="contained" onClick={handleDonate} >
                            {dialogTitle === 'For Donation Process' ? 'Submit' : 'Close'}
                        </Button>                       
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={snackbarContent}
            />
        </Card>
        </LocalizationProvider>
    );
}
