import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import ChatBot from "react-simple-chatbot";
import Trackpopup from "../../common/Trackpopup"; // Import the Trackpopup component

const TrackCard = ({ Med }) => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showTrackPopup, setShowTrackPopup] = useState(false); // State to control Trackpopup visibility

  const handleDriverChatButtonClick = () => {
    setShowTrackPopup(true); // Show the Trackpopup when the button is clicked
  };

  const handleCloseTrackPopup = () => {
    setShowTrackPopup(false); // Close the Trackpopup completely
  };

  const handleTrackButtonClick = () => {
    setShowTrackPopup(true); // Show the Trackpopup when the button is clicked
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={Med.id}>
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
          <Typography variant="body2">
            <strong>{Med.message}</strong>
          </Typography>
          <Typography variant="body2" style={{ marginBottom: "5px" }}>
            <strong>ETA:</strong> {Med.eta}
          </Typography>
          <div style={{ textAlign: "center" }}>
            <Button
              onClick={handleTrackButtonClick}
              variant="outlined"
              sx={{
                borderRadius: "1rem",
                color: "black",
                border: "1px solid black",
                marginRight: "10px",
                "&:hover": {
                  bgcolor: "#fd580b",
                  color: "white",
                  border: "2px solid #fd580b",
                },
              }}
            >
              Reschedule
            </Button>
            <Button
              onClick={handleDriverChatButtonClick}
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
              Chat with the driver
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* Trackpopup component */}
      // TrackCard component
      {showTrackPopup && <Trackpopup handleClose={handleCloseTrackPopup} />}
      <style>{`
        .rsc-header {
          background-color: #fd580b !important;
        }
      `}</style>
      <style>
        {`
          .rsc-cs-close-button {
            background-color: #fd580b !important;
          }
        `}
      </style>
    </Grid>
  );
};

export default TrackCard;
