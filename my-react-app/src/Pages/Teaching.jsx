import React, { useState, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CardMedia from "@mui/material/CardMedia";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Snackbar,
  Select,
  InputLabel,
  FormControl,
  MenuItem
} from "@mui/material";
import NoResultsGIF from "./Images/no-result.gif";
import Giza1 from "./Images/Giza .png";
import Giza2 from "./Images/EraaSoftCS.png";
import elNozha from "./Images/Elnozhaa.png";
import elhamd from "./Images/Elhamd Center.png";
import center from "./Images/51center.png";
import Alex from "./Images/alex.png";
import center51 from "./Images/51Campus.jpeg";
import alexAcademy from "./Images/ALex Academy.jpg";
import CenterElhamd from "./Images/elhamd.jpeg";
import Finoon from "./Images/FinoonCenter2.png";
import EraaSoft from "./Images/EraaSoft.jpeg";
import International from "./Images/InternationalHouseCairo.jpeg";
import "../App.css";
const initialData = [
  {
    id: 1,
    nofStudents: 20,
    name: "Centre El-Hamd",
    address: "Elhamd, New Cairo 1, Cairo,Egypt",
    subject: "Physics",
    area: "New Cairo 1",
    govern: "Cairo",
    img2: elhamd,
    img: CenterElhamd,
  },
  {
    id: 2,
    nofStudents: 5,
    name: "Alex Academy for Training",
    address: "23 Mohammed Basha Mohsen, Al Qasaei Bahri, El Raml 2",
    subject: "Computer Science",
    area: "El Raml 2",
    govern: "Alexandria",
    img2: Alex,
    img: alexAcademy,
  },
  {
    id: 3,
    nofStudents: 30,
    name: "EraaSoft",
    address: "17 Boulos Hanna, Ad Doqi A, Dokki",
    subject: "Computer Science",
    area: "Doqi",
    govern: "Giza",
    img2: Giza2,
    img: EraaSoft,
  },
  {
    id: 4,
    nofStudents: 15,
    name: "International House Cairo",
    address: "5 Mossadak Ad Doqi, 5 Mossadak, street, Dokki",
    subject: "English",
    area: "Doqi",
    govern: "Giza",
    img2: Giza1,
    img: International,
  },
  {
    id: 5,
    nofStudents: 6,
    name: "  51 Campus",
    address: "90 Street, tolip elnarges, gate 4, New Cairo 1",
    subject: "German",
    area: "New Cairo 1",
    govern: "Cairo",
    img2: center,
    img: center51,
  },
  {
    id: 6,
    nofStudents: 3,
    name: "Finoon Center",
    address: "61 Abd El-Aziz Fahmy, El-Nozha, El Nozha",
    subject: "Music",
    area: "El Nozha",
    govern: "Cairo",
    img2: elNozha,
    img: Finoon,
  },
];

