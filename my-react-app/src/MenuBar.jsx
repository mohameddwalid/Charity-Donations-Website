import React, { useState } from "react";
import { FaBars,FaUser } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom';



const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div  >
      <button className= "button-org" style={{marginLeft:'10px'}}  onClick={toggleMenu}><FaBars className="icons"/> </button>
      {showMenu && (
        <div className="Menu">
          <ul>
            <li><Link to='/AccountDetails'>
              <button className="menuB" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop:'0px' }}>
              <FaUser size={34} /> {/* You can adjust the size of the icon */}
                  <span style={{}}>View Profile</span> {/* Text appears under the icon */}</button>
                  </Link>
                  </li>
            <li> <Link to='/PostForm'><button className="menuB">Create Post</button></Link> </li>
            
            <li> <Link to='/ManageRequests'><button className="menuB">View My Requests</button></Link> </li>
            <li><Link to='/FulfilledRequests'><button className="menuB">View Fulfilled Requests</button></Link></li>


          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuBar;