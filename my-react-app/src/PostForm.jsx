import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ImagePopup from "./OrgPopUp";
import Panel from './AppBar';


let catg = "";
let schoolDon = "";
let medDon = "";

const VisuallyHiddenInput = styled("input")({
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

const PostForm = () => {

  const[popUp,setPopUp]=useState(false);



  const [category, setCategory] = useState("");
  const [clothes, setClothes] = useState(false);
  const [toys, setToys] = useState(false);
  const [food, setFood] = useState(false);
  const [med, setMed] = useState(false);
  const [school, setSchool] = useState(false);
  const [blood, setBlood] = useState(false);

  const [medication, setMedication] = useState(false);
  const [device, setDevice] = useState(false);
  const [equipment, setEquiment] = useState(false);
  const[app,setApp]=useState(false);
  

  const [sess, setSess] = useState(false);
  const [book, setBook] = useState(false);
  const [supp, setSupp] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  function handleMed(e) {
    medDon = e.target.value;
    if (medDon == "medication") {
      setMedication(true);
      setDevice(false);
      setEquiment(false);
      setApp(false);

    } else if (medDon == "devices") {
      setMedication(false);
      setDevice(true);
      setEquiment(false);
      setApp(false);

    } else if (medDon == "equipment") {
      setMedication(false);
      setDevice(false);
      setEquiment(true);
      setApp(false);

    }else if (medDon == "appointment") {
      setMedication(false);
      setDevice(false);
      setEquiment(false);
      setApp(true);
    }
  }

  function handleSchool(e) {
    schoolDon = e.target.value;
    if (schoolDon === "Sessions") {
      setSess(true);
      setBook(false);
      setSupp(false);
    } else if (schoolDon == "Books") {
      setSess(false);
      setBook(true);
      setSupp(false);
    } else if (schoolDon == "Supplies") {
      setSess(false);
      setBook(false);
      setSupp(true);
    }
  }

  function handleCategory(e) {
    setCategory(e.target.value);
    catg = e.target.value;
    if (catg === "Clothes") {
      setClothes(true);
      setToys(false);
      setFood(false);
      setMed(false);
      setSchool(false);
      setBlood(false);
    } else if (catg == "Toys") {
      setClothes(false);
      setToys(true);
      setFood(false);
      setMed(false);
      setSchool(false);
      setBlood(false);
    } else if (catg == "Food") {
      setClothes(false);
      setToys(false);
      setFood(true);
      setMed(false);
      setSchool(false);
      setBlood(false);
    } else if (catg == "Medical") {
      setClothes(false);
      setToys(false);
      setFood(false);
      setMed(true);
      setSchool(false);
      setBlood(false);
    } else if (catg == "School") {
      setClothes(false);
      setToys(false);
      setFood(false);
      setMed(false);
      setSchool(true);
      setBlood(false);
    } else if (catg == "Blood") {
      setClothes(false);
      setToys(false);
      setFood(false);
      setMed(false);
      setSchool(false);
      setBlood(true);
    }
  }

  return (
    <div>      <Panel/>
    
    <div className="container">
      <div className="box">
        <label>Choose a category for your request</label>
        <select onChange={(e) => handleCategory(e)}>
          <option value="" disabled selected>
            --Select your preference--
          </option>
          <option value="Clothes">Clothes</option>
          <option value="Toys">Toys</option>
          <option value="Food">Food</option>
          <option value="Medical">Medical</option>
          <option value="School">School</option>
          <option value="Blood"> Blood Donations</option>
        </select>
      </div>

      <div className="box">
        <div style={{ display: clothes ? "block" : "none" }}>
          <label> Clothes Type:</label>
          <select>
            {/* onChange={(e) => handleTypeSelection(e)} */}
            <option value="" disabled selected>
              --Select Clothes Type--
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
          <select>
            {/* onChange={(e) => handleTypeSelection(e)} */}
            <option value="" disabled selected>
              --Select Season--
            </option>
            <option value="Winter">Winter</option>
            <option value="Summer">Summer</option>
            <option value="Spring">Spring</option>
            <option value="Autmun">Autmun</option>
          </select>
          <br />
          <br />
          <label>Gender :</label>
          <select>
            <option value="" disabled selected>
              --Select Gender--
            </option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
          <br />
          <br />

          <label>Size:</label>
          <select>
            {/* onChange={(e) => handleTypeSelection(e)} */}
            <option value="" disabled selected>
              --Select Size--
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
          <select>
            {/* onChange={(e) => handleTypeSelection(e)} */}
            <option value="" disabled selected>
              --Select Age Range--
            </option>
            <option value="Baby">1 to 6 years</option>
            <option value="6">6 to 12 years</option>
            <option value="12">12 to 18 years</option>
            <option value="18">18+ years</option>
          </select>
          <br />
          <br />

          <label>Material:</label>
          <input type="number" placeholder="Enter Material" required />
          <br />
          <br />
          <label>Quantity:</label>
          <input type="number" placeholder="Enter Quantity" required />
          <br />
          <br />

          {/* <input type="number" id="height" className="diet-form-textBox" placeholder='Enter Your Height(cm)'  value={hh} onChange={(e) => handleH(e)} required/> */}
        </div>
        <div style={{ display: toys ? "block" : "none" }}>
          <label>Toy Category :</label>
          <select>
            {/* onChange={(e) => handleTypeSelection(e)} */}
            <option value="" disabled selected>
              --Select Category--
            </option>
            <option value="M">board games</option>
            <option value="F">stuffed toys</option>
            <option value="F">dolls</option>
            <option value="F">sports</option>
            <option value="F">cars</option>
            <option value="F">outdoor</option>
          </select>
          <br />
          <br />
          <label>Gender :</label>
          <select>
            {/* onChange={(e) => handleTypeSelection(e)} */}
            <option value="" disabled selected>
              --Select Gender--
            </option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
          <br />
          <br />

          <label>Age :</label>
          <input type="number" placeholder="Enter Age" required />
          <br />

          <br />

          <label>Quantity:</label>
          <input type="number" placeholder="Enter Quantity" required />
          <br />
          <br />
          <label>Toy Picture :</label>
          <Button
            style={{ padding: "5px 30px", width: "100px" }}
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload
            <VisuallyHiddenInput type="file" />
          </Button>
          <br />
          <br />
        </div>
        <div style={{ display: food ? "block" : "none" }}>
          <label>Food Type :</label>
          <select>
            {/* onChange={(e) => handleTypeSelection(e)} */}
            <option value="" disabled selected>
              --Select Type--
            </option>
            <option value="Canned">fruits</option>
            <option value="Fresh">vegetables</option>
            <option value="Fresh">canned foods</option>

            <option value="Fresh"> fresh meals</option>
            <option value="Fresh">baked goods</option>
          </select>
          <br />
          <br />

          <label>What do you want?:</label>
          <input type="text" placeholder="Enter Food you want" required />
          <br />
          <br />
          <label>Quantity:</label>
          <input type="number" placeholder="Enter Quantity" required />
          <br />
          <br />
        </div>
        <div style={{ display: med ? "block" : "none" }}>
          <label>Medical Post Type :</label>
          <select onChange={(e) => handleMed(e)}>
            <option value="" disabled selected>
              --Select Type--
            </option>
            <option value="devices">medical devices</option>
            <option value="equipment"> medical equipment</option>
            <option value="medication">medication</option>
            <option value="appointment">Medical Appointments</option>

          </select>
          <br />
          <br />
          <div style={{ display: medication ? "block" : "none" }}>
            <label> Medical use :</label>
            <br />
            <input type="text" placeholder="Enter use" required />
            <br />

            <label> Item name :</label>
            <br />
            <input type="text" placeholder="Enter Item" required />
            <br />

            <label>Quantity :</label>
            <input type="text" placeholder="Enter quantity" required />
            <br />
          </div>
          <div style={{ display: device ? "block" : "none" }}>
            <label> device type :</label>
            <br />
            <input type="text" placeholder="Enter Item" required />
            <br />

            <label> use :</label>
            <br />
            <input type="text" placeholder="Enter use" required />
            <br />

            <label> Quantity :</label>
            <br />
            <input type="text" placeholder="Enter quantity" required />
            <br />

            <br />
            <label>Device/Supplies Picture :</label>
            <Button
              style={{ padding: "5px 30px", width: "100px" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload
              <VisuallyHiddenInput type="file" />
            </Button>
            <br />
            <br />
          </div>
          <div style={{ display: equipment ? "block" : "none" }}>
            <label> Equipment Name :</label>
            <br />
            <input type="text" placeholder="Enter Item" required />
            <br />

            <label> use :</label>
            <br />
            <input type="text" placeholder="Enter use" required />
            <br />

            <label> Quantity :</label>
            <br />
            <input type="text" placeholder="Enter quantity" required />
            <br />

            <br />
            <label>Device/Supplies Picture :</label>
            <Button
              style={{ padding: "5px 30px", width: "100px" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload
              <VisuallyHiddenInput type="file" />
            </Button>
            <br />
            <br />
          </div>
          <div style={{ display: app ? "block" : "none" }}>
         

          <label>Patient name :</label>
          <input type="text" placeholder="Enter name" required />
          <br />
          <br />

          <label>Age :</label>
          <input type="text" placeholder="Enter Age" required />
          <br />
          <br />

          <label>Gender :</label>
          <select>
            <option value="" disabled selected>
              --Select Gender--
            </option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
          <br />
          <br />

        
          <label>Weight (KG) :</label>
          <input type="number" placeholder="Enter Weight" required />
          <br />
          <br />

          <label>Medical Specialty :</label>
          <input type="text" placeholder="Enter Medical Specialty" required />
          <br />
          <br />

          <label>Case Description :</label>
          <input type="text" placeholder="Enter Case Description" required />
          <br />
          <br />
          
          <label>Area :</label>
          <input type="text" placeholder="Enter area" required />
          <br />
          <br />
          <label> Governorate :</label>
          <input type="text" placeholder="Enter governorate" required />
          <br />
          <br />
          <label> Address :</label>
          <input type="text" placeholder="Enter address" required />
          <br />
          <br />

          <label> Google maps link :</label>
          <input type="text" placeholder="Enter address" required />
          <br />
            

            <br />
            </div>

          <br />
        </div>
        <div style={{ display: school ? "block" : "none" }}>
          <br />
          <label>What do you need?:</label>
          <select onChange={(e) => handleSchool(e)}>
            <option value="" disabled selected>
              --Select--
            </option>
            <option value="Sessions">Sessions</option>
            <option value="Books">Books</option>
            <option value="Supplies">Stationary</option>
          </select>
          <br />
          {/* hena ha3ml states brdoo le kol option mel select , wa based aleh ha render coressponding form */}
          <div style={{ display: sess ? "block" : "none" }}>
            <label>Subject :</label>
            <input type="text" placeholder="Enter subject name" required />
            <br />

            <label>Area :</label>
            <input type="text" placeholder="Enter Area" required />
            <br />

            <label>governorate :</label>
            <input type="text" placeholder="Enter governorate" required />
            <br />

            <label>number of students :</label>
            <input
              type="text"
              placeholder="Enter number of students"
              required
            />
            <br />

            <label>Google maps location link :</label>
            <input type="text" placeholder="Enter link" required />
            <br />
          </div>
          <div style={{ display: book ? "block" : "none" }}>
            <br />

            <label>Book title :</label>
            <input type="text" placeholder="Enter book title" required />
            <br />
            <br />

            <label>Book Author :</label>
            <input type="text" placeholder="Enter book author" required />
            <br />
            <br />

            <label>Book Language :</label>
            <input type="text" placeholder="Enter book language" required />
            <br />
            <br />

            <label>Book Edition :</label>
            <input type="text" placeholder="Enter book edition" required />
            <br />
            <br />

            <label>Short Summary :</label>
            <input type="text" placeholder="Enter book summary" required />
            <br />
            <br />

            <label>Quantity :</label>
            <input type="number" placeholder="Enter quantity" required />
            <br />
            <br />

            <br />
            <br />

            <label>Book Picture :</label>
            <Button
              style={{ padding: "5px 30px", width: "100px" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
          <div style={{ display: supp ? "block" : "none" }}>
            <label>Enter the item you need :</label>
            <input type="text" placeholder="Enter Item" required />
            <br />

            <label>Quantity :</label>
            <input type="number" placeholder="Enter Quantity" required />
            <br />
          </div>

          <br />
        </div>
        <div style={{ display: blood ? "block" : "none" }}>
          <label>Patient name :</label>
          <input type="text" placeholder="Enter name" required />
          <br />
          <br />

          <label>Blood Type :</label>
          <input type="text" placeholder="Enter Blood Type" required />
          <br />
          <br />
          <label>hospital name :</label>
          <input type="text" placeholder="Enter hospital name" required />
          <br />
          <br />
          <label>hospital area :</label>
          <input type="text" placeholder="Enter hospital area" required />
          <br />
          <br />
          <label> governorate :</label>
          <input type="text" placeholder="Enter governorate" required />
          <br />
          <br />
          <label> hospital address :</label>
          <input type="text" placeholder="Enter hospital address" required />
          <br />
          <br />
        </div>

        <button
          className="button-org"
          type="submit"
          style={{ display: category ? "block" : "none" }}
          onClick={(e)=>{

            setPopUp(true);
          }}
        >
          Post
        </button>
      </div>
      
          {popUp && (
            <ImagePopup handleClose={() => setPopUp(false)} />
          )}




</div>
    </div>
  );
};
export default PostForm;
