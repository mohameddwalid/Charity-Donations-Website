import React, { useState, useEffect } from "react";
import Panel from './AppBar';

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
import SearchIcon from "@mui/icons-material/Search";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import "./App.css";
import bmw from "./Images/bmw.jpg";
import book from "./Images/Book.jpeg";
import syr from "./Images/Syringe.jpg";
import mal from "./Images/maloox.jpg";
import shirt from "./Images/shirt.jpg";
import football from "./Images/football.jpg";
import bread from "./Images/Bread.jpeg";
import  Panadol from './Images/panadol.jpg';
import medapp from './Images/MedApp.jpg';
import Sama3a from './Images/sama3at2.jpg';
import Pants from './Images/IMG10.jpg';
import Session from './Images/Session.jpeg';
import girlbaby from './Images/girlbaby.jpg';
import Apples from './Images/Apples.png';
import Croissants from './Images/Croissants.png';
import Blood from './Images/Blood.jpg';
import Pens from './Images/pens.webp';
import EnglishBook from './Images/englishbook.png';










//doctor details
let fn="Khaled";
let ln="Amr";
let g="Male";
let e="Khaled@Gmail.com";
let numv="0123456789";
let areav="tagmo3";
let govv="Cairo";
let addv="north 90,tagmo3,new cairo,cairo";
let NumCases="5";
let CAddress="north 90,tagmo3,new cairo,cairo";
let CArea="Shrouk";
let CGov="Cairo";
let Docspecialty="Dentist";
let Cgmv="googlemaps.com/resala";



