// import Admintitle from "../Admintitle";
import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { NavbarAdmin } from "./NavbarAdmin";

export const Account = () => {
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmNewPassword, setConfirmNewPassword] = React.useState("");
  const [open, setOpen] = React.useState(false); // State for dialog

  // Function to handle changes in the textboxes
  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  // Function to handle button click
  const handleSubmit = () => {
    // Add your logic here to handle form submission

    // Open the dialog when password is updated
    setOpen(true);
  };

  // Determine if the button should be disabled based on textbox values
  const isButtonDisabled = !(
    currentPassword &&
    newPassword &&
    confirmNewPassword &&
    newPassword === confirmNewPassword
  );

  // Determine if the confirm password helper text should be shown
  const showConfirmPasswordHelperText =
    newPassword !== confirmNewPassword && confirmNewPassword !== "";

  return (
    <div>
      <NavbarAdmin />
      <div>
        {/* <Admintitle titleText="Account Settings" /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Username: Admin@gmail.com</h1>
          <s1 style={{ marginBottom: "10px" }}>Current Password</s1>

          <form noValidate autoComplete="off" style={{ marginBottom: "20px" }}>
            <FormControl sx={{ width: "25ch" }}>
              <OutlinedInput
                sx={{ maxHeight: "45px" }}
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
              />
              <MyFormHelperText />
            </FormControl>
            <LockIcon sx={{ marginTop: "15px" }} />
          </form>
          <s1 style={{ marginBottom: "10px" }}>New Password</s1>

          <form noValidate autoComplete="off" style={{ marginBottom: "20px" }}>
            <FormControl sx={{ width: "25ch" }}>
              <OutlinedInput
                sx={{ maxHeight: "45px" }}
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
              <MyFormHelperText />
            </FormControl>
            <LockIcon sx={{ marginTop: "15px" }} />
          </form>
          <s1 style={{ marginBottom: "10px" }}>Confirm New Password</s1>
          <form noValidate autoComplete="off" tyle={{ marginBottom: "30px" }}>
            <FormControl sx={{ width: "25ch" }}>
              <OutlinedInput
                sx={{ maxHeight: "45px" }}
                type="password"
                placeholder="New Password"
                value={confirmNewPassword}
                onChange={handleConfirmNewPasswordChange}
              />
              {showConfirmPasswordHelperText && (
                <FormHelperText style={{ color: "red" }}>
                  *Passwords do not match
                </FormHelperText>
              )}
            </FormControl>
            <LockIcon sx={{ marginTop: "15px", marginBottom: "25px" }} />
          </form>
          <Button
            disabled={isButtonDisabled}
            onClick={handleSubmit}
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
            Confirm
          </Button>
        </div>

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Password Updated</DialogTitle>
          <DialogContent>
            <p>Your password has been successfully updated.</p>
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
              onClick={() => setOpen(false)}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Account;

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "";
    }

    return "";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}
