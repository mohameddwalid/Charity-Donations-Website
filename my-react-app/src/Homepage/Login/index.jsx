

import React, { useEffect, useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styles.css';
import UploadButton from './UploadButton';
import UploadLocation from './UploadLocation';
import PopupTeach from './PopupTeach';
import PopupDoc from './PopupDoc';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@mui/material/Button";
import { OutlinedInput } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      
      backgroundImage: `url(${process.env.PUBLIC_URL + './images/LandingImg.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    height: '800px',
    backgroundsize: 'cover',
    backgroundrepeat: 'no-repeat',
    backgroundposition: 'center',
    alignContent:'center'
    // height: '100vh',
    },
    


  }));

export const Login=()=> {
    const classes = useStyles();
    const [isDonor, setIsDonor] = useState(false); // State to track donor registration
    const [isOrganization, setIsOrganization] = useState(false); // State to track organization registration
    const [volunteerRole, setVolunteerRole] = useState('regular'); // State to track selected volunteer role

    const navigate = useNavigate();

    useEffect(() => {
        const container = document.getElementById('container');
        const registerDonorBtn = document.getElementById('registerDonor');
        const registerOrganizationBtn = document.getElementById('registerOrganization');
        const loginBtn = document.getElementById('login');
        
        const handleRegisterDonorClick = () => {
            setIsDonor(true);
            setIsOrganization(false);
            container.classList.add("active");
        };

        const handleRegisterOrganizationClick = () => {
            setIsOrganization(true);
            setIsDonor(false);
            container.classList.add("active");
        };

        const handleLoginClick = () => {
            setIsDonor(false);
            setIsOrganization(false);
            container.classList.remove("active");
        };

        

        registerDonorBtn.addEventListener('click', handleRegisterDonorClick);
        registerOrganizationBtn.addEventListener('click', handleRegisterOrganizationClick);
        loginBtn.addEventListener('click', handleLoginClick);

        return () => {
            // Cleanup: remove event listeners
            registerDonorBtn.removeEventListener('click', handleRegisterDonorClick);
            registerOrganizationBtn.removeEventListener('click', handleRegisterOrganizationClick);
            loginBtn.removeEventListener('click', handleLoginClick);
        };
    }, []); // Empty dependency array means this effect runs only once after component mount


    const handleVolunteerRoleChange = (event) => {
        setVolunteerRole(event.target.value);
    };
    const [firstname, setfirstname] = React.useState("");
    const [lastname, setlastname] = React.useState("");
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");
    const [number, setnumber] = React.useState("");
    const [address, setaddress] = React.useState("");
    const [area, setarea] = React.useState("");
    const [gov, setgov] = React.useState("");
    const [gender, setgender] = React.useState("");
    const [orgtype, setorgtype] = React.useState("");
    const [orgname, setorgname] = React.useState("");

    const handleorgtypeChange = (event) => {
        setorgtype(event.target.value);
      };

      const handleorgnameChange = (event) => {
        setorgname(event.target.value);
      };

    const handlegenderChange = (event) => {
        setgender(event.target.value);
      };

    const handlefirstnameChange = (event) => {
        setfirstname(event.target.value);
      };
    
      const handlelastnameChange = (event) => {
        setlastname(event.target.value);
      };
    
      const handleemailChange = (event) => {
        setemail(event.target.value);
      };
      const handlepasswordChange = (event) => {
        setpassword(event.target.value);
      };
    
      const handlenumberChange = (event) => {
        setnumber(event.target.value);
      };
    
      const handleaddressChange = (event) => {
        setaddress(event.target.value);
      };
    
      const handleareaChange = (event) => {
        setarea(event.target.value);
      };
    
      const handlegovChange = (event) => {
        setgov(event.target.value);
      };


      function handleSignIn(e){
        let em=email;
        let pas=password;

        if(em.trim()==="donor@gmail.com" && pas.trim()==="1"){
            localStorage.setItem("userType","regular");
            navigate("/landpageDonor");


        }else if(em.trim()==="teacher@gmail.com" && pas.trim()==="1"){
            localStorage.setItem("userType","teacher");
            navigate("/landpageteacher");


        }else if(em.trim()==="doctor@gmail.com" && pas.trim()==="1"){
            localStorage.setItem("userType","doctor");
            navigate("/LandpageDoctor");


        }else if(em.trim()==="admin@gmail.com" && pas.trim()==="1"){
            navigate("/AdminLand");


        }else if(em.trim()==="org@gmail.com" && pas.trim()==="1"){
            navigate("/OrgHome");


        }


      }

      const isButtonDisabled1 = !!!(
        firstname &&
        lastname &&
        email &&
        password &&
        number &&
        address &&
        area &&
        gov     
        );

        const isButtonDisabled2 = !!!(
            firstname &&
            lastname &&
            gender &&
            email &&
            orgtype &&
            orgname &&
            password &&
            number &&
            address &&
            area &&
            gov     
            );

            const isButtonDisabled3 = !!!(
                email &&
                password   
                );

    return (
        <div className={classes.root} id="header">
        <div className='body'>
            <div className='BackImg' /> 
            <div className="container" id="container">
                {isDonor && (
                    <div className="form-container sign-up">
                        
                            <form>
                                <h1>Create Account As Doner</h1>
                                    {/* <div className="social-icons">
                                    <a href="#" className='icon'><GoogleIcon /></a>
                                    <a href="#" className='icon'><FacebookIcon /></a>
                                    <a href="#" className='icon'><GitHubIcon /></a>
                                    <a href="#" className='icon'><LinkedInIcon /></a>
                                 </div> */}
                                <span>or use your email for registration</span>
                                <input type="text" placeholder="First Name" value={firstname} onChange={handlefirstnameChange}/>
                                <input type="text" placeholder="Last Name" value={lastname} onChange={handlelastnameChange}/>
                                <input type="email" placeholder="Email" value={email} onChange={handleemailChange}/>
                                <input type="password" placeholder="Password" value={password} onChange={handlepasswordChange}/>
                                <input type="number" placeholder="Contact Number" value={number} onChange={handlenumberChange} />
                                <input type="text" placeholder="Address" value={address} onChange={handleaddressChange}/>
                                <input type="text" placeholder="Area" value={area} onChange={handleareaChange}/>
                                <input type="text" placeholder="Governorate" value={gov} onChange={handlegovChange}/>
                               <div>
                                <label htmlFor="volunteerRole">Volunteer Role:</label>
                                <select id="volunteerRole" value={volunteerRole} onChange={handleVolunteerRoleChange}>
                                    <option value="regular">Regular Donor</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="doctor">Doctor</option>
                                </select>
                            </div>
                            {volunteerRole === 'doctor' && (
                                <div>
                                   <PopupDoc/>
                                </div>
                            )}
                            {volunteerRole === 'teacher' && (
                                <div>
                                    <PopupTeach/>
                                </div>
                            )}
                                <Button disabled={isButtonDisabled1}>Sign Up</Button>
                        </form>
                        
                    </div>
                )}

                {/* As an Organization representative, I should be able to
register using my first name, last name, gender, email, password, contact number, organization
name, organization type, and organization address, area, governorate, to submit a request to
use the web application so that I can showcase my organization's credibility and align it with
relevant initiatives, expanding our outreach and impact.
 */}
                {isOrganization && (
                    <div className="form-container sign-up">
                        <form>
                          <h1>Organization Account</h1>
                             {/* <div className="social-icons">
                            <a href="#" className='icon'><GoogleIcon /></a>
                            <a href="#" className='icon'><FacebookIcon /></a>
                            <a href="#" className='icon'><GitHubIcon /></a>
                            <a href="#" className='icon'><LinkedInIcon /></a>
                        </div> */}
                            {/* <span>or use your email for registration</span> */}
                            <input type="text" placeholder="First Name" value={firstname} onChange={handlefirstnameChange}/>
                            <input type="text" placeholder="Last Name" value={lastname} onChange={handlelastnameChange}/>
                            <select type="gender" id="gender" placeholder="Gender"  value={gender} onChange={handlegenderChange}>
                            <option type="" disabled selected>Gender</option>
                            <option type="male">Male</option>
                            <option type="female">Female</option></select>
                            <input type="email" placeholder="Email" value={email} onChange={handleemailChange}/>
                            <input type="text" placeholder="Organizaton type" value={orgtype} onChange={handleorgtypeChange}/>
                            <input type="text" placeholder="Organization Name" value={orgname} onChange={handleorgnameChange}/>
                            <input type="password" placeholder="Password" value={password} onChange={handlepasswordChange}/>
                            <input type="number" placeholder="Contact Number" value={number} onChange={handlenumberChange}/>
                            <input type="text" placeholder="Organization Address" value={address} onChange={handleaddressChange}/>
                            <input type="text" placeholder="Organization Area" value={area} onChange={handleareaChange}/>
                             <input type="text" placeholder="Governorate" value={gov} onChange={handlegovChange}/>
                             <div className="OrgBut" ><UploadLocation/><UploadButton style={{ marginRight: '40px' }} /></div>
                             
                             <Button disabled={isButtonDisabled2}>Sign Up</Button>
                             
                        </form>
                    </div>
                )}
                {/* Login form */}
                <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className='icon'><GoogleIcon /></a>
                        <a href="#" className='icon'><FacebookIcon /></a>
                        <a href="#" className='icon'><GitHubIcon /></a>
                        <a href="#" className='icon'><LinkedInIcon /></a>
                    </div>
                     <span>or use your email password</span>
                     <input type="email" placeholder="Email"  value={email} onChange={handleemailChange} />
                    <input type="password" placeholder="Password" value={password} onChange={handlepasswordChange}/>
                 <a href="#">Forget Your Password?</a>
                 <Button disabled={isButtonDisabled3} onClick={handleSignIn}>Sign In</Button>
                 </form>
                </div>
                {/* Toggle buttons */}
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all site features</p>
                            <button className="hidden" id="login">Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all site features</p>
                            <p>Choose an Account!</p>
                            <div className="RegButton">
                                <button className="hidden" id="registerDonor" >Donor</button>
                                <button className="hidden" id="registerOrganization">Organization</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</div>
    );
}

  