import React, { useState } from "react";
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
import ImagePopup from "../ImagePopup"; // Import the ImagePopup component

const Trackpopup = ({ handleClose }) => {
  const [ChooseDateandTime, setChooseDateandTime] = useState(false);
  const [ChooseTransportion, setChooseTransportion] = useState(false);
  const [errorDate, seterrorDate] = useState(false);
  const [transportion, setTransportion] = useState("");
  const [errorTransportion, seterrorTransportion] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState(""); // State to control ImagePopup visibility

  const handleSubmit = () => {
    if (!ChooseDateandTime) {
      seterrorDate(true);
    } else if (!ChooseTransportion) {
      seterrorTransportion(true);
    } else {
      // Show the ImagePopup after successful submission
      setShowImagePopup(true);
    }
  };

  const handleCloseImagePopup = () => {
    setShowImagePopup(false); // Close the ImagePopup completely
    handleClose(); // Close the Trackpopup as well if needed
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={true} fullWidth maxWidth="md" className="Trackpopup">
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent
          sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", marginBottom: "5px" }}
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
              seterrorDate(false);
            }}
          />
          {errorDate && (
            <Typography
              variant="caption"
              color="error"
              className="error-message"
            >
              You must choose a date and time
            </Typography>
          )}
          <FormControl fullWidth color="warning" className="FormControl">
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
              classes={{ root: "Select-root" }} // Apply custom class to Select root
            >
              <MenuItem className="MuiMenu-paper" value="">
                Select Transportation{" "}
              </MenuItem>
              <MenuItem className="MuiMenu-paper" value={10}>
                Truck
              </MenuItem>
              <MenuItem className="MuiMenu-paper" value={20}>
                Car
              </MenuItem>
              <MenuItem className="MuiMenu-paper" value={30}>
                Motorcycle
              </MenuItem>
            </Select>
            {errorTransportion && (
              <Typography variant="caption" color="error">
                You must choose one from the list
              </Typography>
            )}
          </FormControl>
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

      {/* ImagePopup component */}
      {showImagePopup && <ImagePopup handleClose={handleCloseImagePopup} />}
    </LocalizationProvider>
  );
};

export default Trackpopup;
