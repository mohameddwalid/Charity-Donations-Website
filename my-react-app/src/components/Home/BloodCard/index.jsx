import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import "./styles.css"; // Import CSS file

import ImagePopup from "../../common/ImagePopup";

const LocationPopup = ({ image, handleClose }) => {
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      fullWidth
      maxWidth="xl"
      className="loc"
      sx={{ width: "65%", margin: "auto" }}
    >
      <DialogTitle>Location</DialogTitle>
      <DialogContent>
        <img src={image} alt="Location" style={{ width: "100%" }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className="close-button">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const MoreDetailsPopup = ({ data, handleClose }) => {
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="lg"
      sx={{
        width: "60%", // Set custom width using CSS
        margin: "auto", // Center horizontally
      }}
      className="Details"
    >
      <DialogTitle>More Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>
            <strong>Hospital Name:</strong> {data.title}
          </Typography>
          <Typography>
            <strong>Governorate:</strong> {data.type}
          </Typography>
          <Typography>
            <strong>Area:</strong> {data.use}
          </Typography>
          <Typography>
            <strong>Name of Patient:</strong> {data.npatient}
          </Typography>
          <Typography>
            <strong>Address:</strong> {data.address}
          </Typography>
          <Typography>
            <strong>Blood (RH) Type:</strong> {data.blood}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className="close-button">
          Close
        </Button>{" "}
        {/* Style Close button */}
      </DialogActions>
    </Dialog>
  );
};

const BloodCard = ({ Med }) => {
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);

  const handleDetailsClick = () => {
    setShowDetailsPopup(true);
  };

  const handleLocationClick = () => {
    setShowLocationPopup(true);
  };

  const handleFulfillClick = () => {
    setShowImagePopup(true); // Set the state to show the image popup
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={Med.id} className="BloodCard">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={Med.coverSrc}
          alt="medical Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <strong>{Med.title}</strong>
          </Typography>
          <Typography variant="body2" style={{ fontSize: "1rem" }}>
            <strong>Governorate:</strong> {Med.type}
          </Typography>
          <Typography
            variant="body2"
            style={{ marginBottom: "10px", fontSize: "1rem" }}
          >
            <strong>Area:</strong> {Med.use}
          </Typography>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <Button
              onClick={handleFulfillClick}
              variant="outlined"
              className="fulfill-button"
            >
              Donate
            </Button>{" "}
            {/* Fulfill button */}
            <Button
              onClick={handleDetailsClick}
              variant="outlined"
              className="details-button"
            >
              View Details
            </Button>{" "}
            {/* View Details button */}
            <Button
              onClick={handleLocationClick}
              variant="outlined"
              className="location-button"
            >
              View Location
            </Button>{" "}
            {/* View Location button */}
          </div>
        </CardContent>
      </Card>
      {/* Render ImagePopup based on showImagePopup state */}
      {showImagePopup && (
        <ImagePopup handleClose={() => setShowImagePopup(false)} />
      )}
      {showDetailsPopup && (
        <MoreDetailsPopup
          data={Med}
          handleClose={() => setShowDetailsPopup(false)}
        />
      )}
      {showLocationPopup && (
        <LocationPopup
          image={Med.location}
          handleClose={() => setShowLocationPopup(false)}
        />
      )}
    </Grid>
  );
};

export default BloodCard;