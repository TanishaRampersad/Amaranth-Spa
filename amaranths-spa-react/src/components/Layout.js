import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';  
import Footer from './Footer'; 
import './Layout.css';

export default function Layout() {
  return (
    <div className='layout'>
      <header>
        <Navbar />
      </header>

      <div className='main'>
        <Outlet />  {/* This renders the current route's component */}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
