import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { backendurl } from '../../Servicepage';

function Menfashion() {
  const[mydata,setmydata]= useState([]);
  


  
  const myapi =()=>{
    axios.get(`${backendurl}/products`).then((d) => {
      console.log(d.data);    
      setmydata(d.data);
    });
    
    
  };
  useEffect(() =>{
    myapi();
  }, []);
  return (
    <div class="container mt-4">

        {mydata.map((e)=>{
          return(
            <div class="row mt-3 border " >
      
      <div class="col-md-3 " key={e.id}>
        <img src={e.image}class="img-fluid" style={{width:'150px',aspectRatio:'1/1',marginTop:'30px',marginLeft:'30px'}} alt="Product "/>
      </div>
      <div class="col-md-4">
        <div class="d-flex align-items-center mb-2">
          <span class="badge bg-light text-secondary me-2">Sponsored</span>
          <Link to={`view/${e._id}`}><h5 style={{cursor:'pointer'}} class="mb-0 text-primary">{e.title}</h5></Link>
          {/* <h5 style={{cursor:'pointer'}} class="mb-0 text-primary">{e.title}</h5> */}
        </div>
        <ul class="list-unstyled">
          <li style={{maxLines:'100'}}>{e.description}</li>
          <li style={{color:'red',cursor:'pointer'}}><FaStar/> <FaStar /> <FaStar/> <FaStar/> <FaRegStarHalfStroke /></li>
          


        </ul>
        
      </div>
      <div class="col-md-5 text-center">
        <h4 class="text-dark"><FaRupeeSign />{e.price}</h4>
        <p class="text-muted text-decoration-line-through">{e.price+20}</p>
        <p class="text-success"> Upto 6% off</p>
        <p>Free delivery</p>
        <p class="text-success">Save extra with combo offers</p>

      </div>
      
    </div>

          )
        })}
    
  </div>
  )
}

export default Menfashion