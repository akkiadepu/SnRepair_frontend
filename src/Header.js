import React from 'react'
import './Homestyle.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    
  return (
    <div>
         <header>
        <div className="container1">
            <div className="logo">
                <img src="logo.png" alt="SN Repair Logo"/>
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
                <p>Have any questions? <br/> <a href="tel:+918790096926">+91 8790096926</a></p>
            </div>
        </div>
    </header>

    </div>
  )
}

export default Header