import React, {useState} from 'react';
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
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import { EmployeeContext, CustomerContext, PropertyContext, BookingContext } from './components/GlobalContext';
import employeeData from './components/pages/tables/EMPLOYEE_MOCK_DATA.json';
import customerData from './components/pages/tables/CUSTOMER_MOCK_DATA.json';
import propertyData from './components/pages/tables/PROPERTY_MOCK_DATA.json';
import bookingData from './components/pages/tables/BOOKING_MOCK_DATA.json';

function App() {
  const [employees, setEmployees] = useState(employeeData);
  const [customers, setCustomers] = useState(customerData);
  const [properties, setProperties] = useState(propertyData);
  const [bookings, setBookings] = useState(bookingData);

  const [addEmployeeData, setAddEmployeeData] = useState({
    fname: '',
    lname: '',
    age: '',
    gender: '',
    position: '',
    salary: null,
    contact: '',
    email: '',
    address: '',
  })

  return (
    <EmployeeContext.Provider value={{employees, setEmployees}}>
      <CustomerContext.Provider value={{customers, setCustomers}}>
        <PropertyContext.Provider value={{properties, setProperties}}>
          <BookingContext.Provider value={{bookings, setBookings}}>
          <main>
            <header>
              <Navbar />
            </header>
            <div className="container">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/employee" element={<EmployeePage />} />
                  <Route path="/customer" element={<CustomerPage />} />
                  <Route path="/property" element={<PropertyPage />} />
                  <Route path="/booking" element={<BookingPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </main>
          </BookingContext.Provider>
        </PropertyContext.Provider>
      </CustomerContext.Provider>
    </EmployeeContext.Provider>
  );
}

export default App;
