// PrivateRoute.js
// PrivateRoute.js
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Assume token is valid if present in localStorage
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;




// import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import axios from 'axios';

// const PrivateRoute = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const token = localStorage.getItem('token');

//         if (token) {
//             axios.post('http://localhost:5000/admin/verify-token', {}, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })
//             .then(response => {
//                 if (response.status === 200) {
//                     setIsAuthenticated(true);
//                 } else {
//                     setIsAuthenticated(false);
//                 }
//             })
//             .catch(error => {
//                 console.error('Token validation failed:', error.response ? error.response.data : error.message);
//                 setIsAuthenticated(false);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//         } else {
//             setLoading(false);
//         }
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;  // Show a loading spinner or message while checking authentication
//     }

//     return isAuthenticated ? children : <Navigate to="/admin/login" />;  // Redirect to login if not authenticated
// };

// export default PrivateRoute;