export const Teaching = () => {
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openLoc, setOpenLoc] = useState(false);
  const [studentNo, setStudentNo] = useState("");
  const [address, setAdress] = useState("");
  const [subject, setSubject] = useState("");
  const [area, setArea] = useState("");
  const [govern, setGovern] = useState("");
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [PopOpen, setPopOpen] = useState(false);
  const [val, setVal] = useState(1);
  const [filteredData, setFilteredData] = useState(initialData);
  const [LocationImage, setLocationImage] = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [filterArea, setFilterArea] = useState("");
  const [filterGovern, setFilterGovern] = useState("");
  const handleOpen = () => {
    setOpen(true);
    handlePopOpen();
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };
  const handleCloseLoc = () => {
    setOpenLoc(false);
  };
  const handlePopOpen = () => {
    setPopOpen(true);
  };
  const handlePopClose = () => {
    setPopOpen(false);
  };
  const handleOpenLoc = (image) => {
    setLocationImage(image);
    setOpenLoc(true);
  };
  const handleOpenInfo = (
    studentNumber,
    Addr,
    subj,
    area,
    govern,
    itemName,
    content1,
    content2
  ) => {
    setOpenInfo(true);
    setAdress(Addr);
    setStudentNo(studentNumber);
    setSubject(subj);
    setArea(area);
    setGovern(govern);
    setDialogTitle(`${content2} ${itemName}`);
    setDialogContent(content1);
  };
  const handleFilter = () => {
    let newData = initialData;
  
    if (filterSubject) {
      newData = newData.filter((item) => item.subject === filterSubject);
    }
  
    if (filterArea) {
      newData = newData.filter((item) => item.area === filterArea);
    }
  
    if (filterGovern) {
      newData = newData.filter((item) => item.govern === filterGovern);
    }
  
    setFilteredData(newData);
  };

  const handleClearFilter = () => {
    setFilterSubject("");
    setFilterArea("");
    setFilterGovern("");
    setFilteredData(initialData);
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "20px" }}>
      <div>
        <Card sx={{ padding: 2 }}>
          <Typography variant="h5" sx={{color:'#fd580b',textAlign:'center', fontWeight: 'bold' }}>Filter</Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Subject</InputLabel>
            <Select
              value={filterSubject}
              onChange={(e) => setFilterSubject(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Physics">Physics</MenuItem>
              <MenuItem value="Computer Science">Computer Science</MenuItem>
              <MenuItem value="German">German</MenuItem>
              <MenuItem value="Music">Music</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Physics">Physics</MenuItem>
              {/* Add other subject options */}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Area</InputLabel>
            <Select
              value={filterArea}
              onChange={(e) => setFilterArea(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="El Nozha">El_Nozha</MenuItem>
              <MenuItem value="New Cairo 1">New Cairo 1</MenuItem>
              <MenuItem value="Doqi">Doqi</MenuItem>
              <MenuItem value="El Raml 2">El_Raml 2</MenuItem>
              {/* Add other subject options */}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Governorate</InputLabel>
            <Select
              value={filterGovern}
              onChange={(e) => setFilterGovern(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Cairo">Cairo</MenuItem>
              <MenuItem value="Giza">Giza</MenuItem>
              <MenuItem value="Alexandria">Alexandria</MenuItem>
              {/* Add other subject options */}
            </Select>
          </FormControl>
          {/* Add filter inputs for area and government */}
          {/* Add a filter button and a clear filter button */}
          <Button  sx={{borderRadius: '2px',
                          margin:'12px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}
                      onClick={handleFilter}>Filter</Button>
          <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}
                       onClick={handleClearFilter}>Clear Filter</Button>
        </Card>
      </div>
      <div>
        <Grid container spacing={2} justifyContent="center">
        {filteredData.length === 0 ? (
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <img src={NoResultsGIF} alt="No Results" />
      </Grid>
    ):(
          filteredData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  maxWidth: 385,
                  padding: 1,
                  alignContent: "center",
                  borderRadius: "1rem",
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt="food Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {'Subject: '}{item.subject}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {'Area: '}{item.area}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {'Governorate: '}{item.govern}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginLeft:'8px',
                      height: "30px",
                      paddingTop: "5px",
                    }}
                  >
                    <Button
                      onClick={handleOpen}
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
                      Fulfill
                    </Button>
                    <Button
                      onClick={() => handleOpenLoc(item.img2)}
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
                      View Location
                    </Button>
                  </div>
                  <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "1rem",
                        marginTop:'4px',
                        marginLeft:'50px',
                        alignContent:'center',
                        color: "black",
                        border: "1px solid black",
                        "&:hover": {
                          bgcolor: "#fd580b",
                          color: "white",
                          border: "2px solid #fd580b",
                        },
                      }}
                      onClick={() =>
                        handleOpenInfo(
                          item.nofStudents,
                          item.address,
                          item.subject,
                          item.area,
                          item.govern,
                          item.name,
                          "More Details for",
                          "More Details for"
                        )
                      }
                    >
                      More Details
                    </Button>
                </CardContent>
              </Card>
            </Grid>
          )))}
        </Grid>
   
      </div>
      <Dialog open={openInfo} fullWidth maxWidth="md">
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent
          sx={{ display: "flex", alignItems: "center", marginRight: "16px" }}
        >
          <div>
            <Typography variant="body1">
              {"Number of students: "}
              {studentNo}
            </Typography>
            <Typography variant="body1">
              {"Address: "}
              {address}
            </Typography>
            <Typography variant="body1">
              {"Subject: "}
              {subject}
            </Typography>
            <Typography variant="body1">
              {"Area: "}
              {area}
            </Typography>
            <Typography variant="body1">
              {"Government: "}
              {govern}
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              borderRadius: "2px",
              backgroundColor: "#fd580b",
              color: "white",
              "&:hover": {
                backgroundColor: "#ff6e40",
              },
            }}
            variant="contained"
            onClick={() => {
              handleCloseInfo();
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openLoc} onClose={handleCloseLoc} fullWidth maxWidth="md">
        <DialogTitle>Image Location </DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            height="200"
            image={LocationImage}
            alt="Location"
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              borderRadius: "2px",
              backgroundColor: "#fd580b",
              color: "white",
              "&:hover": {
                backgroundColor: "#ff6e40",
              },
            }}
            onClick={handleCloseLoc}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
      open={PopOpen}
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
            <strong>Thank You for your generous volunteering!!</strong>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        {/* Close button with orange background and white font color */}
        <Button
          onClick={handlePopClose}
          variant="contained"
          style={{ backgroundColor: "#fd580b", color: "white" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </div>
  );
};
