 

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import { useNavigate } from 'react-router-dom';
import NotificationBox from './OrgNotificationsList';
import MenuBar from './MenuBar';
import { Link } from 'react-router-dom';





// Define styles for the popover content
const PopoverContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function Panel() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mailAnchorEl, setMailAnchorEl] = React.useState(null); // Anchor for the mail icon popover
  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null); // Anchor for the notification icon popover
  const navigate = useNavigate(); // Initialize navigate function

  const handleNavigateToLogout = () => {
    navigate('./Profile'); // Navigate to the login page
  };

  const handleNavigateToMyAccount = () => {
    navigate('./Profile'); // Navigate to the myAccount page
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMailOpen = Boolean(mailAnchorEl); // State to manage mail popover
  const isNotificationOpen = Boolean(notificationAnchorEl); // State to manage notification popover

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMailIconClick = (event) => {
    setMailAnchorEl(event.currentTarget);
  };

  const handleNotificationIconClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleMailClose = () => {
    setMailAnchorEl(null);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => { navigate("/AccountDetails") }}>My account</MenuItem>
      {/* <MenuItem onClick={() => { navigate("/Profile") }}>Log out</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#333' }}>
        <Toolbar>
          <MenuBar/>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', color: '#fd580b',marginLeft:'30px' } }}
          >
            CHARITY NAME
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Link to="/"><button className= "button-org" style={{marginLeft:'10px',width:'60px'}} >Home </button></Link>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNotificationIconClick}
            >
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      {/* Render the popover for mail icon */}
      <Popover
        open={isMailOpen}
        anchorEl={mailAnchorEl}
        onClose={handleMailClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        
      </Popover>
      {/* Render the popover for notification icon */}
      <Popover
        open={isNotificationOpen}
        anchorEl={notificationAnchorEl}
        onClose={handleNotificationClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <PopoverContent>
          <Typography variant="body1"><NotificationBox/></Typography>
        </PopoverContent>
      </Popover>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}







