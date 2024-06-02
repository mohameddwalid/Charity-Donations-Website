import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Panel from './AppBar';

let fn="Khaled";
let ln="Amr";

let g="Male";
let e="Khaled@Gmail.com";
let oN="Resala";
let oT="Charity";
let numv="0123456789";
let areav="tagmo3";
let govv="Cairo";
let addv="north 90,tagmo3,new cairo,cairo";
let gmv="googlemaps.com/resala";



const AccountDetails = () => {
    const[fname,setFname]=useState(false);
    const[lname,setLname]=useState(false);
    const[gender,setGender]=useState(false);
    const[email,setEmail]=useState(false);
    const[num,setNum]=useState(false);
    const[orgname,setOrg]=useState(false);
    const[type,setType]=useState(false);
    const[area,setArea]=useState(false);
    const[gov,setGov]=useState(false);
    const[add,setAdd]=useState(false);
    const[gm,setGm]=useState(false);
    

    const[pass,setPass]=useState(false);
    const[changeStatus,setStatus]=useState('');




    function handlefNameChange(e){
        setFname(true);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setOrg(false);
        setType(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setGm(false);
        setStatus('');



    }
    function handlelNameChange(e){
        setFname(false);
        setLname(true);
        setGender(false);
        setEmail(false);
        setNum(false);
        setOrg(false);
        setType(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setGm(false);
        setStatus('');




    }
    function handlegenderChange(e){
        setFname(false);
        setLname(false);
        setGender(true);
        setEmail(false);
        setNum(false);
        setOrg(false);
        setType(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setGm(false);
        setStatus('');


    }
    function handleemailChange(e){

        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(true);
        setNum(false);
        setOrg(false);
        setType(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setGm(false);
        setStatus('');

    }
    function handleNumChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(true);
        setOrg(false);
        setType(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setGm(false);
        setStatus('');


    }
    function handleorgnameChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setOrg(true);
        setType(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setGm(false);
        setStatus('');


    }function handletypeChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setOrg(false);
        setType(true);
        setArea(false);
        setGov(false);
        setAdd(false);
        setGm(false);
        setStatus('');


    }function handleAreaChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setOrg(false);
        setType(false);
        setArea(true);
        setGov(false);
        setAdd(false);
        setGm(false);
        setStatus('');


    }function handlegovChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setOrg(false);
        setType(false);
        setArea(false);
        setGov(true);
        setAdd(false);
        setGm(false);
        setStatus('');


    }function handleaddressChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setOrg(false);
        setType(false);
        setArea(false);
        setGov(false);
        setAdd(true);
        setGm(false);
        setStatus('');


    }function handleGMChange(e){
        setFname(false);
        setLname(false);
        setGender(false);
        setEmail(false);
        setNum(false);
        setOrg(false);
        setType(false);
        setArea(false);
        setGov(false);
        setAdd(false);
        setGm(true);
        setStatus('');


    }
    

    return (
        <div>
            <Panel/>
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


                    {/* org name */}


                <div style={{ display: orgname? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'190px' }}>Organization Name :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'20px' }}>
                        <label>{oN}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleorgnameChange}><FaEdit /></button>
                </div>

                
                <div style={{display: orgname? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'190px' }}>Organization Name :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'20px' }}>
                        <input type='text' id="oN" placeholder='Enter Organization Name'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('oN');
                        if (input.value.trim() !== '') {
                            oN = input.value;
                            setOrg(false);
                            
                        } else {
                            alert('Field cannot be empty!');
                        }
                    }}>Done </button>

                    </div>  



                    {/* org type */}


                <div style={{ display: type? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'180px' }}>Organization Type:</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'30px' }}>
                        <label>{oT}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handletypeChange}><FaEdit /></button>
                </div>

                <div style={{display: type? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'180px' }}>Organization Type :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'30px' }}>
                        <input type='text' id="oT" placeholder='Enter Organization Type'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('oT');
                       
                            oT = input.value;
                            setType(false);
                            
                       
                    }}>Done </button>

                    </div>  







                    {/* area */}
                
               
                <div style={{ display: area? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Area :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <label>{areav}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleAreaChange}><FaEdit /></button>
                </div>



                <div style={{display: area? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Area :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="areav" placeholder='Leave field empty and press done to delete'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('areav');
                        
                            areav = input.value;
                            setArea(false);
                            
                      
                    }}>Done </button>

                    </div>  


                    {/* gov */}

                <div style={{ display: gov? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Governorate :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <label>{govv}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handlegovChange}><FaEdit /></button>
                </div>





                <div style={{display: gov? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Governorate  :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="govv" placeholder='Leave field empty and press done to delete'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('govv');
                        
                            govv = input.value;
                            setGov(false);
                            
                        
                    }}>Done </button>

                    </div>  

                    {/* address */}



                <div style={{ display: add? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Address :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <label> {addv} </label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleaddressChange}><FaEdit /></button>
                </div>




                <div style={{display: add? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Address :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="addv" placeholder='Leave field empty and press done to delete'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('addv');
                       
                            addv = input.value;
                            setAdd(false);
                            
                       
                    }}>Done </button>

                    </div>  


                    {/* google maps */}


                <div style={{ display: gm? "none":'flex', alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>
                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'180px' }}>Google maps link :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'30px' }}>
                        <label>{gmv}</label>
                    </div><button className='button-org' style={{padding:'10px 10px',width:'40px'}} onClick={handleGMChange}><FaEdit /></button>
                </div>




                <div style={{display: gm? 'flex':"none", alignItems: 'center', marginBottom: '10px',marginTop:'50px' }}>

                    <label className="left-aligned-label" style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px',width:'160px' }}>Google maps link :</label>
                    <div className="name-box" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'50px' }}>
                        <input type='text' id="gmv" placeholder='Enter Link'/>
                    </div> <button className='button-org' style={{padding:'10px 10px',width:'50px'}} 
                    onClick={()=>{
                        const input = document.getElementById('gmv');
                        if (input.value.trim() !== '') {
                            gmv = input.value;
                            setGm(false);
                            
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

export default AccountDetails;