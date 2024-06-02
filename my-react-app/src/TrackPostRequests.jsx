import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { BiTime } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import Panel from './AppBar';

import Divider from "@mui/material/Divider";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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
} from "@mui/material";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";


import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import bmw from "./Images/bmw.jpg";
import book from "./Images/Book.jpeg";
import syr from "./Images/Syringe.jpg";
import mal from "./Images/maloox.jpg";
import shirt from "./Images/shirt.jpg";
import football from "./Images/football.jpg";
import bread from "./Images/Bread.jpeg";
import Panadol from "./Images/panadol.jpg";
import medapp from "./Images/MedApp.jpg";
import Sama3a from "./Images/sama3at2.jpg";
import Pants from "./Images/IMG10.jpg";
import Session from "./Images/Session.jpeg";
import girlbaby from "./Images/girlbaby.jpg";
import Apples from "./Images/Apples.png";
import Croissants from "./Images/Croissants.png";
import Blood from "./Images/Blood.jpg";
import Pens from "./Images/pens.webp";
import EnglishBook from "./Images/englishbook.png";

const TrackOrg = () => {
  const [schedule, setSchedule] = useState(false);
  const [openSch, setOpenSch] = useState(false);
  const [i, setI] = useState("");

  const [openDetails, setOpenDetails] = useState(false);



  const [items, setItems] = useState([
    {
      id: 1,
      donor: "khaled",

      category: "Clothes", // Selected category
      type: "T-shirt", // Clothes Type
      season: "Summer", // Season
      gender: "Woman", // Gender
      size: "XL", // Size
      ageRange: "Above 18", // Age Range
      material: "Cotton", // Material
      quantity: "60",
      donated: "1",
      picture: shirt,
      showBitIcon: false, // Add a new property to manage bitIcon visibility
      dropoff:false,

    },
    {
      id: 2,
      donor: "sarah",

      category: "Clothes", // Selected category
      type: "SweatPants", // Clothes Type
      season: "Winter", // Season
      gender: "Male", // Gender
      size: "M", // Size
      ageRange: "12 to 18", // Age Range
      material: "Cotton", // Material
      quantity: "100",
      donated: "1",
      picture: Pants,
      showBitIcon: false, // Add a new property to manage bitIcon visibility
      dropoff:false,

    },
    {
      id: 3,
      donor: "shahd",
      category: "Food",

      type: "Fruit", // Food Type
      item: "Apple", // Food Item
      quantity: "40 KG",
      picture: Apples,
      donated: "2",
      showBitIcon: false, // Add a new property to manage bitIcon visibility
      dropoff:false,

    },
    {
      id: 4,
      donor: "mohamed",
      category: "Food",
      type: "Baked goods", // Food Type
      item: "Croissants", // Food Item
      quantity: "55",
      picture: Croissants,
      donated: "2",
      showBitIcon: false, // Add a new property to manage bitIcon visibility
      dropoff:false,

    },

    {
      id: 5,
      donor: "ahmad",

      category: "School",
      SchoolCategory: "Books",

      title: "The Boy Who Harnessed the Wind", // Book Title (if Books)
      author: "William Kamkwamba and Bryan Mealer", // Book Author (if Books)
      language: "English", // Book Language (if Books)
      edition: "Young Readers Edition (2015)", // Book Edition (if Books)
      summary:
        "Tells the inspiring true story of William Kamkwamba, a young Malawian boy who built a windmill to bring electricity to his village.",

      // Short Summary (if Books)
      quantity: "80",
      donated: "30",
      // Quantity (if Books)
      picture: EnglishBook,
      showBitIcon: false, // Add a new property to manage bitIcon visibility
      dropoff:false,

    },
    {
      id: 6,
      donor: "Rodrygo",
      category: "School",
      SchoolCategory: "School supplies",

      title: "Pens", // Book Title (if Books)
      // Short Summary (if Books)
      quantity: "100",
      donated: "30",
      // Quantity (if Books)
      picture: Pens,
      showBitIcon: false, // Add a new property to manage bitIcon visibility
      dropoff:false,

    },
    {
      id: 7,
      donor: "Kroos",
      category: "Toys",
      ToyCategory: "cars", // Toy Category
      gender: "Boy", // Gender
      age: "4 to 8", // Age
      picture: bmw,
      donated: "2",
      quantity: "5",
      showBitIcon: false, // Add a new property to manage bitIcon visibility
      dropoff:false,


      // Insert pic here
    },
    {
      id: 8,
      donor: "Modric",
      category: "Toys",
      ToyCategory: "dolls", // Toy Category
      gender: "Girl", // Gender
      age: "1 to 4", // Age
      picture: girlbaby,
      donated: "2",
      quantity: "8",
      showBitIcon: false, // Add a new property to manage bitIcon visibility
      dropoff:false,


      // Insert pic here
    },
    {
      id: 9,
      donor: "Joselu",
      category: "Medical",
      type: "Medication", // Item Type (medication, device, equipment)
      use: "Headache and Fever", // Medical use or device use
      name: "Panadol",
      quantity: "20",
      donated: "1",
      picture: Panadol,
      showBitIcon: false, // Add a new property to manage bitIcon visibility
      dropoff:false,

    },

    {
      id: 11,
      donor: "lunin",
      category: "Blood",
      name: "Khaled",
      type: "A+",
      hospital: "Cleopatra",
      area: "masr el gedida",
      gov: "cairo",
      address: "ard el golf, masr el gedida, cairo",
      donated: "0",
      quantity: "2 liters",
      picture: Blood,
      showBitIcon: false, // Add a new property to manage bitIcon visibility
      dropoff:false,

    },
    {
      id: 12,
      donor: "Vinicius",
      category: "Session",
      SchoolCategory: "Session",
      subj: "Math",
      area: "tagmo3",
      gov: "cairo",
      nStudents: "5",
      gmLink: "googlemaps.com/tagmo3",
      donated: "0",
      quantity: "3 sessions",
      picture: Session,
      showBitIcon: false, // Add a new property to manage bitIcon visibility
      dropoff:false,
    },{
  
      id: 13,
    category: "Medical",
    donor: "saif",

    type:'Appointment',
    name: "ahmad",
    age:"26",
    gender:'M',
    weight:'90 kg',
    medicalSpecialty:'Heart ',
    caseDescription:'I have severe heartache when i breathe',
    area:'tagmo3',
    gov:'cairo',
    address:'tagmo3,90 shamaly, cairo',
    gmLink:'gm.com/ahmad',
    donated: "1",
    quantity: "1",
    },
  ]);


  const [toyQuantity, setToyQuantity] = useState("");

  // Clothes category states
  const [clothesType, setClothesType] = useState("");
  const [clothesSeason, setClothesSeason] = useState("");
  const [clothesGender, setClothesGender] = useState("");
  const [clothesSize, setClothesSize] = useState("");
  const [clothesAgeRange, setClothesAgeRange] = useState("");
  const [clothesMaterial, setClothesMaterial] = useState("");
  const [clothesQuantity, setClothesQuantity] = useState("");
  // Assuming shirt is an imported image
  const [clothesPicture, setClothesPicture] = useState("");

  const [showSchoolSupplies, setShowSchoolSupplies] = useState(false);
  const [showMedicalDevice, setShowMedicalDevice] = useState(false);
  const [showMedicalAppointment, setShowMedicalAppointment] = useState(false);

  // Toys category states
  const [toyCategory, setToyCategory] = useState("");
  const [toyGender, setToyGender] = useState("");
  const [toyAge, setToyAge] = useState("");
  // Assuming bmw is an imported image
  const [toyPicture, setToyPicture] = useState("");
  

  // Food category states
  const [foodType, setFoodType] = useState("");
  const [foodItem, setFoodItem] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");
  // Assuming bread is an imported image
  const [foodPicture, setFoodPicture] = useState("");

  // Medication category states
  const [medicationType, setMedicationType] = useState("");
  const [medicationUse, setMedicationUse] = useState("");
  const [medicationName, setMedicationName] = useState("");
  const [medicationQuantity, setMedicationQuantity] = useState("");
  // Assuming mal is an imported image
  const [medicationPicture, setMedicationPicture] = useState("");

  // Books category states
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookLanguage, setBookLanguage] = useState("");
  const [bookEdition, setBookEdition] = useState("");
  const [bookSummary, setBookSummary] = useState("");
  const [bookQuantity, setBookQuantity] = useState("");
  // Assuming book is an imported image
  const [bookPicture, setBookPicture] = useState("");

  //school supplies
  // School Supplies category states
  const [supplyItem, setSupplyItem] = useState("");
  const [supplyQuantity, setSupplyQuantity] = useState("");

  // Medical Equipment category states
  const [equipmentType, setEquipmentType] = useState("");
  const [equipmentUse, setEquipmentUse] = useState("");
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentQuantity, setEquipmentQuantity] = useState("");
  // Assuming syr is an imported image
  const [equipmentPicture, setEquipmentPicture] = useState("");

  //medical devices
  // Medical Devices category states
  const [deviceType, setDeviceType] = useState("");
  const [deviceUse, setDeviceUse] = useState("");
  const [deviceQuantity, setDeviceQuantity] = useState("");

  //appointments
  // Medical Appointments category states
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientGender, setPatientGender] = useState("");
  const [patientWeight, setPatientWeight] = useState("");
  const [medicalSpecialty, setMedicalSpecialty] = useState("");
  const [caseDescription, setCaseDescription] = useState("");
  const [appointmentArea, setAppointmentArea] = useState("");
  const [appointmentGov, setAppointmentGov] = useState("");
  const [appointmentAddress, setAppointmentAddress] = useState("");
  const [googleMapsLink, setGoogleMapsLink] = useState("");

  // Sports Toys category states
  const [sportsToyCategory, setSportsToyCategory] = useState("");
  const [sportsToyGender, setSportsToyGender] = useState("");
  const [sportsToyAge, setSportsToyAge] = useState("");
  // Assuming football is an imported image
  const [sportsToyPicture, setSportsToyPicture] = useState("");

  // Blood Donation category states
  const [bloodDonationName, setBloodDonationName] = useState("");
  const [bloodDonationType, setBloodDonationType] = useState("");
  const [bloodDonationHospital, setBloodDonationHospital] = useState("");
  const [bloodDonationArea, setBloodDonationArea] = useState("");
  const [bloodDonationGov, setBloodDonationGov] = useState("");
  const [bloodDonationAddress, setBloodDonationAddress] = useState("");

  // School Session category states
  const [sessionSubject, setSessionSubject] = useState("");
  const [sessionArea, setSessionArea] = useState("");
  const [sessionGov, setSessionGov] = useState("");
  const [sessionStudents, setSessionStudents] = useState("");
  const [sessionGmLink, setSessionGmLink] = useState("");

  const [showClothes, setShowClothes] = useState(false);
  const [showToys, setShowToys] = useState(false);
  const [showFood, setShowFood] = useState(false);
  const [showMedication, setShowMedication] = useState(false);
  const [showBooks, setShowBooks] = useState(false);
  const [showMedicalEquipment, setShowMedicalEquipment] = useState(false);
  const [showSchoolSession, setShowSchoolSession] = useState(false);
  const [showBloodDonation, setShowBloodDonation] = useState(false);

  function handleOpen(item) {
    setShowClothes(false);
    setShowFood(false);
    setShowToys(false);
    setShowMedication(false);
    setShowBooks(false);
    setShowMedicalEquipment(false);
    setShowSchoolSession(false);
    setShowBloodDonation(false);

    // Reset all states to their initial values
    setClothesType("");
    setClothesSeason("");
    setClothesGender("");
    setClothesSize("");
    setClothesAgeRange("");
    setClothesMaterial("");
    setClothesQuantity("");
    setClothesPicture("");

    setToyCategory("");
    setToyGender("");
    setToyAge("");
    setToyPicture("");

    setFoodType("");
    setFoodItem("");
    setFoodQuantity("");
    setFoodPicture("");

    setMedicationType("");
    setMedicationUse("");
    setMedicationName("");
    setMedicationQuantity("");
    setMedicationPicture("");

    setBookTitle("");
    setBookAuthor("");
    setBookLanguage("");
    setBookEdition("");
    setBookSummary("");
    setBookQuantity("");
    setBookPicture("");

    setEquipmentType("");
    setEquipmentUse("");
    setEquipmentName("");
    setEquipmentQuantity("");
    setEquipmentPicture("");

    setSportsToyCategory("");
    setSportsToyGender("");
    setSportsToyAge("");
    setSportsToyPicture("");

    setBloodDonationName("");
    setBloodDonationType("");
    setBloodDonationHospital("");
    setBloodDonationArea("");
    setBloodDonationGov("");
    setBloodDonationAddress("");

    setSessionSubject("");
    setSessionArea("");
    setSessionGov("");
    setSessionStudents("");
    setSessionGmLink("");

    // Set the state values based on the item category
    console.log(item.category);
    switch (item.category) {
      case "Clothes":
        setShowClothes(true);

        setClothesType(item.type);
        setClothesSeason(item.season);
        setClothesGender(item.gender);
        setClothesSize(item.size);
        setClothesAgeRange(item.ageRange);
        setClothesMaterial(item.material);
        setClothesQuantity(item.quantity);
        setClothesPicture(item.picture);
        break;
      case "Toys":
        setShowToys(true);
        setToyCategory(item.ToyCategory);
        setToyGender(item.gender);
        setToyAge(item.age);
        setToyPicture(item.picture);
        setToyQuantity(item.quantity);
        break;
      case "Food":
        setShowFood(true);
        setFoodType(item.type);
        setFoodItem(item.item);
        setFoodQuantity(item.quantity);
        setFoodPicture(item.picture);
        break;
      case "Medical":
        if (item.type === "Medication") {
          setShowMedication(true);
          setMedicationType(item.type);
          setMedicationUse(item.use);
          setMedicationName(item.name);
          setMedicationQuantity(item.quantity);
          setMedicationPicture(item.picture);
        } else if (item.type === "Equipment") {
          setShowMedicalEquipment(true);
          setEquipmentType(item.type);
          setEquipmentUse(item.use);
          setEquipmentName(item.name);
          setEquipmentQuantity(item.quantity);
          setEquipmentPicture(item.picture);
        } else if (item.type === "Device") {
          setShowMedicalDevice(true);
          // Set state variables for medical devices
          setDeviceType(item.deviceType);
          setDeviceUse(item.use);
          setDeviceQuantity(item.quantity);
          setEquipmentPicture(item.picture);
        } else if (item.type === "Appointment") {
          setShowMedicalAppointment(true);
          // Set state variables for medical appointment
          setPatientName(item.name);
          setPatientAge(item.age);
          setPatientGender(item.gender);
          setPatientWeight(item.weight);
          setMedicalSpecialty(item.medicalSpecialty);
          setCaseDescription(item.caseDescription);
          setAppointmentArea(item.area);
          setAppointmentGov(item.gov);
          setAppointmentAddress(item.address);
          setGoogleMapsLink(item.gmLink);
        }
        break;
      case "School":
        if (item.SchoolCategory === "Books") {
          setShowBooks(true);
          setBookTitle(item.title);
          setBookAuthor(item.author);
          setBookLanguage(item.language);
          setBookEdition(item.edition);
          setBookSummary(item.summary);
          setBookQuantity(item.quantity);
          setBookPicture(item.picture);
        } else if (item.SchoolCategory === "Session") {
          setShowSchoolSession(true);
          setSessionSubject(item.subj);
          setSessionArea(item.area);
          setSessionGov(item.gov);
          setSessionStudents(item.nStudents);
          setSessionGmLink(item.gmLink);
        } else if (item.SchoolCategory === "Supplies") {
          setShowSchoolSupplies(true);
          // Set state variables for school supplies
          setSupplyItem(item.item);
          setSupplyQuantity(item.quantity);
        }
        break;
      case "Blood":
        setShowBloodDonation(true);
        setBloodDonationName(item.name);
        setBloodDonationType(item.type);
        setBloodDonationHospital(item.hospital);
        setBloodDonationArea(item.area);
        setBloodDonationGov(item.gov);
        setBloodDonationAddress(item.address);
        break;
      case "Session":
        setShowSchoolSession(true);
        setSessionSubject(item.subj);
        setSessionArea(item.area);
        setSessionGov(item.gov);
        setSessionStudents(item.nStudents);
        setSessionGmLink(item.gmLink);
        break;
      default:
        break;
    }

    setOpenDetails(true);
  }




  const [selectedOrganization, setSelectedOrganization] = React.useState(""); // State for selected organization
  const [open1, setOpen1] = React.useState(false); // State for dialog
  const [open2, setOpen2] = React.useState(false); // State for dialog
  const [drop,setDrop]=useState(false);

  const handleAccept = (id, organization) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, showBitIcon: true } : item
    );
    setOpen2(true);
    setItems(updatedItems);
    setSchedule(true);
  };

  const handleConfirmDropoff = (id) => {
    const updatedItems = items.map((item) =>
        item.id === id ? { ...item, dropoff: true, showBitIcon: false } : item
      );
      setItems(updatedItems);

    setOpenSch(false);
  };

  const handleReject = (id, organization) => {
    setItems(items.filter((item) => item.id !== id));
    setSelectedOrganization(organization);
    setOpen1(true);
  };
  const VisuallyHiddenInput = styled("output")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div>
      <Panel/>
      {/* <Admintitle titleText="Pending Accounts" /> */}

      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontSize: "1.5rem", // Adjust font size
                      marginTop: "20px", // Move the text down
                    }}
                    component="div" // Change from "span" to "div" to allow margin
                    color="text.primary"
                  >
                    {item.organization}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "inline",
                        fontSize: "1.2rem", // Increase font size
                        marginTop: "40px" // Move the text down
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.donor +
                        " wants to fulfill post with id :" +
                        item.id}
                    </Typography>
                  </React.Fragment>
                }
              />
              <div style={{marginTop: "20px",display:'flex'}}
              ><button
                      className="button-org"
                      style={{
                        width: "150px",
                        marginRight: "10px",
                        height: "50px",
                        

                      }}
                      onClick={() => {
                        handleOpen(item);
                      }}
                    >
                      View Post Details
                    </button>
              {!item.showBitIcon && !item.dropoff && (
                <div>
                    
                  <button
                    variant="outlined"
                    className="button-org"
                    style={{
                      marginRight: "10px",
                    
                      height: "50px",
                      width: "70px",
                    }}
                    onClick={() => handleAccept(item.id, item.organization)}
                  >
                    Accept
                  </button>
                  <button
                    variant="outlined"
                    className="button-org"
                    style={{ height: "50px", width: "70px" }}
                    onClick={() => handleReject(item.id, item.organization)}
                  >
                    Reject
                  </button>
                </div>
              )}
              { item.showBitIcon && !item.dropoff && (
                <IconButton
                
                  onClick={() => {
                    setOpenSch(true);
                    setI(item.id);
                  }}
                  aria-label="clock"
                >
                  <BiTime />
                </IconButton>
              )}
              {!item.showBitIcon && item.dropoff && (
                <div style={{marginTop:'15px'}}>
                    <label style={{marginTop:'15px'}}>Dropoff Time Confirmed</label>
                </div>

              )}
              </div>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}

      </List>

      <Dialog open={open1} onClose={() => setOpen1(false)}>
        <DialogTitle>Request Rejected</DialogTitle>
        <DialogContent>
          <p>{selectedOrganization} request was successfully rejected.</p>
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
            onClick={() => setOpen1(false)}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open2} onClose={() => setOpen2(false)}>
        <DialogTitle>Request Accepted</DialogTitle>
        <DialogContent>
          <p>{selectedOrganization} request was successfully accepted.</p>
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
            onClick={() => setOpen2(false)}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openSch}>
        <DialogContent
          sx={{ display: "flex", alignItems: "center", marginRight: "16px", width: '400px', justifyContent: 'center' }}
        >
          <div sx={{ display: "flex", alignItems: "center" }}>
            <label>Choose Dropoff time :</label>
            <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker

                  label="Select dropoff date and time"
                  sx={{ width: '100%',height: '120px' }}
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}

                />
              </LocalizationProvider>
            </DemoContainer>
            <button className="button-org" style={{ width: '130px', marginTop: '30px', marginLeft: '75px' }} onClick={() => handleConfirmDropoff(i)}>Confirm Dropoff</button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={openDetails} fullWidth maxWidth="md">
        <DialogContent sx={{}}>
          {showClothes && (
            <div>
              <div>
                <label>Category : Clothes</label>
                <br />
                <label>Type : {clothesType}</label>
                <br />
                <label>Season : {clothesSeason}</label>
                <br />
                <label>Material : {clothesMaterial}</label>
                <br />
                <label>Gender : {clothesGender}</label>
                <br />
                <label>Size : {clothesSize}</label>
                <br />
                <label>Age Range : {clothesAgeRange}</label>
                <br />
                <label>Quantity : {clothesQuantity}</label>
                <br />
              </div>
            </div>
          )}
          {showToys && (
            <div>
              <label>Category : Toys</label>
              <br />
              <label>Toy Category : {toyCategory}</label>
              <br />
              <label>Gender : {toyGender}</label>
              <br />
              <label>Age : {toyAge}</label>
              <br />
              <label>Quantity : {toyQuantity}</label>
            </div>
          )}

          {showFood && (
            <div>
              <label>Category : Food</label>
              <br />
              <label>Food Type : {foodType}</label>
              <br />
              <label>Item : {foodItem}</label>
              <br />
              <label>Quantity : {foodQuantity}</label>
              <br />
            </div>
          )}

          {showMedication && (
            <div>
              <label>Category : Medication</label>
              <br />
              <label>Use : {medicationUse}</label>
              <br />
              <label>Item Name : {medicationName}</label>
              <br />
              <label>Quantity : {medicationQuantity}</label>
              <br />
            </div>
          )}

          {showMedicalEquipment && (
            <div>
              <label>Category : Equipment</label>
              <br />
              <label>Use : {equipmentUse}</label>
              <br />
              <label>Item Name : {equipmentName}</label>
              <br />
              <label>Quantity : {equipmentQuantity}</label>
              <br />
            </div>
          )}

          {showBooks && (
            <div>
              <label>Category : Books</label>
              <br />
              <label>Title : {bookTitle}</label>
              <br />
              <label>Author : {bookAuthor}</label>
              <br />
              <label>Language : {bookLanguage}</label>
              <br />
              <label>Edition : {bookEdition}</label>
              <br />
              <label>Summary : {bookSummary}</label>
              <br />
              <label>Quantity : {bookQuantity}</label>
              <br />
            </div>
          )}

          {showSchoolSession && (
            <div>
              <label>Category : Session</label>
              <br />
              <label>Subject : {sessionSubject}</label>
              <br />
              <label>Area : {sessionArea}</label>
              <br />
              <label>Governorate : {sessionGov}</label>
              <br />
              <label>Number of students : {sessionStudents}</label>
              <br />
              <label>Google maps marker : {sessionGmLink}</label>
              <br />
              <button
                className="button-org"
                style={{ width: "150px", marginTop: "10px" }}
              >
                show donor details
              </button>
            </div>
          )}

          {showSchoolSupplies && (
            <div>
              <label>Category: School Supplies</label>
              <br />
              <label>Item: {supplyItem}</label>
              <br />
              <label>Quantity: {supplyQuantity}</label>
              <br />
              
            </div>
          )}
          {showMedicalDevice && (
            <div>
              <label>Category: Medical Device</label>
              <br />
              <label>Device Type: {deviceType}</label>
              <br />
              <label>Use: {deviceUse}</label>
              <br />
              <label>Quantity: {deviceQuantity}</label>
              <br />
              
            </div>
          )}
          

