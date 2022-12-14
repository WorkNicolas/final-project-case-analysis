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

  //object used for handling handleFormChange and handleFormSubmit

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

  //keeps track of id for adding new entries

  let employeeId = employees.length;

  //TABLE ADD

  //detects every change in input for adding new entries

  const handleFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addEmployeeData};
    newFormData[fieldName] = fieldValue;
    console.log(fieldValue)
    setAddEmployeeData(newFormData);
  };

  //adds new entry when clicked

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

  //TABLE EDIT

  //determines what row becomes edit

  const [editEmployeeId, setEditEmployeeId] = useState(null)

  //edit button clicked, changes edit...Id to respective id to change from ...TableRead to ...TableEdit

  const handleEditClick = (event, employee) => {
    event.preventDefault();
    console.log('Edit Clicked: ' + JSON.parse(employee.id));
    setEditEmployeeId(JSON.parse(employee.id));

    const formValues = {
      id: employee.id,
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
  }

  //object used for handling edit methods

  const [editEmployeeFormData, setEditEmployeeFormData] = useState({
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

  ////detects every change in input for editing old entries

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editEmployeeFormData };
    newFormData[fieldName] = fieldValue;

    setEditEmployeeFormData(newFormData);
  }

  //Customer Comment

  //object used for handling handleFormChange and handleFormSubmit

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

  //keeps track of id for adding new entries

  let customerId = customers.length;

  //detects every change in input for adding new entries

  const handleFormChange2 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addCustomerData};
    newFormData[fieldName] = fieldValue;
    console.log(fieldValue)
    setAddCustomerData(newFormData);
  };

  //adds new entry when clicked

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

  const [addPropertyData, setAddPropertyData] = useState({
    id: null,
    price: null,
    address: '',
    size: null,
    org: '',
    bds: null,
    ba: null,
  })

  //keeps track of id for adding new entries

  let propertyId = properties.length;

  //detects every change in input for adding new entries

  const handleFormChange3 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addPropertyData};
    newFormData[fieldName] = fieldValue;
    console.log(fieldValue)
    setAddPropertyData(newFormData);
  };

  //adds new entry when clicked

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

  //keeps track of id for adding new entries

  let bookingId = bookings.length;

  //detects every change in input for adding new entries

  const handleFormChange4 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addBookingData};
    newFormData[fieldName] = fieldValue;
    console.log(fieldValue)
    setAddBookingData(newFormData);
  };

  //adds new entry when clicked

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

  //Router
  //...Context.Provider ... provides global context for the tag children

  return (
    <EmployeeContext.Provider value={{employees, setEmployees, //original objects

                                      addEmployeeData, setAddEmployeeData, //add entries
                                      handleFormChange, handleFormSubmit, 

                                      handleEditClick, //edit entries
                                      editEmployeeId, setEditEmployeeId,
                                      editEmployeeFormData, setEditEmployeeFormData,
                                      handleEditFormChange}}>
      <CustomerContext.Provider value={{customers, setCustomers, //original objects

                                      addCustomerData, setAddCustomerData, //add entries
                                      handleFormChange2, handleFormSubmit2,
                                      
                                      }}>
        <PropertyContext.Provider value={{properties, setProperties, //original objects

                                        addPropertyData, setAddPropertyData, //add entries
                                      handleFormChange3, handleFormSubmit3,
                                      
                                      }}>
          <BookingContext.Provider value={{bookings, setBookings, //original objects

                                        addBookingData, setAddBookingData, //add entries
                                        handleFormChange4, handleFormSubmit4,
                                        
                                        }}>
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
