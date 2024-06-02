import * as React from "react";
import Button from "@mui/material/Button";


const Adminbutton = ({ href,buttonText }) => {
  return (
    <div>
    <Button
        component="a" // Use anchor element for href
        href={href} // Pass href prop to anchor element
        style={{
          color: "#333",
          fontFamily: "Arial",
          fontWeight: "bold",
          fontSize: "25px",
          border: "2px solid #333",
          padding: "8px 16px",
          maxWidth: "250px",
          minHeight: "180px",
          maxHeight: "180px",
        textAlign: "center", // Center the text horizontally
        textTransform: "none", // Prevent text from appearing in all capital letters
      }}
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
        {buttonText}
    </Button>
    </div>
  );
};

export default Adminbutton;
