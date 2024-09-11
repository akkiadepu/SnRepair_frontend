import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './AdminNavStyle.css'
import { useState } from "react";


function AdminNav() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>

<nav>
      <Link to="/" className="title">
      SN Enterpires<span style={{color:"black"}}></span>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/admin/AdminDashboard">Home</NavLink>
        </li>
        <li>
          <NavLink to="/admin/AddActivities"> addActivities</NavLink>
        </li>
        <li>
          <NavLink to="/admin/CustomerRequst"> CustomerRequst</NavLink>
        </li>
      </ul>
    </nav>

    </div>
  )
}

export default AdminNav;