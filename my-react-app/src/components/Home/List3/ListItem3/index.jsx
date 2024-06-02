import React, { useState } from "react";
import "./styles.css";

const ListItem3 = ({
  item: { coverSrc, title, type, use, cuisine, number, address, orgtype },
}) => {
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [reservedText, setReservedText] = useState("");

  const handleImagePopup = () => {
    setShowImagePopup(true);
    // Set image source based on the title
    switch (title) {
      case "Magdy Yacoub Heart Foundation":
        setImageSrc("/images/magdyloc.png");
        break;
      case "Food Bank in Egypt":
        setImageSrc("/images/ta3amloc.png");
        break;
      case "Resala Foundation":
        setImageSrc("/images/resalaloc.png");
        break;
      case "Misr Al-Kheir Foundation":
        setImageSrc("/images/elkherloc.png");
        break;
      default:
        setImageSrc("/images/default.jpg"); // Default image if title doesn't match any case
    }
    // Clear reserved text
    setReservedText("");
  };

  const handleCloseImagePopup = () => {
    setShowImagePopup(false);
  };

  return (
    <div className="listItem-wrap">
      <img src={coverSrc} alt="item" />
      <header>
        <h4>{title}</h4>
      </header>
      <footer>
        <div>
          <p>
            <b>Governorate:</b> {type}
          </p>
          <p>
            <b>Area:</b> {use}
          </p>
          <p>
            <b>Contact Number:</b> {number}
          </p>
          <p>
            <b>Address:</b> {address}
          </p>
          <p>
            <b>Organization Type:</b> {orgtype}
          </p>
        </div>
        <div className="button-container">
          <button onClick={handleImagePopup}>View Location</button>{" "}
          {/* New button */}
        </div>
      </footer>
      {showImagePopup && (
        <div className="image-popup">
          <img
            src={imageSrc}
            alt={title}
            className={imageSrc.includes(".gif") ? "gif" : ""}
            style={{ height: "350px" }} // Adjust the height as needed
          />
          {reservedText && <p>{reservedText}</p>} {/* Conditional rendering */}
          <button onClick={handleCloseImagePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ListItem3;
