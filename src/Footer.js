import React from 'react'
import './Homestyle.css';

function Footer() {
  return (
    <div>
         <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="logo.png" alt="SN Auto Enterprises"/>
                </div>
                <div className="footer-about">
                    <p>SN Auto Enterprises<br/> GMC-405, Auto Nagar, Vijayawada, Andhra Pradesh 520007<br/> polaunnav@gmail.com<br/> +91 8790096926</p>
                </div>
                <div className="footer-services">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="/services">Repairing Solutions</a></li>
                        <li><a href="/services">Painting Works</a></li>
                        <li><a href="/services">Washing & Maintenances</a></li>
                        <li><a href="/activits">And More</a></li>
                    </ul>
                </div>
                <div className="footer-company">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/activits">Activities</a></li>
                        <li><a href="/aboutUs">About Us</a></li>
                        <li><a href="/contactUs">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <p className="footer-bottom">Copyright © 2024 My Blog | Powered by SN Auto Enterprises</p>
        </div>
    </footer>

    </div>
  )
}

export default Footer;