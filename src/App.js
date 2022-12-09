import React from 'react';
import './App.css';
import './styles.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import EmployeePage from './components/pages/EmployeePage';
import CustomerPage from './components/pages/CustomerPage';
import PropertyPage from './components/pages/PropertyPage';
import BookingPage from './components/pages/BookingPage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee" element={<EmployeePage />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/property" element={<PropertyPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
