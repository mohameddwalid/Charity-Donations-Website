import './App.css'
import React from 'react';
import {DoctorProfile} from './Pages/DoctorProfile';
import {RegularProfile} from './Pages/RegularProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SelectCategory } from "./Pages/SelectCategory";
import {RequestedNeed} from "./Pages/RequestNeed";
import {Requestsoffood} from "./Pages/Requestsoffood";
import {RequestsofCloth} from "./Pages/RequestofCloth";
import {RequestsofToys} from "./Pages/RequestofToys";
import {Teaching} from "./Pages/Teaching";
import {Medicalappointments} from "./Pages/Medicalappointments";
import {MedicalSupplies} from "./Pages/MedicalSupplies";
import {RegisteredOrg} from "./Pages/RegisteredOrg";
import {Track} from "./Pages/Track";
//import {Mailbox} from './Pages/Mailbox';
//import {NotificationBox} from './Pages/NotificationBox';
import {BloodDonations} from "./Pages/BloodDonations";
import {ViewAllRequests} from "./Pages/ViewAllRequests";
import {LandpageDonor} from "./Pages/LandpageDonor";
import {LandpageTeacher} from "./Pages/LandpageTeacher";
import {LandpageDoctor} from "./Pages/LandpageDoctor";
import {RequestsofSchoolsupplies} from "./Pages/RequestsofSchoolsupplies";
import{Navbar}from "./Pages/Navbar";
import{MenuBar}from "./Pages/MenuBar";
import {Adminhome}from "./Pages/Admin pages/Adminhome";
import {AdminLand}from "./Pages/Admin pages/AdminLand";
import {Manage_requests}from "./Pages/Admin pages/Manage_requests";
import {Pending_accounts}from "./Pages/Admin pages/Pending_accounts";
import {Registered_users}from "./Pages/Admin pages/Registered_users";
import {Account}from "./Pages/Admin pages/Account";
import {MenuBarAdmin}from "./Pages/Admin pages/MenuBarAdmin";
import {Login}from "./Homepage/Login";
import Panel from './AppBar';
    import PostForm from './PostForm';
    import AccountDetails from './AccountDetails';
    import ManageRequests from './ManageRequests';
    import FulFilledRequests from './FulfilledRequests';
    import OrgHomePage from './OrgHomePage';
    import TrackOrg from './TrackPostRequests';
import {LandingPage}from "./LandingPage";
function App() {
    return(
       <div>
             

         <Routes>
           <Route path="/allrequests" element={<ViewAllRequests />} />
           <Route path="/category" element={<SelectCategory />} />
           <Route path="/registeredOrg" element={<RegisteredOrg />} />
           <Route path="/tracking" element={<Track />} />
           <Route path="/landpageDonor" element={<LandpageDonor />} />
           <Route path="/LandpageDoctor" element={<LandpageDoctor />} />
           <Route path="/landpageteacher" element={< Teaching/>} />
           <Route path="/food" element={<Requestsoffood />} />
           <Route path="/schoolsupplies" element={<RequestsofSchoolsupplies />} />
           <Route path="/cloth" element={<RequestsofCloth/>} />
           <Route path="/toy" element={<RequestsofToys/>} />
           <Route path="/medical" element={< MedicalSupplies/>} />
           <Route path="/blood" element={<BloodDonations />} />
            <Route path="/Pending_accounts" element={< Pending_accounts/>} />
            <Route path="/Manage_requests" element={<Manage_requests/>} />
            <Route path="/Account" element={< Account/>} />
            <Route path="/Registered_users" element={<Registered_users/>} />
            <Route path="/AdminLand" element={<AdminLand/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/" element={<LandingPage/>} />
            <Route path='/OrgHome' element={<OrgHomePage />} />

        <Route path='/PostForm' element={<PostForm />} />
        <Route path='/AccountDetails' element={<AccountDetails />} />
        <Route path='/ManageRequests' element={<ManageRequests />} />
        <Route path='/FulfilledRequests' element={<FulFilledRequests />} />
        <Route path='/TrackOrg' element={<TrackOrg />} />
        <Route path='/DoctorProfile' element={<DoctorProfile />} />





            
          </Routes>
       </div>
    );
}

export default App;
