import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { backendurl } from '../../Servicepage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup() {
 
  const appnavigate =useNavigate();

  const updateinput =(e)=>{
    const {name,value} = e.target;
    setdata((a) =>{
        return{
            ...a,
            [name]:value
        }
    })
};

const [insdata,setdata]=useState({
  fullname:"",
  email:"",
  phone:"",
  pass:""

  });

  const validateForm = () => {
    const { fullname, email, phone, pass } = insdata;

    // Name validation (at least 3 characters)
    if (fullname.trim().length < 3) {
      toast.warning("Name must be at least 3 characters long");
      return false;
    }

    // Email validation (basic email format check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.warning("Please enter a valid email address");
      return false;
    }

    // Mobile number validation (10 digits)
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(phone)) {
      toast.warning("Please enter a valid 10-digit mobile number");
      return false;
    }

    // Password validation (at least 6 characters)
    if (pass.length < 6) {
      toast.warning("Password must be at least 6 characters long");
      return false;
    }

    return true;
  };

  const registerpage = async()=>{
    if (!validateForm()) {
      return; // Stop the submission if validation fails
    }

    const {fullname,email,phone,pass} = insdata;

    try{

    const mydata = await fetch(`${backendurl}/signup`,{
        method: "POST",
        headers: {"content-type":"application/json"}, 
        body: JSON.stringify({ fullname,email,phone,pass })
    });
    if (!mydata.ok) {
      throw new Error(`HTTP error! status: ${mydata.status}`);
    }
    const res = await mydata.json();  
    console.log(res);
    if(res.status===255)
    {
        
        toast.success("Account Created Successfully");
        setTimeout(() => {
          appnavigate("/login");
        }, 2000);

    }
    else if(res.status===409)
    {
        alert("email allready used")
    }
    else if(res.status===450)
        {
          toast.warning("Name must be 3 digits long");
        }
        else {
          alert("An unexpected error occurred");
        }
      }
      catch (error) {
        toast.error("Failed to connect to the server");
        console.error("Error:", error);
      }

};


const handleSubmit = (e) => {
  e.preventDefault(); 
  registerpage();
};

  return (
    <form onSubmit={handleSubmit} >
      <div className='container-fluid signupbg' style={{ backgroundImage: 'url(img/pichome.jpg)', backgroundSize: '100% 100%', height: '100vh' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'></div>
            <div className='col-md-4 border p-3 shadow'  style={{marginTop:'100px'}}>
              <img src='img/logoc.png' alt='logo' style={{width:'80px'}}/>
              <hr />
              <div className="mb-2">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control"  name='fullname' onChange={updateinput} value={insdata.fullname} required/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' onChange={updateinput} value={insdata.email} required />
              </div>
              <div className="mb-3">
                <label htmlFor="mobileno" className="form-label">Mobile no.</label>
                <input type="text" className="form-control"  name='phone' onChange={updateinput} value={insdata.phone}required />
              </div>
              <div className="mb-3">
                <label htmlFor="passw" className="form-label">Password</label>
                <input type="password" className="form-control" name='pass' onChange={updateinput} value={insdata.pass} required />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input"  name='check' required/>

                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className='btn btn-success'>Register Now</button>

              <Link className="btn btn-danger ms-3" to="/login">Back to Login</Link>
            </div>
            <div className='col-md-2'>
              <ToastContainer/>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
