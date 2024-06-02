import * as React from "react";
import Stack from '@mui/material/Stack';
import Adminbutton from "./Adminbutton";
// import Admintitle from "../Admintitle";

export const Adminhome = () => {
  return (
    <div>
      {/* <Admintitle titleText="Admin Home" /> */}
        <br/> <br/> <br/> <br/> <br/>
      <Stack
        direction="row"
        spacing={30}
        style={{ display: "flex", justifyContent: "center" }}
        sx={{ marginBottom: "50px" }}
      >
        <Adminbutton href="Pending_accounts" buttonText="View Pending Organisations and Donors" />

        <Adminbutton href="Manage_requests" buttonText="Manage Organisations and Donors Requests" />
      </Stack>
      <Stack
        direction="row"
        spacing={30}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Adminbutton href="Account" buttonText="Account Settings" />
          
        
        <Adminbutton href="Registered_users" buttonText="View Registered Organisations & Donors" />
          
      </Stack>
    </div>
  );
};


