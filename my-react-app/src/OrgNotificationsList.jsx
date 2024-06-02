import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import { Dialog,DialogContent, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";


import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function NotificationBox() {
  const navigate = useNavigate(); // Initialize navigate function
  // Example list of driver names
  const driverList = ["Ahmed", "Khaled", "Mohammed", "Yassin"];
  const timeList = ["3:45", "5:50", "6:15", "1 min"];
  

  const [initialData, setData] = useState([
    { id: '1', dropoffConfirmed: false },
    { id: '2', dropoffConfirmed: false },
    { id: '3', dropoffConfirmed: false },
    { id: '4', dropoffConfirmed: false }
  ]);

  const [openSch, setOpenSch] = useState(false);
  const[i,setI] = useState('');

  const handleConfirmDropoff = (index) => {
    const updatedData = [...initialData];
    updatedData[index].dropoffConfirmed = true;
    setData(updatedData);
    setOpenSch(false);
  };

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {driverList.map((driverName, index) => (
          <ListItem
            key={index}
            disableGutters
            secondaryAction={
              
              <Link to="/TrackOrg"><Button className="button-org" sx={{color:'orangered'}} ><ArrowForwardIcon/></ Button></Link>
              
            }
          >
            <ListItemText
              primary={`A Donor ,${driverName}, wants to fulfill your request`}
            />
          </ListItem>
        ))}
      </List>

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
                  sx={{ width: '100%' }}
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
    </div>
  );
}

