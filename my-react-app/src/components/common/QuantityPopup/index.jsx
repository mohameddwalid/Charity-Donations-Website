import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import {
  Dialog,
  Select,
  MenuItem,
  InputLabel,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  FormControl,
  Button,
  Grid,
} from "@mui/material";
import "./styles.css";

const QuantityPopup = ({ handleClose, handleQuantitySubmit, handleImagePopup }) => {
  const [quantity, setQuantity] = useState(0);
  const [errorCont, setErrorCont] = useState("");
  const [maxQuantity, setMaxQuantitty] = useState(21);
  const [quantityDonated, setQuantittyDonated] = useState(1);
  const [ChooseDateandTime, setChooseDateandTime] = useState(false);
  const [ChooseTransportion, setChooseTransportion] = useState(false);
  const [errorDate, seterrorDate] = useState(false);
  const [transportion, setTransportion] = useState("");
  const [errorTransportion, seterrorTransportion] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = () => {
    if (!ChooseDateandTime) {
      seterrorDate(true);
    } else if (!ChooseTransportion) {
      seterrorTransportion(true);
    } else {
      setIsSubmitted(true);
      handleImagePopup(); // Trigger the ImagePopup component
      handleClose();
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={true} fullWidth maxWidth="md" className="QuantityPopup">
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent
          sx={{ display: "flex", alignItems: "center", marginRight: "16px" }}
        >
          <div sx={{ display: "flex", alignItems: "center" }}>
            <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
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
                  seterrorDate(false);
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
                  MenuProps={{ PaperProps: { style: { maxHeight: "200px" } } }} // Limit height of the menu
                >
                  <MenuItem className="MuiMenu-paper" value="">Select Transportation </MenuItem>
                  <MenuItem className="MuiMenu-paper" value={10}>Truck</MenuItem>
                  <MenuItem className="MuiMenu-paper" value={20}>Car</MenuItem>
                  <MenuItem className="MuiMenu-paper" value={30}>Motorcycle</MenuItem>
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
                  className="decrement-button"
                  variant="contained"
                  onClick={handleDecrement}
                >
                  -
                </Button>
              </Grid>
              <Grid item>
                <div className="quantity-display">{quantity}</div>
              </Grid>
              <Grid item>
                <Button
                  className="increment-button"
                  variant="contained"
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
            <span>
              <strong>Quantity to be donated =</strong> {quantity}
            </span>
          </div>
        </DialogContent>
        <DialogActions>
          <form>
            <Button
              className="submit-button"
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
              className="close-button"
              variant="contained"
              onClick={() => {
                handleClose();
              }}
            >
              Close
            </Button>
          </DialogActions>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

export default QuantityPopup;