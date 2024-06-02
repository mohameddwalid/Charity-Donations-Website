import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Navbar } from './Navbar';

let fn="Khaled";
let ln="Amr";
let g="Male";
let e="Khaled@Gmail.com";
let numv="0123456789";
let areav="tagmo3";
let govv="Cairo";
let addv="north 90,tagmo3,new cairo,cairo";



//  register using my first name, last
//name, gender, email, contact number, password, address, area, governorate so that I can
//contribute to meaningful causes and engage in volunteer activities through the platform.


export const RegularProfile = () => {
    const[fname,setFname]=useState(false);
    const[lname,setLname]=useState(false);
    const[gender,setGender]=useState(false);
    const[email,setEmail]=useState(false);
    const[num,setNum]=useState(false);
    const[area,setArea]=useState(false);
    const[gov,setGov]=useState(false);
    const[add,setAdd]=useState(false);
    

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
        
     

        setStatus('');

    

    }
    

    return (
        <div>
            <Navbar/>
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


                    {/* Reg area */}


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



                    {/* Reg gov */}


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







                    {/* Reg add */}
                
               
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
        </div>
    );
};

