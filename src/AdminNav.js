// import React from 'react';
// import { Link, NavLink ,useNavigate } from "react-router-dom";
// import './AdminNavStyle.css'
// import { useState, useEffect } from "react";


// function AdminNav() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const navigate = useNavigate();
  
//   useEffect(() => {
//     const token = localStorage.getItem('token');
    
//     // If no token is found, redirect to the login page
//     if (!token) {
//       navigate('/admin/login');
//     }
//   }, [navigate]);
//   return (
//     <div>

// <nav>
//       <Link to="/" className="title">
//       SN Enterpires<span style={{color:"black"}}></span>
//       </Link>
//       <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <ul className={menuOpen ? "open" : ""}>
//         <li>
//           <NavLink to="/admin/AdminDashboard">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/admin/AddActivities"> addActivities</NavLink>
//         </li>
//         <li>
//           <NavLink to="/admin/CustomerRequst"> CustomerRequst</NavLink>
//         </li>
//       </ul>
//     </nav>

//     </div>
//   )
// }

// export default AdminNav;


import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './AdminNavStyle.css';

function AdminNav() {
    const [menuOpen, setMenuOpen] = useState(false);
     const navigate = useNavigate();

    // useEffect(() => {
    //     const token = localStorage.getItem('token');

    //     if (!token) {
    //         navigate('/admin/login');
    //     }
    // }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
  
        navigate('/');
    };

    return (
        <div>
            <nav className="AdminNav">
                <Link to="/" className="title">
                    SN Enterprises<span style={{ color: "black" }}></span>
                </Link>
                <div className="menu" >
                {/* onClick={() => setMenuOpen(!menuOpen)} */}
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/admin/AdminDashboard">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/AddActivities">Add Activities</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/CustomerRequst">Customer Requests</NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogout}  className="logout-button" >Logout</button>
                        
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AdminNav;
