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

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
    
    
       {/* <Header/>  */}
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/activits" element={<Activits/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/admin/login" element={<Admin/>}/>
          
          <Route path="/admin/AdminDashboard"  element={<PrivateRoute><AdminDashboard/></PrivateRoute>} />
          <Route path="/admin/AddActivities" element={<AddActivities/>} />
          <Route path="/admin/CustomerRequst" element={<CustomerRequst/>} />
      </Routes>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