const ManageRequests = () => {
  const [open, setOpen] = useState(false);
  const[dr,setdr]=useState(false);
  const [t,setT]=useState(false);
 // Initialize initialData with your data
 const [initialData, setInitialData] = useState([
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    category: "Food",
    type: "Fruit", // Food Type
    item: "Apple", // Food Item
    quantity: "40 KG",
    picture: Apples,
    donated: "2",
  },
  {
    id: 4,
    category: "Food",
    type: "Baked goods", // Food Type
    item: "Croissants", // Food Item
    quantity: "55",
    picture: Croissants,
    donated: "55",
  },

  {
    id: 5,
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
    donated: "80",
    // Quantity (if Books)
    picture: EnglishBook,
  },
  {
    id: 6,
    category: "School",
    SchoolCategory: "School supplies",

    title: "Pens", // Book Title (if Books)
    // Short Summary (if Books)
    quantity: "100",
    donated: "30",
    // Quantity (if Books)
    picture: Pens,
  },
  {
    id: 7,
    category: "Toys",
    ToyCategory: "cars", // Toy Category
    gender: "Boy", // Gender
    age: "4 to 8", // Age
    picture: bmw,
    donated: "5",
    quantity: "5",
    // Insert pic here
  },
  {
    id: 8,
    category: "Toys",
    ToyCategory: "dolls", // Toy Category
    gender: "Girl", // Gender
    age: "1 to 4", // Age
    picture: girlbaby,
    donated: "2",
    quantity: "8",
    // Insert pic here
  },
  {
    id: 9,
    category: "Medical",
    type: "Medication", // Item Type (medication, device, equipment)
    use: "Headache and Fever", // Medical use or device use
    name: "Panadol",
    quantity: "20",
    donated: "1",
    picture: Panadol,
  },
  {
    id: 10,
    category: "Medical",
    type: "Equipment", // Item Type (medication, device, equipment)
    use: "Measuring body heartbeat", // Medical use or device use
    name: "Stethoscope",
    quantity: "2",
    donated: "1",

    picture: Sama3a,
  },

  {
    id: 11,
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

  },
  {
    id: 12,
    category: "Session",
    SchoolCategory: "Session",
    subj: "Math",
    area: "tagmo3",
    gov: "cairo",
    nStudents: "5",
    gmLink: "googlemaps.com/tagmo3",
    donated: "3",
    quantity: "3 sessions",
    picture: Session,

  },
  {
    
    id: 13,
    category: "Medical",
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

  function handleDelete(id) {
    const updatedData = initialData.filter((item) => item.id !== id);
    setInitialData(updatedData);
  }

  const [editButton, setEditButton] = useState(false);
  const [editClothes, setEditClothes] = useState(false);
  const [editToys, setEditToys] = useState(false);
  const [editFood, setEditFood] = useState(false);
  const [editMedication, setEditMedication] = useState(false);
  const [editBooks, setEditBooks] = useState(false);
  const [editMedicalEquipment, setEditMedicalEquipment] = useState(false);
  const [editSchoolSession, setEditSchoolSession] = useState(false);
  const [editBloodDonation, setEditBloodDonation] = useState(false);
  const [editSchoolSupplies, setEditSchoolSupplies] = useState(false);
  const [editMedicalDevices, setEditMedicalDevices] = useState(false);
  const [editMedicalAppointments, setEditMedicalAppointments] = useState(false);

  // Inside your functional component

  const [showSchoolSupplies, setShowSchoolSupplies] = useState(false);
  const [showMedicalDevices, setShowMedicalDevice] = useState(false);
  const [showMedicalAppointments, setShowMedicalAppointment] = useState(false);

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
  const [toyQuantity, setToyQuantity] = useState("");

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
    setShowMedicalDevice(false);
    setShowMedicalAppointment(false);



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

    setOpen(true);
  }

  return (
    <div>
      <Panel/>
    <div style={{ marginTop: "20px", marginLeft: "40px" }}>
      <Grid container spacing={2} justifyContent="center">
        {initialData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <div style={{ position: "relative" }}>
              {" "}
              {/* Wrap each card and button in a div with relative positioning */}
              <Card
                sx={{
                  boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.1)",
                  height: 400,
                  width: 385,
                  padding: 1,
                  alignContent: "center",
                  borderRadius: "1rem",
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.75)" },
                }}
              >
                <CardMedia component="img" height="240" image={item.picture} />

                <CardContent>
                  {(item.category === "Clothes" ||
                    item.category === "Toys" ||
                    item.category === "Food") && (
                    <div style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        Post ID : {item.id}
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Category : {item.category}{" "}
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Requested Quantity : {item.quantity}{" "}
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Donated Quantity : {item.donated}{" "}
                      </label>
                      <br /> <br />
                    </div>
                  )}
                  {item.category === "Medical" &&
                    item.type === "Medication" && (
                      <div style={{ textAlign: "left" }}>
                        <label
                          style={{
                            fontFamily: "serif",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          Post ID : {item.id}
                        </label>
                        <br />
                        <label
                          style={{
                            fontFamily: "serif",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          Category : {item.type}{" "}
                        </label>
                        <br />
                        <label
                          style={{
                            fontFamily: "serif",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          Requested Quantity : {item.quantity}{" "}
                        </label>
                        <br />
                        <label
                          style={{
                            fontFamily: "serif",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          Donated Quantity : {item.donated}{" "}
                        </label>
                        <br /> <br />
                      </div>
                    )}
                  {item.category === "Medical" && (item.type === "Equipment"|| item.type === "Device" ) && (
                    <div style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        Post ID : {item.id}
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Category : {item.type}{" "}
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Requested Quantity : {item.quantity}{" "}
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Donated Quantity : {item.donated}{" "}
                      </label>
                      <br /> <br />
                    </div>
                  )}
                
                  {(item.SchoolCategory === "Session" ||
                    item.category === "Blood" || item.type === "Appointment") && (
                    <div style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        Post ID : {item.id}
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Category : {item.category}{" "}
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Number of Volunteers : {item.donated}{" "}
                      </label>
                      <br /> <br />
                    </div>
                  )}
                  {item.category === "School" && (
                    <div style={{ textAlign: "left" }}>
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        Post ID : {item.id}
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Category : {item.SchoolCategory}{" "}
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Requested Quantity : {item.quantity}{" "}
                      </label>
                      <br />
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        Donated Quantity : {item.donated}{" "}
                      </label>
                      <br /> <br />
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "3px",
                    }}
                  >
                    <button
                      className="button-org"
                      style={{
                        width: "150px",
                        marginRight: "10px",
                      }}
                      onClick={() => {
                        handleOpen(item);
                      }}
                    >
                      View Post Details
                    </button>
                    
                      <button
                        className="button-org"
                        style={{
                          width: "150px",
                        }}
                        onClick={() => handleDelete(item.id)} // Pass the item id to handleDelete function
                      >
                        Delete Post
                      </button>
                    
                  </div>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} fullWidth maxWidth="md">
        <DialogContent sx={{}}>
          {showClothes &&
            (editClothes ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="box">
                  <label> Clothes Type:</label>
                  <select
                    onChange={(e) => {
                      setClothesType(e.target.value);
                    }}
                  >
                    <option value="" disabled selected>
                      {clothesType}
                    </option>
                    <option value="Half">Half Sleeve T-shirts</option>
                    <option value="Long">Long Sleeve T-shirts</option>
                    <option value="Shorts">Shorts</option>
                    <option value="Home">Home wear</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Cargo">Cargo</option>
                    <option value="Sweatpants">Sweatpants</option>
                    <option value="Hoodies">Hoodies</option>
                    <option value="Crew">Crew necks</option>
                    <option value="Pullovers">Pullovers</option>
                  </select>
                  <br />
                  <br />
                  <label>Season :</label>
                  <select
                    onChange={(e) => {
                      setClothesSeason(e.target.value);
                    }}
                  >
                    <option value="" disabled selected>
                      {clothesSeason}
                    </option>
                    <option value="Winter">Winter</option>
                    <option value="Summer">Summer</option>
                    <option value="Spring">Spring</option>
                    <option value="Autmun">Autmun</option>
                  </select>
                  <br />
                  <br />
                  <label>Gender :</label>
                  <select
                    onChange={(e) => {
                      setClothesGender(e.target.value);
                    }}
                  >
                    {/* onChange={(e) => handleTypeSelection(e)} */}
                    <option value="" disabled selected>
                      {clothesGender}
                    </option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                  <br />
                  <br />

                  <label>Size:</label>
                  <select
                    onChange={(e) => {
                      setClothesSize(e.target.value);
                    }}
                  >
                    {/* onChange={(e) => handleTypeSelection(e)} */}
                    <option value="" disabled selected>
                      {clothesSize}
                    </option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="XXXL">XXXL</option>
                  </select>
                  <br />
                  <br />
                  <label>Age Range? :</label>
                  <select
                    onChange={(e) => {
                      setClothesAgeRange(e.target.value);
                    }}
                  >
                    {/* onChange={(e) => handleTypeSelection(e)} */}
                    <option value="" disabled selected>
                      {clothesAgeRange}
                    </option>
                    <option value="Baby">1 to 6 years</option>
                    <option value="6">6 to 12 years</option>
                    <option value="12">12 to 18 years</option>
                    <option value="18">18+ years</option>
                  </select>
                  <br />
                  <br />

                  <label>Material:</label>
                  <input
                    type="number"
                    placeholder={clothesMaterial}
                    onChange={(e) => {
                      setClothesMaterial(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />
                  <label>Quantity:</label>
                  <input
                    type="number"
                    placeholder={clothesQuantity}
                    onChange={(e) => {
                      setClothesQuantity(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  {/* <input type="number" id="height" className="diet-form-textBox" placeholder='Enter Your Height(cm)'  value={hh} onChange={(e) => handleH(e)} required/> */}
                </div>
              </div>
            ) : (
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
            ))}
          {showToys &&
            (editToys ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="box">
                  <label>Toy Category :</label>
                  <select
                    onChange={(e) => {
                      setToyCategory(e.target.value);
                    }}
                  >
                    <option value="" disabled selected>
                      {toyCategory}
                    </option>
                    <option value="board games">board games</option>
                    <option value="stuffed toys">stuffed toys</option>
                    <option value="dolls">dolls</option>
                    <option value="sports">sports</option>
                    <option value="cars">cars</option>
                    <option value="outdoor">outdoor</option>
                  </select>
                  <br />
                  <br />
                  <label>Gender :</label>
                  <select
                    onChange={(e) => {
                      setToyGender(e.target.value);
                    }}
                  >
                    <option value="" disabled selected>
                      {toyGender}
                    </option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                  <br />
                  <br />

                  <label>Age :</label>
                  <input
                    type="number"
                    placeholder={toyAge}
                    onChange={(e) => {
                      setToyAge(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <label>Quantity:</label>
                  <input
                    type="number"
                    placeholder={toyQuantity}
                    onChange={(e) => {
                      setToyQuantity(e.target.value);
                    }}
                    required
                  />
                  <br />

                  <br />

                  <br />
                  <br />
                </div>
              </div>
            ) : (
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
            ))}

          {showFood &&
            (editFood ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="box">
                  <label>Food Type :</label>
                  <select
                    onChange={(e) => {
                      setFoodType(e.target.value);
                    }}
                  >
                    <option value="" disabled selected>
                      {foodType}
                    </option>
                    <option value="fruits">fruits</option>
                    <option value="vegetables">vegetables</option>
                    <option value="canned foods">canned foods</option>

                    <option value="fresh meals"> fresh meals</option>
                    <option value="baked goods">baked goods</option>
                  </select>
                  <br />
                  <br />

                  <label>What do you want?:</label>
                  <input
                    type="text"
                    placeholder={foodItem}
                    onChange={(e) => {
                      setFoodItem(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />
                  <label>Quantity:</label>
                  <input
                    type="number"
                    placeholder={foodQuantity}
                    onChange={(e) => {
                      setFoodQuantity(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />
                </div>
              </div>
            ) : (
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
            ))}

          {showMedication &&
            (editMedication ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="box">
                  <label> Medical use :</label>
                  <br />
                  <input
                    type="text"
                    placeholder={medicationUse}
                    onChange={(e) => {
                      setMedicationUse(e.target.value);
                    }}
                    required
                  />
                  <br />

                  <label> Item name :</label>
                  <br />
                  <input
                    type="text"
                    placeholder={medicationName}
                    onChange={(e) => {
                      setMedicationName(e.target.value);
                    }}
                    required
                  />
                  <br />

                  <label>Quantity :</label>
                  <input
                    type="text"
                    placeholder={medicationQuantity}
                    onChange={(e) => {
                      setMedicationQuantity(e.target.value);
                    }}
                    required
                  />
                  <br />
                </div>
              </div>
            ) : (
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
            ))}

          {showMedicalEquipment &&
            (editMedicalEquipment ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="box">
                  <label> Equipment Name :</label>
                  <br />
                  <input
                    type="text"
                    placeholder={equipmentName}
                    onChange={(e) => {
                      setEquipmentName(e.target.value);
                    }}
                    required
                  />
                  <br />

                  <label> use :</label>
                  <br />
                  <input
                    type="text"
                    placeholder={equipmentUse}
                    onChange={(e) => {
                      setEquipmentUse(e.target.value);
                    }}
                    required
                  />
                  <br />

                  <label> Quantity :</label>
                  <br />
                  <input
                    type="text"
                    placeholder={equipmentQuantity}
                    onChange={(e) => {
                      setEquipmentQuantity(e.target.value);
                    }}
                    required
                  />
                  <br />
                </div>
              </div>
            ) : (
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
            ))}

          {showBooks &&
            (editBooks ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="box">
                  <label>Book title :</label>
                  <input
                    type="text"
                    placeholder={bookTitle}
                    onChange={(e) => {
                      setBookTitle(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Book Author :</label>
                  <input
                    type="text"
                    placeholder={bookAuthor}
                    onChange={(e) => {
                      setBookAuthor(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Book Language :</label>
                  <input
                    type="text"
                    placeholder={bookLanguage}
                    onChange={(e) => {
                      setBookLanguage(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Book Edition :</label>
                  <input
                    type="text"
                    placeholder={bookEdition}
                    onChange={(e) => {
                      setBookEdition(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Short Summary :</label>
                  <input
                    type="text"
                    placeholder={bookSummary}
                    onChange={(e) => {
                      setBookSummary(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Quantity :</label>
                  <input
                    type="number"
                    placeholder={bookQuantity}
                    onChange={(e) => {
                      setBookQuantity(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <br />
                  <br />
                </div>
              </div>
            ) : (
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
            ))}

          {showSchoolSession &&
            (editSchoolSession ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="box">
                  <label>Subject :</label>
                  <input
                    type="text"
                    placeholder={sessionSubject}
                    onChange={(e) => {
                      setSessionSubject(e.target.value);
                    }}
                    required
                  />
                  <br />

                  <label>Area :</label>
                  <input
                    type="text"
                    placeholder={sessionArea}
                    onChange={(e) => {
                      setSessionArea(e.target.value);
                    }}
                    required
                  />
                  <br />

                  <label>governorate :</label>
                  <input
                    type="text"
                    placeholder={sessionGov}
                    onChange={(e) => {
                      setSessionGov(e.target.value);
                    }}
                    required
                  />
                  <br />

                  <label>number of students :</label>
                  <input
                    type="text"
                    placeholder={sessionStudents}
                    onChange={(e) => {
                      setSessionStudents(e.target.value);
                    }}
                    required
                  />
                  <br />

                  <label>Google maps location link :</label>
                  <input
                    type="text"
                    placeholder={sessionGmLink}
                    onChange={(e) => {
                      setSessionGmLink(e.target.value);
                    }}
                    required
                  />
                  <br />
                </div>
              </div>
            ) : (
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
              </div>
            ))}

          {showBloodDonation &&
            (editBloodDonation ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="box">
                  <label>Patient name :</label>
                  <input
                    type="text"
                    placeholder={bloodDonationName}
                    onChange={(e) => {
                      setBloodDonationName(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Blood Type :</label>
                  <input
                    type="text"
                    placeholder={bloodDonationType}
                    onChange={(e) => {
                      setBloodDonationType(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />
                  <label>hospital name :</label>
                  <input
                    type="text"
                    placeholder={bloodDonationHospital}
                    onChange={(e) => {
                      setBloodDonationHospital(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />
                  <label>hospital area :</label>
                  <input
                    type="text"
                    placeholder={bloodDonationArea}
                    onChange={(e) => {
                      setBloodDonationArea(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />
                  <label> governorate :</label>
                  <input
                    type="text"
                    placeholder={bloodDonationGov}
                    onChange={(e) => {
                      setBloodDonationGov(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />
                  <label> hospital address :</label>
                  <input
                    type="text"
                    placeholder={bloodDonationAddress}
                    onChange={(e) => {
                      setBloodDonationAddress(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />
                </div>
              </div>
            ) : (
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
            ))}

          {showMedicalAppointments &&
            (editMedicalAppointments ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="box">
                  <label>Patient name :</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={patientName}
                    onChange={(e) => {
                      setPatientName(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Age :</label>
                  <input
                    type="text"
                    placeholder="Enter Age"
                    value={patientAge}
                    onChange={(e) => {
                      setPatientAge(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Gender :</label>
                  <select
                    value={patientGender}
                    onChange={(e) => {
                      setPatientGender(e.target.value);
                    }}
                  >
                    <option value="" disabled selected>
                      --Select Gender--
                    </option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                  <br />
                  <br />

                  <label>Weight (KG) :</label>
                  <input
                    type="number"
                    placeholder="Enter Weight"
                    value={patientWeight}
                    onChange={(e) => {
                      setPatientWeight(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Medical Specialty :</label>
                  <input
                    type="text"
                    placeholder="Enter Medical Specialty"
                    value={medicalSpecialty}
                    onChange={(e) => {
                      setMedicalSpecialty(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Case Description :</label>
                  <input
                    type="text"
                    placeholder="Enter Case Description"
                    value={caseDescription}
                    onChange={(e) => {
                      setCaseDescription(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Area :</label>
                  <input
                    type="text"
                    placeholder="Enter area"
                    value={appointmentArea}
                    onChange={(e) => {
                      setAppointmentArea(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label> Governorate :</label>
                  <input
                    type="text"
                    placeholder="Enter governorate"
                    value={appointmentGov}
                    onChange={(e) => {
                      setAppointmentGov(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label> Address :</label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    value={appointmentAddress}
                    onChange={(e) => {
                      setAppointmentAddress(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label> Google maps link :</label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    value={googleMapsLink}
                    onChange={(e) => {
                      setGoogleMapsLink(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />
                </div>
              </div>
            ) : (
              <div>
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
                  
                </div>
              </div>
            ))}
          {showSchoolSupplies &&
            (editSchoolSupplies ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="box">
                  <label>Enter the item you need :</label>
                  <input
                    type="text"
                    placeholder="Enter Item"
                    value={supplyItem}
                    onChange={(e) => {
                      setSupplyItem(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Quantity :</label>
                  <input
                    type="number"
                    placeholder="Enter Quantity"
                    value={supplyQuantity}
                    onChange={(e) => {
                      setSupplyQuantity(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <label>Category: School Supplies</label>
                  <br />
                  <label>Item: {supplyItem}</label>
                  <br />
                  <label>Quantity: {supplyQuantity}</label>
                  <br />
                </div>{" "}
              </div>
            ))}
          {showMedicalDevices &&
            (editMedicalEquipment ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="box">
                  <label>Device Type :</label>
                  <input
                    type="text"
                    placeholder="Enter Type"
                    value={deviceType}
                    onChange={(e) => {
                      setDeviceType(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Use :</label>
                  <input
                    type="text"
                    placeholder="Enter Use"
                    value={deviceUse}
                    onChange={(e) => {
                      setDeviceUse(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />

                  <label>Quantity :</label>
                  <input
                    type="number"
                    placeholder="Enter Quantity"
                    value={deviceQuantity}
                    onChange={(e) => {
                      setDeviceQuantity(e.target.value);
                    }}
                    required
                  />
                  <br />
                  <br />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <label>Category: Medical Device</label>
                  <br />
                  <label>Device Type: {deviceType}</label>
                  <br />
                  <label>Use: {deviceUse}</label>
                  <br />
                  <label>Quantity: {deviceQuantity}</label>
                  <br />
                </div>{" "}
              </div>
            ))}

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
                setOpen(false);
                setEditButton(false);
                setEditBloodDonation(false);
                setEditBooks(false);
                setEditClothes(false);
                setEditFood(false);
                setEditMedication(false);
                setEditMedicalEquipment(false);
                setEditSchoolSession(false);
                setEditToys(false);
                setEditMedicalAppointments(false);
              }}
            >
              Close
            </button>

            <button
              className="button-org"
              style={{ width: "100px", height: "40px", marginRight: "10px" }}
              onClick={() => {
                setEditButton(!editButton);
                if (showClothes) setEditClothes(!editClothes);
                else if (showToys) setEditToys(!editToys);
                else if (showFood) setEditFood(!editFood);
                else if (showMedication) setEditMedication(!editMedication);
                else if (showBooks) setEditBooks(!editBooks);
                else if (showMedicalEquipment)
                  setEditMedicalEquipment(!editMedicalEquipment);
                else if (showSchoolSession)
                  setEditSchoolSession(!editSchoolSession);
                else if (showBloodDonation)
                  setEditBloodDonation(!editBloodDonation);
                else if (showMedicalAppointments)
                  setEditMedicalAppointments(!editMedicalAppointments);
                else if (showSchoolSupplies)
                  setEditSchoolSupplies(!editSchoolSupplies);
                else if (showMedicalDevices)
                  setEditMedicalDevices(!editMedicalDevices);
              }}
            >
              {" "}
              {editButton ? "Done" : "Edit Data"}{" "}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    </div>
  );
};

export default ManageRequests;
