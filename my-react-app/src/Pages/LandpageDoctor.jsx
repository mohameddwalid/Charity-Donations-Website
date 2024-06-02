import React, { useState } from "react";
import background from "./Images/backgroundImg.jpg";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { Link } from "react-router-dom";
import{Navbar}from "./Navbar";
import "../index.css";
export const LandpageDoctor = () => {
  const buttons = [
    { icon: <AddToPhotosIcon sx={{ fontSize: 40 }} />, text: "View All Donation Requests" },
    {
      icon: <ManageSearchIcon sx={{ fontSize: 40 }} />,
      text: "Choose Donation Category",
    },
    {
        icon: <ViewCarouselIcon sx={{ fontSize: 40 }} />,
        text: "View Medical Appointments Requests",
      },
    {
      icon: <ViewCarouselIcon sx={{ fontSize: 40 }} />,
      text: "View Registered Organization",
    },
    {
        icon: <ViewCarouselIcon sx={{ fontSize: 40 }} />,
        text: "Track Donation Orders",
      },
      {
        icon: <ViewCarouselIcon sx={{ fontSize: 40 }} />,
        text: "Manage Account",
      },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("");
  const handleNext = () => {
    setTransitionDirection("next");
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex + 3) % buttons.length);
      setTransitionDirection("");
    }, 500); // Wait for the transition to complete
  };
  const handlePrev = () => {
    setTransitionDirection("prev");
    setTimeout(() => {
      setStartIndex(
        (prevIndex) => (prevIndex - 3 + buttons.length) % buttons.length
      );
      setTransitionDirection("");
    }, 500); // Wait for the transition to complete
  };
  const scrollDown = () => {
    window.scrollTo({ top: 700, behavior: "smooth" });
  };
  return (
    <div>
         <Navbar/>
      <div
        className="home-container"
        style={{ display: "block", position: "relative" }}
      >
        <div
          className="background-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        ></div>
        <label
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            position: "absolute",
            top: "40%",
            left: "22%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontSize: "60px",
            width: "500px",
          }}
        >
          Donate For
        </label>
        <label
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            position: "absolute",
            top: "calc(40% + 60px)",
            left: "25%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontSize: "60px",
            width: "500px",
          }}
        >
          A Better World
        </label>
        <label
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            position: "absolute",
            top: "calc(40% + 120px)",
            textAlign: "left",
            left: "38%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontSize: "20px",
            width: "800px",
          }}
        >
          “Giving does not only precede receiving; it is the reason for it. It
          is in giving that we receive."
        </label>
        <button
          className="explore"
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            position: "absolute",
            top: "calc(40% + 210px)",
            left: "25%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontSize: "15px",
            width: "140px",
            height: "45px",
          }}
          onClick={scrollDown}
        >
          Explore
        </button>
      </div>
      <div className="home-buttons-container">
      <button className="button-slider" style={{ width: '60px', fontSize: '30px', marginRight: '15px' }} onClick={handlePrev}>{'<'}</button>
      <div className={`buttons-wrapper ${transitionDirection}`}   >
      {buttons.slice(startIndex, startIndex + 3).map((button, index) => (
                        // <Link to={button.link} style={{ marginRight: '15px' }}>
                            <button key={index} className="home-button">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>{button.icon}</div>
                                    <div>{button.text}</div>
                                </div>
                            </button>
                        // </Link>
                    ))}
        </div>
                    <button className="button-slider" style={{ width: '60px', fontSize: '30px', marginLeft: '15px' }} onClick={handleNext}>{'>'}</button>
      </div>
    </div>
  );
};
