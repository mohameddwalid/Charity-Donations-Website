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
import './styles.css';
import ImagePopup from "../../common/ImagePopup";

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
            <strong>Organization Name:</strong> {data.orgname}
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
            <strong>Age:</strong> {data.age}
          </Typography>
          <Typography>
            <strong>Gender:</strong> {data.gender}
          </Typography>
          <Typography>
            <strong>Weight:</strong> {data.weight}
          </Typography>
          <Typography>
            <strong>Medical Specialization:</strong> {data.medicalspec}
          </Typography>
          <Typography>
            <strong>Description:</strong> {data.description}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          className="close-button"
        >
          Close
        </Button>{" "}
        {/* Style Close button */}
      </DialogActions>
    </Dialog>
  );
};

const MedicalappCard = ({ Med }) => {
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);

  const handleDetailsClick = () => {
    setShowDetailsPopup(true);
  };

  const handleFulfillClick = () => {
    setShowImagePopup(true); // Set the state to show the image popup
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={Med.id}className="MedicalappCard">
      <Card
        sx={{
          maxWidth: 385,
          padding: "0px",
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
          height="140"
          image={Med.coverSrc}
          alt="medical Image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <strong>{Med.title}</strong>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1rem" }}>
            <strong>Organization Name:</strong> {Med.orgname}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1rem" }}>
            <strong>Governorate:</strong> {Med.type}
          </Typography>
          <Typography
            variant="body2"
            style={{ marginBottom: "5px", fontSize: "1rem" }}
          >
            <strong>Area:</strong>
            {Med.use}
          </Typography>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <Button
              onClick={handleFulfillClick}
              variant="outlined"
              className="fulfill-button"
            >
              Fulfill
            </Button>{" "}
            {/* Fulfill button */}
            <Button
              onClick={handleDetailsClick}
              variant="outlined"
              className="details-button"
            >
              More Details
            </Button>{" "}
            {/* More Details button */}
          </div>
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
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MedicalappCard;