{showMedicalAppointment &&(
  
            <div>
              <label>Category: Medical Appointment</label>
              <br />
              <label>Patient Name: {patientName}</label>
              <br />
              <label>Age: {patientAge}</label>
              <br />
              <label>Gender: {patientGender}</label>
              <br />
              <label>Weight (KG): {patientWeight}</label>
              <br />
              <label>Medical Specialty: {medicalSpecialty}</label>
              <br />
              <label>Case Description: {caseDescription}</label>
              <br />
              <label>Area: {appointmentArea}</label>
              <br />
              <label>Governorate: {appointmentGov}</label>
              <br />
              <label>Address: {appointmentAddress}</label>
              <br />
              <label>Google Maps Link: {googleMapsLink}</label>
              <br />
              <button
                className="button-org"
                style={{ width: "150px", marginTop: "10px" }}
              >
                Show Doctor Details
              </button>
            </div>

         ) }

          {showBloodDonation && (
            <div>
              <label>Category : Blood</label>
              <br />
              <label>Patient Name : {bloodDonationName}</label>
              <br />
              <label>Blood Type : {bloodDonationType}</label>
              <br />
              <label>Hospital : {bloodDonationHospital}</label>
              <br />
              <label>Area : {bloodDonationArea}</label>
              <br />
              <label>Governorate : {bloodDonationGov}</label>
              <br />
              <label>Hospital Address : {bloodDonationAddress}</label>
              <br />
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              className="button-org"
              style={{ width: "100px", height: "40px", marginRight: "10px" }}
              onClick={() => {
                setOpenDetails(false);
              }}
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default TrackOrg;
