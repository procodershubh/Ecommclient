import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useCart } from '../component/Cartcontext'; // Adjust path as needed
import { backendurl } from '../../Servicepage';




function Productdetails() {

    const {id}=useParams();
    
    const [singledata, setsingledata]=useState([]);
    const [pincode, setPincode] = useState(''); // State for pincode input
    const [message, setMessage] = useState(''); // State for the message

    const { addToCart } = useCart();
    const navigate = useNavigate();


    useEffect(() => {
        const Viewdetails = () => {
            axios.get(`${backendurl}/products/${id}`).then((d) => {
              console.log(d.data); 
              setsingledata(d.data);
             
            });
    
          };
          Viewdetails();
    },[id]);

    const handleAddToCart = () => {
      addToCart(singledata);
    };
  
    const handleBuyNow = () => {
      addToCart(singledata);
      navigate('/cart');
    };

    const handlePincodeSubmit = () => {
      if (pincode) {
        setMessage('Delivery In within 7 days'); // Update the message state based on input
      } else {
        setMessage('Please enter a pincode'); // Optional: Show a different message if input is empty
      }
    };

  return (
   <div className='container p-2'>
    <div style={{height:'100%'}} className='row shadow p-4'>
        <div className='col-md-4 viewimg'>
            <img className='productimg border'  src={singledata.image} alt='sk'/>

            <div class="d-flex flex-row bd-highlight mb-3 mt-5 ">
  <div class="p-2 bd-highlight"> 
  <button className="btn btn-warning" onClick={handleAddToCart}> <MdAddShoppingCart/> Add to Cart</button>
  </div>
  <div class="p-2 bd-highlight">
  <button className="btn btn-success" onClick={handleBuyNow}>Buy Now</button>
  </div>
</div>



          
           
        </div>
        <div className='col-md-8'>
            <h3>{singledata.title}</h3>
            <li style={{color:'red',cursor:'pointer',listStyleType:'none'}}><FaStar/> <FaStar /> <FaStar/> <FaStar/> <FaRegStarHalfStroke /></li>

            <p className='text-secondary mt-3'>{singledata.description}</p>

            <div style={{display:'flex'}} className='col-md-12'>
            <h2 class="text-dark"><FaRupeeSign />{singledata.price}</h2>
        <h5 class="text-muted text-decoration-line-through"><FaRupeeSign />{singledata.price+20}</h5>
        <p class="text-success"> Upto 20% off</p>
            </div>
            <p>Free delivery</p>
            <p class="text-success">Save extra with combo offers</p>
            <h5>Available offers</h5>
            <p>Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)</p>
            <p>Bank OfferGet ₹50 instant discount on first Flipkart UPI txn on order of ₹200 and above</p>

            <IoLocation />
             <input placeholder="Enter Delivery Pincode" type="text" id="pincodeInputId" onChange={(e) => setPincode(e.target.value)}></input>
             <button type='subimt'  onClick={handlePincodeSubmit} value='submit'>submit</button>
             {message && <p>{message}</p>} {/* Display the message */}

                
        </div>

        
    </div>
   </div>
  )
}

export default Productdetails