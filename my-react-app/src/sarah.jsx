import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

let fn="Khaled";
let ln="Amr";
let g="Male";
let e="Khaled@Gmail.com";
let numv="0123456789";
let areav="tagmo3";
let govv="Cairo";
let addv="north 90,tagmo3,new cairo,cairo";
let NumCases="5";
let CAddress="north 90,tagmo3,new cairo,cairo";
let CArea="Shrouk";
let CGov="Cairo";
let Docspecialty="Dentist";
let Cgmv="googlemaps.com/resala";


//  register using my first name, last
//name, gender, email, contact number, password, address, area, governorate so that I can
//contribute to meaningful causes and engage in volunteer activities through the platform.


const DoctorProfile = () => {
    const[fname,setFname]=useState(false);
    const[lname,setLname]=useState(false);
    const[gender,setGender]=useState(false);
    const[email,setEmail]=useState(false);
    const[num,setNum]=useState(false);
    const[area,setArea]=useState(false);
    const[gov,setGov]=useState(false);
    const[add,setAdd]=useState(false);
    const[clinicAddress, setclinicAddress]=useState(false);
    const[clinicArea,setclinicArea]=useState(false);
    const[clinicGov,setclinicGov]=useState(false);
    const[specialty,setspecialty]=useState(false);
    const[Cases,setCases]=useState(false);
    const[gmv,setgmv]=useState(false);

    const[pass,setPass]=useState(false);
    const[changeStatus,setStatus]=useState('');






    function handlefNameChange(e){
        setFname(true);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(false);
        setgmv(false);
        

        setStatus('');



    }
    function handlelNameChange(e){
        setFname(false);
        setLname(true);
        setGender(false);
        setEmail(false);
        setNum(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(false);
        setgmv(false);
       

        setStatus('');



    }
    function handlegenderChange(e){
        setFname(false);
        setLname(false);
        setGender(true);
        setEmail(false);
        setNum(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(false);
        setgmv(false);
       

        setStatus('');


    }
    function handleemailChange(e){

        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(true);
        setNum(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(false);
        setgmv(false);
       

        setStatus('');

    }
    function handleNumChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(true);
        setArea(false);
        setGov(false);
        setAdd(false);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(false);
        setgmv(false);
        

        setStatus('');

    }
    function handleAreaChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setArea(true);
        setGov(false);
        setAdd(false);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(false);
        setgmv(false);
        

        setStatus('');


    }function handleGOVChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setArea(false);
        setGov(true);
        setAdd(false);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(false);
        setgmv(false);
   

        setStatus('');


    }function handleAddChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setArea(false);
        setGov(false);
        setAdd(true);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(false);
        setgmv(false);
     

        setStatus('');

    }function handleCasesChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setCases(true);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(false);
        setgmv(false);
        

        setStatus('');


    }function handleclinicAddressChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setCases(false);
        setclinicAddress(true);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(false);
        setgmv(false);
        

        setStatus('');


    }function handleclinicAreaChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(true);
        setspecialty(false);
        setgmv(false);
       

        setStatus('');

    }
    function handleclinicGovChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(true);
        setspecialty(false);
        setgmv(false);
       

        setStatus('');

    }
    function handlespecialtyChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(true);
        setgmv(false);
       

        setStatus('');

    }
    function handlegmvChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setCases(false);
        setclinicAddress(false);
        setclinicArea(false);
        setclinicGov(false);
        setspecialty(false);
        setgmv(true);
       

        setStatus('');

    }
    

    return (
        <div className='container'>
            <div className='box' style={{width:'550px'}}>
            <label style={{fontWeight:'bold',fontSize:'20px'}}>Account Details</label>
            <br></br>

            <div style={{display: fname? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>First Name :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <label>{fn}</label>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'40px'}}  onClick={handlefNameChange} ><FaEdit /> </button>

                </div>

                <div style={{display: fname? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>First Name :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="fn" placeholder='Enter First Name'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('fn');
                        if (input.value.trim() !== '') {
                            fn = input.value;
                            setFname(false);
                            
                        } else {
                            alert('Last Name cannot be empty!');
                        }
                    }}>Done </button>

                    </div>


                    {/* lname */}


                <div style={{display: lname? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Last Name :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <label>{ln}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}}  onClick={handlelNameChange} ><FaEdit /></button>
                </div>

                <div style={{display: lname? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Last Name :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="ln" placeholder='Enter Last Name'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('ln');
                        if (input.value.trim() !== '') {
                            ln = input.value;
                            setLname(false);
                            
                        } else {
                            alert('Last Name cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  




                    {/* gender */}


                <div style={{display: gender? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Gender :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <label>{g}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}}  onClick={handlegenderChange} ><FaEdit /></button>
                </div>


                <div style={{display: gender? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Gender :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="g" placeholder='Enter Gender'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('g');
                        if (input.value.trim() !== '') {
                            g = input.value;
                            setGender(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  




                    {/* email */}



                <div style={{ display: email? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Email :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' ,marginLeft:'50px'}}>
                        <label>{e}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleemailChange}  ><FaEdit /></button>
                </div>

                <div style={{display: email? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Email :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="e" placeholder='Enter Email'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('e');
                        if (input.value.trim() !== '') {
                            e = input.value;
                            setEmail(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  





                    {/* contact num */}



                <div style={{ display: num? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Contact Number :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <label>{numv}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleNumChange} ><FaEdit /></button>
                </div>



                <div style={{display: num? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Contact Number :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='number' id="num" placeholder='Enter Contact Number'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('num');
                        if (input.value.trim() !== '') {
                            numv = input.value;
                            setNum(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  


                    {/* doc area */}


                <div style={{ display: area? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'190px' }}>Area :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'20px' }}>
                        <label>{areav}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleAreaChange}><FaEdit /></button>
                </div>

                
                <div style={{display: area? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'190px' }}>Area :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'20px' }}>
                        <input type='text' id="areav" placeholder='Enter Area'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('areav');
                        if (input.value.trim() !== '') {
                            areav = input.value;
                            setArea(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  



                    {/* doc gov */}


                <div style={{ display: gov? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'180px' }}>Governorate:</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'30px' }}>
                        <label>{govv}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleGOVChange}><FaEdit /></button>
                </div>

                <div style={{display: gov? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'180px' }}>Governorate :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'30px' }}>
                        <input type='text' id="govv" placeholder='Enter Governorate'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('govv');
                        if (input.value.trim() !== '') {
                            govv = input.value;
                            setGov(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  







                    {/* doc add */}
                
               
                <div style={{ display: add? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Address :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <label>{addv}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleAddChange}><FaEdit /></button>
                </div>



                <div style={{display: add? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Address :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="addv" placeholder='Enter Area'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('addv');
                        if (input.value.trim() !== '') {
                            addv = input.value;
                            setAdd(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  


                    {/* dOC cases */}

                <div style={{ display: Cases? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Number of Cases :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <label>{NumCases}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleCasesChange}><FaEdit /></button>
                </div>





                <div style={{display: Cases? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Number of Cases  :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="NumCases" placeholder='Enter Available Cases '/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('NumCases');
                        if (input.value.trim() !== '') {
                            NumCases = input.value;
                            setCases(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  

                    {/* clinic address */}



                <div style={{ display: clinicAddress? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Address :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <label> {CAddress} </label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleclinicAddressChange}><FaEdit /></button>
                </div>




                <div style={{display: clinicAddress? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Address :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="CAddress" placeholder='Enter Clinic Address'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('CAddress');
                        if (input.value.trim() !== '') {
                            CAddress = input.value;
                            setclinicAddress(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  


                    {/* clinic Area */}


                <div style={{ display: clinicArea? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'180px' }}>Clinic Area</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'30px' }}>
                        <label>{CArea}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleclinicAreaChange}><FaEdit /></button>
                </div>




                <div style={{display: clinicArea? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Clinic Area</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="CArea" placeholder='Enter Clinic Area'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('CArea');
                        if (input.value.trim() !== '') {
                            CArea = input.value;
                            setclinicArea(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  




                     {/* clinic Gov */}


                <div style={{ display: clinicGov? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'180px' }}>Clinic Governorate</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'30px' }}>
                        <label>{CGov}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleclinicGovChange}><FaEdit /></button>
                </div>




                <div style={{display: clinicGov? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Clinic Governorate</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="CGov" placeholder='Enter Clinic Area'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('CGov');
                        if (input.value.trim() !== '') {
                            CGov = input.value;
                            setclinicGov(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  



                {/* doc specialty*/}


             <div style={{ display: specialty? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'180px' }}>Speciality</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'30px' }}>
                        <label>{Docspecialty}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handlespecialtyChange}><FaEdit /></button>
                </div>




                <div style={{display: specialty? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Speciality</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="Docspecialty" placeholder='Enter Your Speciality'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('Docspecialty');
                        if (input.value.trim() !== '') {
                            Docspecialty = input.value;
                            setspecialty(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  
                

                 {/* Google map*/}


             <div style={{ display: gmv? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'180px' }}>Google Maplink:</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'30px' }}>
                        <label>{Cgmv}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handlegmvChange}><FaEdit /></button>
                </div>




                <div style={{display: gmv? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Google Maplink:</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="Cgmv" placeholder='Enter GoogleMap Link:'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('Cgmv');
                        if (input.value.trim() !== '') {
                            Cgmv = input.value;
                            setgmv(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  




                <br/>
                <button className='button-org' style={{display: pass? 'none':"block",width:'150px',margin: 'auto' }}  onClick={()=>{setPass(true);}} >Change Password</button>
<br/>
                <div style={{display: pass? 'block':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <div style={{width:'200px',marginLeft:'180px'}}>
                        <input type='text' id="p1" placeholder='Enter old password'/>
                        <input type='text' id="p2" placeholder='Enter new password'/>
                        <input type='text' id="p3" placeholder='Confirm new password'/>

                    </div>
                    <br/> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('p2');
                        const input2 = document.getElementById('p3');
                        if (input.value.trim() == '' || input2.value.trim()== '' ) {
                            alert('Field cannot be empty!');

                            
                        } else if(input.value.trim()!==input2.value.trim()) {
                            alert('new passwords does not match');
                        }else{
                            setStatus('Password updated successfully !');
                            setPass(false);


                        }
                    }}>Done </button>

                    <button className='button-org' style={{padding:'10px 10px',width:'50px',marginLeft:'10px'}} onClick={()=>setPass(false)}>back</button>
                    <br/>
                    

                    </div>

                    {changeStatus}
            

            </div>

        </div>
    );
};

export default DoctorProfile;