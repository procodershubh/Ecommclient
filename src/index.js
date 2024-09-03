import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartProvider } from './module/component/Cartcontext';
import Layout from '../src/module/shares/Layout';
import './style.css';
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
import Homepag from './module/component/Homepag';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <BrowserRouter>
    <CartProvider>
    <Layout>
       
       <Routes>

    <Route path='' element={<Homepag/>}/>
    <Route path='*' element={<Errorpage/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='Home' element={<Myfirst/>}/>
    <Route path='Home/menfashion' element={<Menfashion/>}/>

    <Route path='Home/womenfashion' element={<Womenfashion/>}/>

    <Route path='Home/childfashion' element={<Childfashion/>}/>

    <Route path='Home/footwear' element={<Footwear/>}/>

   
    <Route path='Home/childfashion/view/:id' element={<Productdetails/>}/>
    <Route path='Home/childfashion/view/:id/buynow' element={<Mycart/>}/>
    <Route path='Home/menfashion/view/:id' element={<Productdetails/>}/>
    <Route path='Home/menfashion/view/:id/buynow' element={<Mycart/>}/>
    <Route path='Home/womenfashion/view/:id'element={<Productdetails/>}/>
    <Route path='Home/womenfashion/view/:id/buynow' element={<Mycart/>}/>
    <Route path='Home/footwear/view/:id' element={<Productdetails/>}/>
    <Route path='footwear/view/:id/buynow' element={<Mycart/>}/>
    <Route path='cart' element={<Mycart/>}/>
    {/* <Route path='childfashion/view/:id/buylater' element={<Mycart/>}/> */}
    <Route path='childfashion/buynow' element={<Mycart/>}/>
    <Route path='cart/AddressPage' element={<AddressPage />} />
    <Route path='/cart/AddressPage/payment' element={<PaymentPage/>}/>

    


    </Routes>
    </Layout>



    
    </CartProvider>

    </BrowserRouter>

       



  </React.StrictMode>
);


