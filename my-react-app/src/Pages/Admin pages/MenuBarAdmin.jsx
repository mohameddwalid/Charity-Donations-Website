import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useNavigate} from 'react-router-dom';
import {Account} from "./Account";
import {Manage_requests} from "./Manage_requests";
import {Pending_accounts} from "./Pending_accounts";
import {Registered_users} from "./Registered_users";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export const MenuBarAdmin = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    const handleClick = (text) => {
      if (text === 'View Pending Organisations and Donors') {
        navigate('/Pending_accounts');
      }
      if(text=='Manage Organisations and Donors Requests'){
        navigate('/Manage_requests');
      }
      if(text=='Account Settings'){
        navigate('/Account');
      }
      if(text=='View Registered Organisations & Donors'){
        navigate('/Registered_users');
      }
    }
    return (
      
      <div>
        <button className= "button-org" style={{marginLeft:'10px'}}  onClick={toggleMenu}><MenuIcon/> </button>
        {showMenu && (
          <div className="Menu">
            <ul>
              <li>
                
                <button className="menuB" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'0px' }} onClick={() => handleClick('Account Settings')}>
                <PersonRoundedIcon style={{ fontSize: 50 }} />
                    <button className="menuB" onClick={() => handleClick('Account Settings')} style={{}}>Account Settings</button> {/* Text appears under the icon */}</button>
                    </li>
               <li><button onClick={() => handleClick('View Pending Organisations and Donors')} className="menuB"> View Pending Organisations and Donors</button></li>
              <li> <button onClick={() => handleClick('Manage Organisations and Donors Requests')}className="menuB">Manage Organisations and Donors Requests</button></li>
              <li><button onClick={() => handleClick('View Registered Organisations & Donors')} className="menuB">View Registered Organisations & Donors</button></li>
            </ul>
          </div>
        )}
      </div>

    );
  };
