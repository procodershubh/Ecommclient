import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";



function Mynav() {
  return (
    
    <nav className="navbar navbar-expand-lg sticky-top" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"><img src='img/logoc.png' alt='skk' width={100}></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li> 
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Fashion
          </Link>
          <ul className="dropdown-menu ">
            <li><Link className="dropdown-item" to="menfashion">MEN Fashion</Link></li>
            <li><Link className="dropdown-item" to="womenfashion">Women Fashion</Link></li>
            <li><Link className="dropdown-item" to="childfashion">Child Fashion</Link></li>
            {/* <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Footwear</Link></li> */}
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " to="footwear" >Footwear</Link>
        </li>
       
      </ul>
      <Link className="btn btn-outline-success ms-2" to="login">Hello,Sign in</Link>

      <Link className="btn btn-outline-success ms-2" to="cart"><FaCartShopping /></Link>

      
    </div>
  </div>
</nav>
  )
}     

export default Mynav