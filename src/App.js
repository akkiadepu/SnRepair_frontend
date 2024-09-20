import logo from './logo.svg';
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import Activits from './Activits';
import Header from './Header';
import Admin from './Admin';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CustomerRequst from './CustomerRequst';
import PrivateRoute from './PrivateRoute';
import AddActivities from './AddActivities';
import AdminDashboard from './AdminDashboard';
import AdminNav from './AdminNav';
function App() {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
    <div className="App"> 
    {/* {token && <AdminNav />} */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/activits" element={<Activits/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/admin/login" element={<Admin/>}/>
         <Route path="/admin/AdminDashboard"  element={<PrivateRoute><AdminDashboard/></PrivateRoute>} />
          <Route path="/admin/AddActivities" element={<PrivateRoute><AddActivities/></PrivateRoute>} />
          <Route path="/admin/CustomerRequst" element={<PrivateRoute><CustomerRequst/></PrivateRoute>} /> 
              {/* <Route path="/admin/AdminDashboard" element={<PrivateRoute children={<AdminDashboard/>}/>} /> */}
              {/* <Route path="/admin/AddActivities" element={<PrivateRoute children={<AddActivities/>}/>} />
              <Route path="/admin/CustomerRequst" element={<PrivateRoute children={<CustomerRequst/>}/>} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;