import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useNavigate} from 'react-router-dom';
import {ViewAllRequests} from "./ViewAllRequests";
import {SelectCategory} from "./SelectCategory";
import {RegisteredOrg} from "./RegisteredOrg";
import {Track} from "./Track";
import { Button } from "@mui/material";
export const MenuBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    const handleClick = (text) => {
      if (text === 'View All Donation Requests') {
        navigate('/allrequests');
      }
      if(text=='Choose Donation Category'){
        navigate('/category');
      }
      if(text=='View Registered Organization'){
        navigate('/registeredOrg');
      }
      if(text=='Track Donation Orders'){
        navigate('/tracking');
      }
      if(text=='View Profile'){
        navigate('/tracking');
      }
      
    }
    return (
      
      <div>
        <button className= "button-org" style={{marginLeft:'10px'}}  onClick={toggleMenu}><MenuIcon/> </button>
        {showMenu && (
          <div className="Menu">
            <ul>
              <li>
                <button className="menuB" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'0px' }}>
                <PersonRoundedIcon style={{ fontSize: 50 }} />
                <button onClick={() => handleClick('View Profile')} style={{}}>View Profile</button> {/* Text appears under the icon */}</button>
                    </li>  
               <li><button onClick={() => handleClick('View All Donation Requests')} className="menuB"> View All Donation Requests</button></li>
              <li> <button onClick={() => handleClick('Choose Donation Category')}className="menuB">Choose Donation Category</button></li>
              <li> <button onClick={() => handleClick('View Registered Organization')} className="menuB">View Registered Organization</button> </li>
              <li><button onClick={() => handleClick('Track Donation Orders')} className="menuB">Track Donation Orders</button></li>
            </ul>
          </div>
        )}
      </div>

    );
  };
