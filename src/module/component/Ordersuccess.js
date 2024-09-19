import React from 'react';
import { FcApproval } from "react-icons/fc";
import {  useNavigate } from 'react-router-dom';


function Ordersuccess() {
    const navigate = useNavigate();

    const fullname = localStorage.getItem('fullname') || 'Guest';

    const Orderpage = () =>{
        navigate('/Myorder')
    }

  return (

<div className='container'>
    <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
            <div className='row'>
                <h1> <FcApproval/> </h1> 
                <h5>Hey {fullname}, </h5>
                <h3>Your Order is Confirmed!</h3>
                <p>We'll Send you a shipping confirmation email as soon as your order ships. </p>
            </div>
            <button type="button" onClick={Orderpage} class="btn btn-info">Check Status</button>

        </div>
        <div className='col-md-4'></div>

    </div>
</div>
)
}

export default Ordersuccess