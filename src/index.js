import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartProvider } from './module/component/Cartcontext';

import Mynav from './module/shares/Mynav';
import './style.css';
import Myfooter from './module/shares/Myfooter';
import Myfirst from './module/component/Myfirst';
import Menfashion from './module/dashboard/Menfashion';
import Womenfashion from './module/dashboard/Womenfashion';
import Footwear from './module/dashboard/Footwear';
import Login from './module/auth/Login';
import Signup from './module/auth/Signup';
import Childfashion from './module/dashboard/Childfashion';
import Productdetails from './module/dashboard/Productdetails';
import Mycart from './module/component/Mycart';

import AddressPage from './module/component/AddressPage';

import Errorpage from './module/shares/Errorpage';
import PaymentPage from './module/component/PaymentPage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <CartProvider>

    
    <Mynav/>
    <Routes>

    <Route path='' element={<Myfirst/>}/>
    <Route path='*' element={<Errorpage/>}/>
    
    <Route path='menfashion' element={<Menfashion/>}/>
    <Route path='womenfashion' element={<Womenfashion/>}/>
    <Route path='childfashion' element={<Childfashion/>}/>
    <Route path='footwear' element={<Footwear/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='childfashion/view/:id' element={<Productdetails/>}/>
    <Route path='childfashion/view/:id/buynow' element={<Mycart/>}/>
    <Route path='menfashion/view/:id' element={<Productdetails/>}/>
    <Route path='menfashion/view/:id/buynow' element={<Mycart/>}/>
    <Route path='womenfashion/view/:id'element={<Productdetails/>}/>
    <Route path='womenfashion/view/:id/buynow' element={<Mycart/>}/>
    <Route path='footwear/view/:id' element={<Productdetails/>}/>
    <Route path='footwear/view/:id/buynow' element={<Mycart/>}/>
    <Route path='cart' element={<Mycart/>}/>
    {/* <Route path='childfashion/view/:id/buylater' element={<Mycart/>}/> */}
    <Route path='childfashion/buynow' element={<Mycart/>}/>
    <Route path='cart/AddressPage' element={<AddressPage />} />
    <Route path='/cart/AddressPage/payment' element={<PaymentPage/>}/>

    


    </Routes>


    <Myfooter/>
    </CartProvider>

    </BrowserRouter>

       



  </React.StrictMode>
);


