import React from 'react';
import { useLocation } from 'react-router-dom';
import Mynav from './Mynav';
import Myfooter from './Myfooter'

  const Layout = ({ children }) => {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup' ;
  

  return (
    <>
    {!hideHeaderFooter && <Mynav />}
    <main>{children}</main>
    {!hideHeaderFooter && <Myfooter />}
  </>
);
};



export default Layout;
