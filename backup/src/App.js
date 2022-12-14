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

  //Employee Comment

  const [addEmployeeData, setAddEmployeeData] = useState({
    id: null,
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

  const [editEmployeeForm, setEditEmployeeForm] = useState({
    id: null,
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

  const [editEmployeeId, setEditEmployeeId] = useState()

  const handleFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addEmployeeData};
    newFormData[fieldName] = fieldValue;
    console.log(fieldValue)
    setAddEmployeeData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editEmployeeForm };
    newFormData[fieldName] = fieldValue;

    setEditEmployeeForm(newFormData);
  }

  let employeeId = employees.length;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Employee Submitted")

    const newEmployee = {
      id: employeeId + 1,
      fname: addEmployeeData.fname,
      lname: addEmployeeData.lname,
      age: addEmployeeData.age,
      gender: addEmployeeData.gender,
      position: addEmployeeData.position,
      salary: addEmployeeData.salary,
      contact: addEmployeeData.contact,
      email: addEmployeeData.email,
      address: addEmployeeData.address,
    };
    employeeId++;
    const newEmployees = [...employees, newEmployee];
    setEmployees(newEmployees);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    
    const editedEmployee = {
      id: editEmployeeId,
      fname: editEmployeeForm.fname,
      lname: editEmployeeForm.lname,
      age: editEmployeeForm.age,
      gender: editEmployeeForm.gender,
      position: editEmployeeForm.position,
      salary: editEmployeeForm.salary,
      contact: editEmployeeForm.contact,
      email: editEmployeeForm.email,
      address: editEmployeeForm.address,
    }

    const newEmployees = [...employees];
    const index = employees.findIndex((employee) => employee.id === editEmployeeForm.id);


    newEmployees[index] = editedEmployee;

    setEmployees(newEmployees);
    setEditEmployeeId(null);
  }

  const handleEditClick = (event, id, employee) => {
    event.preventDefault();
    console.log(id)
    setEditEmployeeId(id);

    const formValues = {
      fname: employee.fname,
      lname: employee.lname,
      age: employee.age,
      gender: employee.gender,
      position: employee.position,
      salary: employee.salary,
      contact: employee.contact,
      email: employee.email,
      address: employee.address,
    }

    setEditEmployeeForm(formValues);
  }

  //Customer Comment

  const [addCustomerData, setAddCustomerData] = useState({
    id: null,
    fname: '',
    lname: '',
    age: '',
    gender: '',
    balance: null,
    contact: '',
    email: '',
    address: '',
  })
  let customerId = customers.length;
  const handleFormChange2 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addCustomerData};
    newFormData[fieldName] = fieldValue;
    console.log(fieldValue)
    setAddCustomerData(newFormData);
  };

  const handleFormSubmit2 = (event) => {
    event.preventDefault();
    console.log("Customer Submitted")

    const newCustomer = {
      id: customerId + 1,
      fname: addCustomerData.fname,
      lname: addCustomerData.lname,
      age: addCustomerData.age,
      gender: addCustomerData.gender,
      balance: addCustomerData.balance,
      contact: addCustomerData.contact,
      email: addCustomerData.email,
      address: addCustomerData.address,
    };
    customerId++;
    const newCustomers = [...customers, newCustomer];
    setCustomers(newCustomers);
  };

  //Property Comment

  let propertyId = properties.id;
  const [addPropertyData, setAddPropertyData] = useState({
    id: null,
    price: null,
    address: '',
    size: null,
    org: '',
    bds: null,
    ba: null,
  })

  const handleFormChange3 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addPropertyData};
    newFormData[fieldName] = fieldValue;
    console.log(fieldValue)
    setAddPropertyData(newFormData);
  };

  const handleFormSubmit3 = (event) => {
    event.preventDefault();
    console.log("Property Submitted")

    const newProperty = {
      id: propertyId + 1,
      price: addPropertyData.price,
      address: addPropertyData.address,
      size: addPropertyData.size,
      org: addPropertyData.org,
      bds: addPropertyData.bds,
      ba: addPropertyData.ba,
    };
    propertyId++;
    const newProperties = [...properties, newProperty];
    setProperties(newProperties);
  };

  //Booking Comment

  const [addBookingData, setAddBookingData] = useState({
    id: null,
    title: '',
    schedule: '',
    name: null,
    address: '',
    price: null,
  })
  let bookingId = bookings.length;
  const handleFormChange4 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addBookingData};
    newFormData[fieldName] = fieldValue;
    console.log(fieldValue)
    setAddBookingData(newFormData);
  };

  const handleFormSubmit4 = (event) => {
    event.preventDefault();
    console.log("Booking Submitted")

    const newBooking = {
      id: bookingId + 1,
      title: addBookingData.title,
      schedule: addBookingData.schedule,
      name: addBookingData.name,
      address: addBookingData.address,
      price: addBookingData.price,
    };
    bookingId++;
    const newBookings = [...bookings, newBooking];
    setBookings(newBookings);
  };

  return (
    <EmployeeContext.Provider value={{employees, setEmployees, addEmployeeData, setAddEmployeeData, handleFormChange, handleFormSubmit, handleEditClick, editEmployeeId, setEditEmployeeId, handleEditFormChange, editEmployeeForm, setEditEmployeeForm, handleEditFormSubmit}}>
      <CustomerContext.Provider value={{customers, setCustomers, addCustomerData, setAddCustomerData, handleFormChange2, handleFormSubmit2}}>
        <PropertyContext.Provider value={{properties, setProperties, addPropertyData, setAddPropertyData, handleFormChange3, handleFormSubmit3}}>
          <BookingContext.Provider value={{bookings, setBookings, addBookingData, setAddBookingData, handleFormChange4, handleFormSubmit4}}>
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
