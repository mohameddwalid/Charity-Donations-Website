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





const FulFilledRequests = () => {
  const [open, setOpen] = useState(false);

  
  
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
      quantity: "3",
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

  // Inside your functional component
  const [toyQuantity, setToyQuantity] = useState("");


  const[teacherDetails,setTeacher]=useState(false);
  const[doctorDetails,setDoctor]=useState(false);

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
    setShowMedicalDevice(false);
    setShowMedicalAppointment(false);


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

    setOpen(true);
  }

  return (
    <div>      <Panel/>
    
    <div style={{ marginTop: "20px", marginLeft: "40px" }}>
      <Grid container spacing={2} justifyContent="center">
        {initialData.map((item) => (
          item.quantity === item.donated ? (
            <div key={item.id}>
              <Grid item xs={12} sm={6} md={4} key={item.id}>
            <div style={{ position: "relative" }}>
              {" "}
              {/* Wrap each card and button in a div with relative positioning */}
              <Card
                sx={{
                  boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.1)",
                  height: 400,
                  width: 385,
                  marginRight:5,
                  marginTop:3,
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




              
            </div>
          ):null
        ))}
          
          
        
      </Grid>

      <Dialog open={open} fullWidth maxWidth="md">
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
            <div style={{display:"flex"}}>
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
              <div >
              
                <div className="box">
                <label style={{fontSize:'18px'}}>Teacher Details :</label>
                  <br />
                  <br />
                  
                  <label>Teacher Name : Wael </label>
                  <br />
                  <label>Teacher Contact Number : 01227272 </label>
                  <br />
                </div>
              
              </div>
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
  
            <div style={{display:'flex'}}>
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
              <div >
              
              <div className="box">
              <label style={{fontSize:'18px'}}>Doctor Details :</label>
                <br />
                <br />
                
                <label>Doctor Name : Mohamed </label>
                <br />
                <label>Doctor Specialty  : Heart </label>
                <br />
                <label>Doctor Contact Number : 01227272 </label>
                <br /><label>Doctor Clinc address : tagmo3,new cairo </label>
                <br />
                <label>Doctor Clinic google maps link : gm.com/clinic </label>
                <br />
              </div>
            
            </div>
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
              <button
                className="button-org"
                style={{ width: "150px", marginTop: "10px" }}
              >
                show donor details
              </button>
              <br/>
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
                setOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    </div>
  );
};

export default FulFilledRequests;
