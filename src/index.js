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
import { Provider } from 'react-redux';
import { cart } from './module/reduxpage/store'; // Adjust the path to your store

import Errorpage from './module/shares/Errorpage';
import Homepag from './module/component/Homepag';
import Ordersuccess from './module/component/Ordersuccess';
import Myorder from './module/component/Myorder';
import Myorderdetails from './module/component/Myorderdetails';
import PrivateRoute from './module/auth/PrivateRoute';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
     <CartProvider>
       <Layout>
       <Provider store={cart}>

       
       <Routes>
  
    <Route path='' element={<Homepag/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='*' element={<Errorpage/>}/>

    
    <Route path='Home' element={ <PrivateRoute><Myfirst/></PrivateRoute> }/>
    <Route path='Home/menfashion' element={<PrivateRoute><Menfashion/></PrivateRoute>}/>

    <Route path='Home/womenfashion' element={<PrivateRoute><Womenfashion/></PrivateRoute>}/>

    <Route path='Home/childfashion' element={<PrivateRoute><Childfashion/></PrivateRoute>}/>

    <Route path='Home/footwear' element={<PrivateRoute><Footwear/></PrivateRoute>}/>

   
    <Route path='Home/childfashion/view/:id' element={<PrivateRoute><Productdetails/></PrivateRoute>}/>
    <Route path='Home/childfashion/view/:id/buynow' element={<PrivateRoute><Mycart/></PrivateRoute>}/>
    <Route path='Home/menfashion/view/:id' element={<PrivateRoute><Productdetails/></PrivateRoute>}/>
    <Route path='Home/menfashion/view/:id/buynow' element={<PrivateRoute><Mycart/></PrivateRoute>}/>
    <Route path='Home/womenfashion/view/:id'element={<PrivateRoute><Productdetails/></PrivateRoute>}/>
    <Route path='Home/womenfashion/view/:id/buynow' element={<PrivateRoute><Mycart/></PrivateRoute>}/>
    <Route path='Home/footwear/view/:id' element={<PrivateRoute><Productdetails/></PrivateRoute>}/>
    <Route path='footwear/view/:id/buynow' element={<PrivateRoute><Mycart/></PrivateRoute>}/>
    <Route path='cart' element={<PrivateRoute><Mycart/></PrivateRoute>}/>
    {/* <Route path='childfashion/view/:id/buylater' element={<Mycart/>}/> */}
    <Route path='childfashion/buynow' element={<PrivateRoute><Mycart/></PrivateRoute>}/>
    <Route path='cart/AddressPage' element={<PrivateRoute><AddressPage /></PrivateRoute>} />
    <Route path='Ordersuccess' element={<PrivateRoute><Ordersuccess /></PrivateRoute>} />
    <Route path='Myorder' element={<PrivateRoute><Myorder /></PrivateRoute>} />
    <Route path='Myorder/view/:id' element={<PrivateRoute><Myorderdetails/></PrivateRoute>} />
    <Route path='/view/:id' element={<PrivateRoute><Productdetails/></PrivateRoute>} />

    

    


    </Routes>
    </Provider>,

    </Layout>



    
    </CartProvider>

    </BrowserRouter>

       



  </React.StrictMode>
);


