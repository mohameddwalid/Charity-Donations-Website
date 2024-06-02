import React, { useState, useEffect } from "react";

import CardMedia from "@mui/material/CardMedia";
import { Card, CardContent, Grid, Dialog, DialogContent } from "@mui/material";
import shirt from "./Images/IMG1.jpg";
import Pants from "./Images/IMG10.jpg";
import Apple from "./Images/Apples.png";
import Pens from "./Images/pens.webp";
import CAR from "./Images/CAR.jpg";
import girlbaby from "./Images/girlbaby.jpg";
import Croissants from "./Images/Croissants.png";
import EnglishBook from "./Images/englishbook.png";
import Panadol from "./Images/panadol.jpg";
import Sama3a from "./Images/sama3at2.jpg";
import Blood from "./Images/Blood.jpeg";
import Session from "./Images/Session2.jpeg";
import MedApp from "./Images/MedApp.jpeg"
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { NavbarAdmin } from "./NavbarAdmin";

export const Manage_requests = () => {
  const [open, setOpen] = useState(false);

  const [initialData, setItems] = useState([
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
      picture: Apple,
      donated: "2",
    },
    {
      id: 4,
      category: "Food",
      type: "Baked goods", // Food Type
      item: "Croissants", // Food Item
      quantity: "55",
      picture: Croissants,
      donated: "2",
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
      donated: "30",
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
      picture: CAR,
      donated: "2",
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
      type: "Medications", // Item Type (medication, device, equipment)
      use: "Headache and Fevere", // Medical use or device use
      name: "Panadol",
      quantity: "20",
      donated: "1",
      picture: Panadol,
    },
    {
      id: 10,
      category: "Medical",
      type: "Medical Equipments", // Item Type (medication, device, equipment)
      use: "Measuring body heartbeat", // Medical use or device use
      name: "Stethoscope",
      quantity: "2",
      donated: "1",

      picture: Sama3a,
    },

    {
      id: 11,
      category: "Blood Donation",
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
      category: "School",
      SchoolCategory: "Session",
      subj: "Math",
      area: "tagmo3",
      gov: "cairo",
      nStudents: "5",
      gmLink: "googlemaps.com/tagmo3",
      donated: "0",
      quantity: "3 sessions",
      picture: Session,

    },
    {
      id: 13,
      category: "Medical",
      name: "Medical Appointments",
      type: "Heart diseases",
      donated: "0",
      quantity: "1",
      picture: MedApp,
    },
  ]); // Initialize initialData with your data
  const [selectedOrganization, setSelectedOrganization] = React.useState(""); // State for selected organization
  const [open1, setOpen1] = React.useState(false); // State for dialog
  const [open2, setOpen2] = React.useState(false); // State for dialog

  const handleAccept = (id, organization) => {
    setItems(initialData.filter((item) => item.id !== id));
    setSelectedOrganization(organization);
    setOpen2(true);
  };

  const handleReject = (id, organization) => {
    setItems(initialData.filter((item) => item.id !== id));
    setSelectedOrganization(organization);
    setOpen1(true);
  };

  // Inside your functional component

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
  const [toyQuantity, setToyQuantity] = useState("");

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

  // Medical Equipment category states
  const [equipmentType, setEquipmentType] = useState("");
  const [equipmentUse, setEquipmentUse] = useState("");
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentQuantity, setEquipmentQuantity] = useState("");
  // Assuming syr is an imported image
  const [equipmentPicture, setEquipmentPicture] = useState("");

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

  const [showSchoolStationery, setShowSchoolStationery] = useState(false);
  const [stationeryTitle, setStationeryTitle] = useState(false);
  const [stationeryQuantity, setStationeryQuantity] = useState(false);
  const [stationeryPicture, setStationeryPicture] = useState(false);

  //Medical Appointmnts
  const [showMedicalAppointments, setshowMedicalAppointments] = useState(false);
  const [appointmenttype, setAppointmenttype] = useState(false);
  const [appointmentname, setAppointmentname] = useState(false);
  const [appointmentquantity, setAppointmentquantity] = useState(false);
  const [appointmentPicture, setAppointmentPicture] = useState(false);

  function handleOpen(item) {
    setShowClothes(false);
    setShowFood(false);
    setShowToys(false);
    setShowMedication(false);
    setShowBooks(false);
    setShowMedicalEquipment(false);
    setShowSchoolSession(false);
    setShowBloodDonation(false);
    setShowSchoolStationery(false);
    setshowMedicalAppointments(false);

    // Reset all states to their initial values
    setStationeryTitle("");
    setStationeryQuantity("");
    setStationeryPicture("");

    setAppointmenttype("");
    setAppointmentname("");
    setAppointmentquantity("");
    setAppointmentPicture("");

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
    setToyQuantity("");
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
        if (item.type === "Medications") {
          setShowMedication(true);
          setMedicationType(item.type);
          setMedicationUse(item.use);
          setMedicationName(item.name);
          setMedicationQuantity(item.quantity);
          setMedicationPicture(item.picture);
        } else if (item.type === "Medical Equipments") {
          setShowMedicalEquipment(true);
          setEquipmentType(item.type);
          setEquipmentUse(item.use);
          setEquipmentName(item.name);
          setEquipmentQuantity(item.quantity);
          setEquipmentPicture(item.picture);
        } else if (item.name === "Medical Appointments") {
          setshowMedicalAppointments(true);
          setAppointmenttype(item.type);
          setAppointmentname(item.name);
          setAppointmentquantity(item.quantity);
          setAppointmentPicture(item.picture);
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
        } else if (item.SchoolCategory === "School supplies") {
          setShowSchoolStationery(true);
          setStationeryTitle(item.title);
          setStationeryQuantity(item.quantity);
          setStationeryPicture(item.picture);
        }
        break;
      case "Blood Donation":
        setShowBloodDonation(true);
        setBloodDonationName(item.name);
        setBloodDonationType(item.type);
        setBloodDonationHospital(item.hospital);
        setBloodDonationArea(item.area);
        setBloodDonationGov(item.gov);
        setBloodDonationAddress(item.address);
        break;
      default:
        break;
    }

    setOpen(true);
  }

  return (
    <div><NavbarAdmin/>
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
                    item.category === "Food" ||
                    item.category === "Blood Donation") && (
                    <div>
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        Category : {item.category}
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
                      <br />
                    </div>
                  )}
                  {item.category === "Medical" &&
                    item.type === "Medications" && (
                      <div>
                        <label
                          style={{
                            fontFamily: "serif",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          Category : {item.type}
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
                        <br />
                      </div>
                    )}
                  {item.category === "Medical" && item.type === "Medical Equipments" && (
                    <div>
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        Category : {item.type}
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
                      <br />
                    </div>
                  )}
                  {item.category === "Medical" && item.name === "Medical Appointments" && (
                    <div>
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        Category : {item.name}
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
                      <br />
                    </div>
                  )}
                  {item.category === "School" && (
                    <div>
                      <label
                        style={{
                          fontFamily: "serif",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        Category : {item.SchoolCategory}
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
                    <Button
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
                      style={{ marginRight: "10px", maxHeight: "50px" }}
                      onClick={() => {
                        handleOpen(item);
                      }}
                    >
                      Details
                    </Button>

                    <Button
                      svariant="outlined"
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
                      style={{ marginRight: "10px", maxHeight: "50px" }}
                      onClick={() => handleAccept(item.id, item.organization)}
                    >
                      Accept Request
                    </Button>
                    <Button
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
                      style={{ marginRight: "10px", maxHeight: "50px" }}
                      onClick={() => handleReject(item.id, item.organization)}
                    >
                      Reject Request
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Grid>
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
          )}

          {showSchoolStationery && (
            <div>
              <label>Category : School supplies</label>
              <br />
              <label>Title : {stationeryTitle}</label>
              <br />
              <label>Quantity : {stationeryQuantity}</label>
              <br />
            </div>
          )}

          {showMedicalAppointments && (
            <div>
              <label>Category : Medical</label>
              <br />
              <label>Name : {appointmentname}</label>
              <br />
              <label>Type : {appointmenttype}</label>
              <br />
              <label>Quantity : {appointmentquantity}</label>
              <br />
            </div>
          )}

          {/* {item.category === 'School' && item.SchoolCategory ==='Supplies' && (
                                                          <div>
                                                          </div>
                                                      )} */}
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
            <Button
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fd580b",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ff6e40",
                },
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
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
    </div>
    </div>
  );
};
