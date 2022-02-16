
import React from 'react';
import "./NavLink.css"
import {   Link } from "react-router-dom";

import logo from "./assets/LOGO.png"


function NavLink() {
  return <div className='navbar'>
     <div>
     <img  className='nav_logo' src={logo} height="40px" alt="logo"/>
    </div>
    
    {/* <div > */}
      
        <div className='vr_home'>
        <strong>
        <Link to="/"  style={{color:"#fff",textDecoration:'none'}}>Home</Link>
        </strong>
        </div>
        <div className='vr_tech'>
      <strong>  <Link   to="/product-overview"  style={{color:"#fff",textDecoration:'none'}}>VR/AR</Link>
      </strong>
        </div>
   
        <div className='vr_about'>
        <strong>
        <Link to='/about'  style={{color:"#fff",textDecoration:'none'}}>About</Link>
        </strong>
        </div>
        <div className='vr_contact'>
          <strong>
        <Link to='/contact'  style={{color:"#fff",textDecoration:'none'}}>Contact</Link>
        </strong>
        </div>
        <div className='vr_login'>
        <strong>
        <Link to='/login'  style={{color:"#fff",textDecoration:'none'}}>Log In</Link>
        </strong>
        </div>
        {/* </div> */}
        
       </div>;
}

export default NavLink;
