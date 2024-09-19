import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from '../component/Cartcontext';
import { IoIosLogOut } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";


function Mynav() {
  const navigate = useNavigate();

  const fullname = localStorage.getItem('fullname') || 'Guest';
  
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('fullname'); // Clear fullname on logout


    alert('Logged out successfully');
    // Redirect to login page
    navigate('/login');
};

const handlemyorder =() =>{
  navigate('/Myorder')
}


  const { cart } = useCart();

  return (
    
    <nav className="navbar navbar-expand-lg sticky-top" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Home"><img src="img/logoc.png" alt='skk' width={100}></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
        </li> 
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Fashion
          </Link>
          <ul className="dropdown-menu ">
            <li><Link className="dropdown-item" to="Home/menfashion">MEN Fashion</Link></li>
            <li><Link className="dropdown-item" to="Home/womenfashion">Women Fashion</Link></li>
            <li><Link className="dropdown-item" to="Home/childfashion">Child Fashion</Link></li>
   
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to="Home/footwear" >Footwear</Link>
        </li>
       
      </ul>
    
      <li className="nav-item dropdown me-5 " style={{listStyleType:'none'}}>
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {fullname}
          </Link>
          <ul className="dropdown-menu">
          <li style={{marginBottom:'5px'}}> <button className='btn btn-light' style={{width:"152px"}} onClick={handlemyorder}><FaShoppingBag/> MyOrder</button> </li>
             
            <li> <button className='btn btn-light' style={{width:"152px"}} onClick={handleLogout}><IoIosLogOut/> Logout</button> </li>

          </ul>
        </li>
      

      <Link className="btn btn-outline-success ms-2 position-relative" to="cart">
            <FaCartShopping />
            {cart.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            )}
          </Link>
      
    </div>
  </div>
</nav>
  )
}     

export default Mynav