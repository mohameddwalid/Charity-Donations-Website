import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Box,
  Slider,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import QuantityPopup from "../../common/QuantityPopup";
import "./styles.css";

const MedicalCard = ({ Med,handleImagePopup }) => {
  const [showQuantityPopup, setShowQuantityPopup] = useState(false); // State to control the visibility of QuantityPopup
  const [transportion, setTransportion] = React.useState("");
  const [showTransportation, setShowTransportation] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [finalValueChange, setFinalValueChange] = useState(0);
  const [val, setVal] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [quantityDonated, setQuantityDonated] = useState(1);
  const handleButtonClick = () => {
    setShowQuantityPopup(true); // Function to open the QuantityPopup
  };
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

  const MIN = 0;
  const MAX = 100;
  const marks = [
    { value: MIN, label: "" },
    { value: MAX, label: "" },
  ];
  return (
    <Grid item xs={12} sm={6} md={4} key={Med.id} className="MedicalCard">
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
          <Typography variant="body2">
            <strong>Type:</strong> {Med.type}
          </Typography>
          <Typography variant="body2" style={{ marginBottom: "5px" }}>
            <strong>Use:</strong> {Med.use}
          </Typography>
          <Box sx={{ width: 350 }}>
            <Slider
              aria-label="Always visible"
              marks={marks}
              step={1}
              value={parseInt(Med.quantitydonated)}
              min={0}
              valueLabelDisplay="on"
              valueLabelFormat={(value) => `${value}`}
              max={parseInt(Med.quantity)}
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
                onClick={() => setVal(parseInt(Med.quantitydonated))}
                sx={{ cursor: "pointer" }}
              >
                {MIN}
              </Typography>
              <Typography
                variant="body2"
                onClick={() => setVal(parseInt(Med.quantitydonated))}
                sx={{ cursor: "pointer" }}
              >
                <strong>Required No: </strong> {parseFloat(Med.quantity)}
                {Med.quantity.replace(/\d+/g, "")}
              </Typography>
            </Box>
          </Box>
          <Button
            onClick={handleButtonClick}
            className="donate-button"
            // Call handleButtonClick to open QuantityPopup
            variant="outlined"
          >
            Donate
          </Button>
          {/* Render QuantityPopup based on showQuantityPopup state */}
          {showQuantityPopup && (
            <QuantityPopup
              handleClose={() => setShowQuantityPopup(false)} // Pass function to close QuantityPopup
              handleQuantitySubmit={(quantity) => {
                // handleQuantitySubmit function to handle submitted quantity
                console.log("Submitted quantity:", quantity);
                setShowQuantityPopup(false); // Close QuantityPopup after submission (you can handle submission logic here)
              }}
              handleImagePopup={handleImagePopup} // Pass handleImagePopup function to QuantityPopup
            />
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MedicalCard;