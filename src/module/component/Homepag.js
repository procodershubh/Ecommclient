import React from 'react';
import { Link } from 'react-router-dom';


function Homepag() {


  return (
    <div class="container-fluid text-center " style={{ backgroundImage: 'url(img/pichome.jpg)', backgroundSize: '100% 100%', height: '100vh' }}>
      <div class="row align-items-center" >
       
        <div className='col-md-6'></div>
        <div class="col-md-2">
          <div class="card" style={{ marginTop: '200px',backgroundColor:"rgba(255,255,255,0)",border:'aliceblue' }}  >
            <img src="img/wecome.png" class="card-img-top" alt="ADMIN LOGIN" style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto',mixBlendMode:'multiply' }} />
            <div class="card-body">
              <Link to="login" class="btn homebtn" >LOGIN</Link>
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>


      </div>
    </div>
  )
}

export default Homepag