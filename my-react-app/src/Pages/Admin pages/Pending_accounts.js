import * as React from "react";
import Admintitle from "./Admintitle";
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
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AndalusiaImg from "./Images/AndalusiaImg.jpg";
import Andalusia from "./Images/Andalusia.jpg";
import MisrImg from "./Images/MisrImg.jpg";
import Misr from "./Images/Misr.jpg";
import Magdy from "./Images/magdy.jpg";
import Magdyloc from "./Images/magdyloc.png";
import Ta3am from "./Images/ta3am.jpg";
import Ta3amloc from "./Images/ta3amloc.png";
import Resala from "./Images/Resala.jpeg";
import Resalaloc from "./Images/resalaloc.png";
import Elkher from "./Images/elkher.jpg";
import Elkherloc from "./Images/elkherloc.png";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import {NavbarAdmin} from './NavbarAdmin';

export const Pending_accounts = () => {
  const [items, setItems] = React.useState([
    {
      id: 1,
      organization: "Andalusia Hospita",
      Totalrequests: "/ Total amount of requests:12",
      fieldOfWork: "Blood",
      details:
        "Address:4G/6, Sayed Anbar, Ezbet Fahmy, Maadi, Cairo Governorate, Egypt<br/>Phone Number:16781",
      coverSrc: AndalusiaImg,
      Locpic: Andalusia,
    },
    {
      id: 2,
      organization: "Misr International Hospital",
      Totalrequests: "/  Total amount of requests:2",
      fieldOfWork: "Blood",
      details: "Address:42 Abd El-Raheem Sabry, Ad Doqi A, Dokki, Giza<br/>Phone Number:0216010",
      coverSrc: MisrImg,
      Locpic: Misr,
    },
    {
      id: 3,
      organization: "Magdy Yacoub Heart Foundation",
      Totalrequests: "/  Total amount of requests:34",
      fieldOfWork: "Health",
      details: "Address:St. off, 7 Aziz Abaza, 26 July St, Zamalek, Cairo<br/>Phone Number:19731",
      coverSrc: Magdy,
      Locpic: Magdyloc,
    },
    {
      id: 4,
      organization: "Food Bank in Egypt",
      Totalrequests: "/  Total amount of requests:3",
      fieldOfWork: "Food",
      details: "Address: 44 Gamal Abd Al Naser Axis, New Cairo 3, Cairo<br/>Phone Number:0227586200",
      coverSrc: Ta3am,
      Locpic: Ta3amloc,
    },
    {
      id: 5,
      organization: "Resala Foundation",
      Totalrequests: "/  Total amount of requests:5",
      fieldOfWork: "Orphan Care",
      details:
        "Address:Mosaddeq street in front of ibn sina hospital and el-ezaby, Dokki, Giza<br/>Phone Number:19450",
      coverSrc: Resala,
      Locpic: Resalaloc,
    },
    {
      id: 6,
      organization: "Misr Al-Kheir Foundation ",
      Totalrequests: "/  Total amount of requests:8",
      fieldOfWork: "Education",
      details:
        "Address: 29 Al-Iqbal Street, Loran, next to McDonald’s - Loran, Alexandria<br/>Phone Number:15024",
      coverSrc: Elkher,
      Locpic: Elkherloc,
    },
    {
      id: 7,
      organization: "Ahmed Saleh",
      Totalrequests: "/  Total amount of donations:18",
      fieldOfWork: "Teacher",
      details:
        "Name: Ahmed Saleh---Gender: Male<br/>Email: ahmed@gmail.com---Job: Teacher",
      coverSrc: "/static/images/avatar/${item.id}.jpg",    },
    {
      id: 8,
      organization: "Khaled Amr",
      Totalrequests: "/  Total amount of donations:6",
      fieldOfWork: "Doctor",
      details:
        "Name: Khaled Amr---Gender: Male<br/>Email: khaled@gmail.com---Job: Doctor",
      coverSrc: "/static/images/avatar/${item.id}.jpg",    },
    {
      id: 9,
      organization: "Sarrah El Gazzar",
      Totalrequests: "/  Total amount of donations:10",
      fieldOfWork: "Doctor",
      details:
        "Name: Sarrah El Gazzar---Gender: Female<br/>Email: sarrah@gmail.com---Job: Doctor",
      coverSrc: "/static/images/avatar/${item.id}.jpg",    },
    {
      id: 10,
      organization: "Mohamed Walid",
      Totalrequests: "/  Total amount of donations:1",
      fieldOfWork: "Doctor",
      details:
        "Name: Mohamed Walid---Gender: Male<br/>Email: Mohamed@gmail.com---Job: Doctor",
      coverSrc: "/static/images/avatar/${item.id}.jpg",    },
    {
      id: 11,
      organization: "Shahd Mohamed",
      Totalrequests: "/  Total amount of donations:10",
      fieldOfWork: "Doctor",
      details:
        "Name: Shahd Mohamed---Gender: Female<br/>Email: shahd@gmail.com---Job: Doctor",
      coverSrc: "/static/images/avatar/${item.id}.jpg",    },
    {
      id: 12,
      organization: "Ali Hani",
      Totalrequests: "/  Total amount of donations:4",
      fieldOfWork: "Teacher",
      details:
        "Name: Ali Hani---Gender: Male<br/>Email: ali@gmail.com---Job: Teacher",
      coverSrc: "/static/images/avatar/${item.id}.jpg",    },
  ]);

  const [selectedOrganization, setSelectedOrganization] = React.useState(""); // State for selected organization
  const [selectedpic, setSelectedpic] = React.useState(""); // State for selected organization
  const [open1, setOpen1] = React.useState(false); // State for dialog
  const [open2, setOpen2] = React.useState(false); // State for dialog
  const [open3, setOpen3] = React.useState(false); // State for dialog

  const handleLoc = (id, organization,Locpic) => {
    setSelectedOrganization(organization);
    setSelectedpic(Locpic);
    setOpen3(true);
  };

  const handleAccept = (id, organization) => {
    setItems(items.filter((item) => item.id !== id));
    setSelectedOrganization(organization);
    setOpen2(true);
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
  const handleDownload = () => {
    // Replace '/path/to/your/file.pdf' with the actual file URL
    const fileUrl = "/path/to/your/file.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", true);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div><NavbarAdmin/>
    <div>
      {/* <Admintitle titleText="Pending Accounts" /> */}

      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {items.map((item, index) => (
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
                    {item.organization}
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
                    <Typography
                      dangerouslySetInnerHTML={{ __html: item.details }}
                    ></Typography>
                  </React.Fragment>
                }
              />
              {item.fieldOfWork !== "Doctor" && item.fieldOfWork !== "Teacher" && (
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
              width: "100px",
              height: "40px",
            }}
            style={{
              marginRight: "10px",
              marginTop: "40px",
              height: "50px",
            }}
            onClick={() => handleLoc(item.id, item.organization,item.Locpic)}
          >
            Location
          </Button>
        )}
              <Button
                component="label"
                onClick={handleDownload}
                role={undefined}
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                style={{
                  marginRight: "20px",
                  marginTop: "40px",
                  height: "50px",
                  width:"200px"
                }}
                sx={{
                  borderRadius: "2px",
                  backgroundColor: "#fd580b",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#ff6e40",
                  },
                }}
              >
                Download files
                <VisuallyHiddenInput type="file" />
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
                style={{
                  marginRight: "10px",
                  marginTop: "40px",
                  height: "50px",
                }}
                onClick={() => handleAccept(item.id, item.organization)}
              >
                Accept
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
                style={{ marginTop: "40px", height: "50px" }}
                onClick={() => handleReject(item.id, item.organization)}
              >
                Reject
              </Button>
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
      <Dialog open={open3} onClose={() => setOpen3(false)}>
        <DialogTitle>{selectedOrganization} Location</DialogTitle>
        <DialogContent>
          <img src={selectedpic} alt="Location Picture" style={{width: "100%"}}/>
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
            onClick={() => setOpen3(false)}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
};

