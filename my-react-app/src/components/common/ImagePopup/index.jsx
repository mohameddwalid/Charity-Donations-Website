import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import "./styles.css";

const ImagePopup = ({ handleClose }) => {
  return (
    <Dialog
      open={true}
      onClose={handleClose}
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
          onClick={handleClose}
          variant="contained"
          style={{ backgroundColor: "#fd580b", color: "white" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImagePopup;