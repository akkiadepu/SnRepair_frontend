import React, { useState } from "react";

import { Link, NavLink } from 'react-router-dom';
import logo from "./logo.png";
import "./CSS/Header.css";

function Header() {
        const [menuOpen, setMenuOpen] = useState(false);
      
        const toggleMenu = () => {
          setMenuOpen(!menuOpen);
        };
    
  return (
    <div>
         <header>
        <div className="container1">
            <div className="logo1">
                <img src={logo} alt="SN Repair Logo"/>
            </div>
            <nav>
                <ul>
                    <li> <NavLink to="/">Home</NavLink> </li>
                    <li> <NavLink to="/services">Services</NavLink>  </li>
                    <li> <NavLink to="/activits">Activits</NavLink> </li>
                    <li> <NavLink to="/aboutUs">AboutUs</NavLink> </li>
                    <li> <NavLink to="/contactUs">ContactUs</NavLink> </li>
                    
                </ul>
            </nav>
            <div className="contact-info">
                <p>Have any questions? <br/> <a href="#">+91 8790096926</a></p>
            </div>
        </div>
    </header> 


  
      // <div className="container1">
      //   <div className="logo1">
      //     <img src={logo} alt="SN Repair Logo" />
      //   </div>
      //   <button className="mobile-menu-btn" onClick={toggleMenu}>
      //     &#9776; {/* Mobile menu icon */}
      //   </button>
      //   <nav>
      //     <ul className={menuOpen ? "menu show" : "menu"}>
      //       <li>
      //         <NavLink to="/">Home</NavLink>
      //       </li>
      //       <li>
      //         <NavLink to="/services">Services</NavLink>
      //       </li>
      //       <li>
      //         <NavLink to="/activits">Activits</NavLink>
      //       </li>
      //       <li>
      //         <NavLink to="/aboutUs">AboutUs</NavLink>
      //       </li>
      //       <li>
      //         <NavLink to="/contactUs">ContactUs</NavLink>
      //       </li>
      //     </ul>
      //   </nav>
      //   <div className="contact-info">
      //     <p>
      //       Have any questions? <br /> <a href="#">+91 8790096926</a>
      //     </p>
      //   </div>
      // </div>
    

    </div>
  )
}

export default Header
