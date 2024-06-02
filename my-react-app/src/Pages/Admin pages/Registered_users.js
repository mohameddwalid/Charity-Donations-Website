import React, { useEffect } from "react";
// import Admintitle from "../Admintitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import AndalusiaImg from "./Images/AndalusiaImg.jpg";
import MisrImg from "./Images/MisrImg.jpg";
import Magdy from "./Images/magdy.jpg";
import Ta3am from "./Images/ta3am.jpg";
import Resala from "./Images/Resala.jpeg";
import Elkher from "./Images/elkher.jpg";
import { NavbarAdmin } from "./NavbarAdmin";

export const Registered_users = () => {
  const [items, setItems] = React.useState([
    {
      id: 1,
      organization: "Andalusia Hospita",
      Totalrequests: "/ Total amount of requests:12",
      fieldOfWork: "Blood",
      details:
        "Address:4G/6, Sayed Anbar, Ezbet Fahmy, Maadi, Cairo Governorate, Egypt",
      coverSrc: AndalusiaImg,
    },
    {
      id: 2,
      organization: "Misr International Hospital",
      Totalrequests: "/  Total amount of requests:2",
      fieldOfWork: "Blood",
      details: "Address:42 Abd El-Raheem Sabry, Ad Doqi A, Dokki, Giza",
      coverSrc: MisrImg,
    },
    {
      id: 3,
      organization: "Magdy Yacoub Heart Foundation",
      Totalrequests: "/  Total amount of requests:34",
      fieldOfWork: "Health",
      details: "Address:St. off, 7 Aziz Abaza, 26 July St, Zamalek, Cairo",
      coverSrc: Magdy,
    },
    {
      id: 4,
      organization: "Food Bank in Egypt",
      Totalrequests: "/  Total amount of requests:3",
      fieldOfWork: "Food",
      details: "Address: 44 Gamal Abd Al Naser Axis, New Cairo 3, Cairo",
      coverSrc: Ta3am,
    },
    {
      id: 5,
      organization: "Resala Foundation",
      Totalrequests: "/  Total amount of requests:5",
      fieldOfWork: "Orphan Care",
      details:
        "Address:Mosaddeq street in front of ibn sina hospital and el-ezaby, Dokki, Giza",
      coverSrc: Resala,
    },
    {
      id: 6,
      organization: "Misr Al-Kheir Foundation ",
      Totalrequests: "/  Total amount of requests:8",
      fieldOfWork: "Education",
      details:
        "Address: 29 Al-Iqbal Street, Loran, next to McDonald’s - Loran, Alexandria",
      coverSrc: Elkher,
    },
    {
      id: 7,
      organization: "Ahmed Saleh",
      Totalrequests: "/  Total amount of donations:18",
      fieldOfWork: "Teacher",
      details: "Name: Ahmed Saleh<br/>Gender: Male<br/>Email: ahmed@gmail.com<br/>Job: Teacher",
      coverSrc: "/static/images/avatar/${item.id}.jpg",
    },
    {
      id: 8,
      organization: "Khaled Amr",
      Totalrequests: "/  Total amount of donations:6",
      fieldOfWork: "Doctor",
      details: "Name: Khaled Amr<br/>Gender: Male<br/>Email: khaled@gmail.com<br/>Job: Doctor",
      coverSrc: "/static/images/avatar/${item.id}.jpg",
    },
    {
      id: 9,
      organization: "Sarrah El Gazzar",
      Totalrequests: "/  Total amount of donations:10",
      fieldOfWork: "Doctor",
      details: "Name: Sarrah El Gazzar<br/>Gender: Female<br/>Email: sarrah@gmail.com<br/>Job: Doctor",
      coverSrc: "/static/images/avatar/${item.id}.jpg",
    },
    {
      id: 10,
      organization: "Mohamed Walid",
      Totalrequests: "/  Total amount of donations:1",
      fieldOfWork: "Doctor",
      details: "Name: Mohamed Walid<br/>Gender: Male<br/>Email: Mohamed@gmail.com<br/>Job: Doctor",
      coverSrc: "/static/images/avatar/${item.id}.jpg",
    },
    {
      id: 11,
      organization: "Shahd Mohamed",
      Totalrequests: "/  Total amount of donations:10",
      fieldOfWork: "Doctor",
      details: "Name: Shahd Mohamed<br/>Gender: Female<br/>Email: shahd@gmail.com<br/>Job: Doctor",
      coverSrc: "/static/images/avatar/${item.id}.jpg",
    },
    {
      id: 12,
      organization: "Ali Hani",
      Totalrequests: "/  Total amount of donations:4",
      fieldOfWork: "Teacher",
      details: "Name: Ali Hani<br/>Gender: Male<br/>Email: ali@gmail.com<br/>Job: Teacher",
      coverSrc: "/static/images/avatar/${item.id}.jpg",
    },
  ]);

  const [selectedOrganization, setSelectedOrganization] = React.useState(""); // State for selected organization
  const [selectedItemDetails, setSelectedItemDetails] = React.useState("");
  const [open1, setOpen1] = React.useState(false); // State for dialog
  const [open2, setOpen2] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState(null);
  const [list, setList] = React.useState(items);
  const [resultsFound, setResultsFound] = React.useState(true);

  const handleSelectType = (type) => setSelectedType(type);

  const applyFilters = () => {
    let updatedList = items;

    if (selectedType) {
      updatedList = updatedList.filter(
        (item) => item.fieldOfWork === selectedType
      );
    }
    setList(updatedList);
    setResultsFound(updatedList.length > 0);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedType]);

  const handleDelete = (id, organization) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setSelectedOrganization(organization);
    setOpen1(true);

    // Update the list directly after removing an item
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleDetails = (details, organization) => {
    setSelectedItemDetails(details);
    setSelectedOrganization(organization);

    setOpen2(true);
  };

  return (
    <div><NavbarAdmin/>
    <div style={{ display: "flex" }}>
      <div style={{ width: "15%" }}>
        <div>
          <h2>Filter by Section</h2>
          <Stack spacing={2} direction="column">
            <Button
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fd580b",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ff6e40",
                },
                height: "50px", // Adjust height
              }}
              // style={{ maxWidth: "100px" }}
              onClick={() => handleSelectType(null)}
            >
              All
            </Button>
            <Button
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fd580b",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ff6e40",
                },
                height: "50px", // Adjust height
              }}
              // style={{ maxWidth: "100px" }}
              onClick={() => handleSelectType("Health")}
            >
              Health
            </Button>
            <Button
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fd580b",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ff6e40",
                },
                height: "50px", // Adjust height
              }}
              // style={{ maxWidth: "100px" }}
              onClick={() => handleSelectType("Blood")}
            >
              Blood
            </Button>
            <Button
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fd580b",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ff6e40",
                },
                height: "50px", // Adjust height
              }}
              // style={{ maxWidth: "100px" }}
              onClick={() => handleSelectType("Food")}
            >
              Food
            </Button>
            <Button
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fd580b",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ff6e40",
                },
                height: "50px", // Adjust height
              }}
              // style={{ maxWidth: "100px" }}
              onClick={() => handleSelectType("Orphan Care")}
            >
              Orphan Care
            </Button>
            <Button
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fd580b",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ff6e40",
                },
                height: "50px", // Adjust height
              }}
              // style={{ maxWidth: "100px" }}
              onClick={() => handleSelectType("Education")}
            >
              Education
            </Button>
            <Button
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fd580b",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ff6e40",
                },
                height: "50px", // Adjust height
              }}
              // style={{ maxWidth: "100px" }}
              onClick={() => handleSelectType("Teacher")}
            >
              Teachers
            </Button>
            <Button
              sx={{
                borderRadius: "2px",
                backgroundColor: "#fd580b",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ff6e40",
                },
                height: "50px", // Adjust height
              }}
              // style={{ maxWidth: "100px" }}
              onClick={() => handleSelectType("Doctor")}
            >
              Doctors
            </Button>
          </Stack>
        </div>
      </div>

      <div style={{ width: "85%" }}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {list.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={item.organization}
                    src={item.coverSrc}
                    sx={{ width: 100, height: 100, marginRight: "20px" }} // Adjust width and height as needed
                  />
                </ListItemAvatar>
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
                      {item.organization + item.Totalrequests}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          display: "inline",
                          fontSize: "1.2rem", // Increase font size
                          marginTop: "0px", // Move the text down
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {"Section:" + item.fieldOfWork}
                      </Typography>
                    </React.Fragment>
                  }
                />
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
                    width: "100px", // Adjust width
                    height: "40px", // Adjust height
                  }}
                  style={{ marginRight: "10px", marginTop: "35px" }}
                  onClick={() => handleDetails(item.details, item.organization)}
                >
                  Details
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
                    width: "100px", // Adjust width
                    height: "40px", // Adjust height
                  }}
                  style={{ marginTop: "35px" }}
                  onClick={() => handleDelete(item.id, item.organization)}
                >
                  Delete
                </Button>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>

        <Dialog open={open1} onClose={() => setOpen1(false)}>
          <DialogTitle>Account Deleted</DialogTitle>
          <DialogContent>
            <p>{selectedOrganization} Account was successfully deleted.</p>
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
          <DialogTitle>{selectedOrganization}</DialogTitle>
          <DialogContent>
            <Typography
              dangerouslySetInnerHTML={{ __html: selectedItemDetails }}
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
              onClick={() => setOpen2(false)}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
    </div>
  );
};
