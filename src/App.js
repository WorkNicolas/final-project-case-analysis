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

  //determines what row becomes input

  const [editEmployeeId, setEditEmployeeId] = useState(null);

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

    setEditEmployeeFormData(formValues);
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

  //detects every change in input for editing old entries

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editEmployeeFormData };
    newFormData[fieldName] = fieldValue;

    setEditEmployeeFormData(newFormData);
  }

  //edits old entry when clicked

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedEmployee = {
      id: editEmployeeId,
      fname: editEmployeeFormData.fname,
      lname: editEmployeeFormData.lname,
      age: editEmployeeFormData.age,
      gender: editEmployeeFormData.gender,
      position: editEmployeeFormData.position,
      salary: editEmployeeFormData.salary,
      contact: editEmployeeFormData.contact,
      email: editEmployeeFormData.email,
      address: editEmployeeFormData.address
    }

    const newEmployees = [...employees];

    const index = employees.findIndex((employee) => employee.id === editEmployeeId);

    newEmployees[index] = editedEmployee;
    //setEmployees(editedEmployee); //why does this make the page blank??? 😠
    //that should edit the table, but it doesn't work 😭
    setEditEmployeeId(null);
  }

  //cancels edit

  const handleCancelClick = () => {
    setEditEmployeeId(null);
  }

  //TABLE DELETE
  
  const handleDeleteClick = (employee_id) => {
    const newEmployees = [...employees];

    const index = employees.findIndex((employee) => employee.id === employee_id);

    newEmployees.splice(index, 1);

    setEmployees(newEmployees);
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

  //TABLE EDIT

  //determines what row becomes input

  const [editCustomerId, setEditCustomerId] = useState(null);

  //edit button clicked, changes edit...Id to respective id to change from ...TableRead to ...TableEdit

  const handleEditClick2 = (event, customer) => {
    event.preventDefault();
    console.log('Edit Clicked: ' + JSON.parse(customer.id));
    setEditCustomerId(JSON.parse(customer.id));

    const formValues = {
      id: customer.id,
      fname: customer.fname,
      lname: customer.lname,
      age: customer.age,
      gender: customer.gender,
      balance: customer.balance,
      contact: customer.contact,
      email: customer.email,
      address: customer.address,
    }

    setEditCustomerFormData(formValues);
  }

  //object used for handling edit methods

  const [editCustomerFormData, setEditCustomerFormData] = useState({
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

  //detects every change in input for editing old entries

  const handleEditFormChange2 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editCustomerFormData };
    newFormData[fieldName] = fieldValue;

    setEditCustomerFormData(newFormData);
  }

  //edits old entry when clicked

  const handleEditFormSubmit2 = (event) => {
    event.preventDefault();

    const editedCustomer = {
      id: editCustomerId,
      fname: editCustomerFormData.fname,
      lname: editCustomerFormData.lname,
      age: editCustomerFormData.age,
      gender: editCustomerFormData.gender,
      balance: editCustomerFormData.balance,
      contact: editCustomerFormData.contact,
      email: editCustomerFormData.email,
      address: editCustomerFormData.address
    }

    const newCustomers = [...customers];

    const index = customers.findIndex((customer) => customer.id === editCustomerId);

    newCustomers[index] = editedCustomer;
    //setCustomers(editedCustomer); //why does this make the page blank??? 😠
    //that should edit the table, but it doesn't work 😭
    setEditCustomerId(null);
  }

  //cancels edit

  const handleCancelClick2 = () => {
    setEditCustomerId(null);
  }

  //TABLE DELETE

  const handleDeleteClick2 = (customer_id) => {
    const newCustomers = [...customers];

    const index = customers.findIndex((customer) => customer.id === customer_id);

    newCustomers.splice(index, 1);

    setCustomers(newCustomers);
  }

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

  //TABLE EDIT

  //determines what row becomes input

  const [editPropertyId, setEditPropertyId] = useState(null);

  //edit button clicked, changes edit...Id to respective id to change from ...TableRead to ...TableEdit

  const handleEditClick3 = (event, property) => {
    event.preventDefault();
    console.log('Edit Clicked: ' + JSON.parse(property.id));
    setEditPropertyId(JSON.parse(property.id));

    const formValues = {
      id: property.id,
      price: property.price,
      address: property.address,
      size: property.size,
      org: property.org,
      bds: property.bds,
      ba: property.ba,
    }

    setEditPropertyFormData(formValues);
  }

  //object used for handling edit methods

  const [editPropertyFormData, setEditPropertyFormData] = useState({
    id: null,
    price: null,
    address: '',
    size: null,
    org: '',
    bds: null,
    ba: null,
  })

  //detects every change in input for editing old entries

  const handleEditFormChange3 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editPropertyFormData };
    newFormData[fieldName] = fieldValue;

    setEditPropertyFormData(newFormData);
  }

  //edits old entry when clicked

  const handleEditFormSubmit3 = (event) => {
    event.preventDefault();

    const editedProperty = {
      id: editPropertyId,
      price: editPropertyFormData.price,
      address: editPropertyFormData.address,
      size: editPropertyFormData.size,
      org: editPropertyFormData.org,
      bds: editPropertyFormData.bds,
      ba: editPropertyFormData.ba,
    }

    const newProperties = [...properties];

    const index = properties.findIndex((property) => property.id === editPropertyId);

    newProperties[index] = editedProperty;
    //setProperty(editedProperty); //why does this make the page blank??? 😠
    //that should edit the table, but it doesn't work 😭
    setEditPropertyId(null);
  }

  //cancels edit

  const handleCancelClick3 = () => {
    setEditPropertyId(null);
  }

  //TABLE DELETE

  const handleDeleteClick3 = (property_id) => {
    const newProperties = [...properties];

    const index = properties.findIndex((property) => property.id === property_id);

    newProperties.splice(index, 1);

    setProperties(newProperties);
  }

  //Booking Comment

  const [addBookingData, setAddBookingData] = useState({
    id: null,
    title: '',
    schedule: '',
    name: '',
    agent: '',
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
      agent: addBookingData.agent,
      address: addBookingData.address,
      price: addBookingData.price,
    };
    bookingId++;
    const newBookings = [...bookings, newBooking];
    setBookings(newBookings);
  };

  //TABLE EDIT

  //determines what row becomes input

  const [editBookingId, setEditBookingId] = useState(null);

  //edit button clicked, changes edit...Id to respective id to change from ...TableRead to ...TableEdit

  const handleEditClick4 = (event, booking) => {
    event.preventDefault();
    console.log('Edit Clicked: ' + JSON.parse(booking.id));
    setEditBookingId(JSON.parse(booking.id));

    const formValues = {
      id: booking.id,
      title: booking.title,
      schedule: booking.schedule,
      name: booking.name,
      agent: booking.agent,
      address: booking.address,
      price: booking.price,
    }

    setEditBookingFormData(formValues);
  }

  const [editBookingFormData, setEditBookingFormData] = useState({
    id: null,
    title: '',
    schedule: '',
    name: '',
    agent: '',
    address: '',
    price: null,
  })

  //detects every change in input for editing old entries

  const handleEditFormChange4 = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editBookingFormData };
    newFormData[fieldName] = fieldValue;

    setEditBookingFormData(newFormData);
  }

  const handleEditFormSubmit4 = (event) => {
    event.preventDefault();

    const editedBooking = {
      id: editBookingId,
      title: editBookingFormData.title,
      schedule: editBookingFormData.schedule,
      name: editBookingFormData.name,
      agent: editBookingFormData.agent,
      address: editBookingFormData.address,
      price: editBookingFormData.price,
    }

    const newBookings = [...bookings];

    const index = bookings.findIndex((booking) => booking.id === editBookingId);

    newBookings[index] = editedBooking;
    //setBooking(editedBooking); //why does this make the page blank??? 😠
    //that should edit the table, but it doesn't work 😭
    setEditBookingId(null);
  }

  //cancels edit

  const handleCancelClick4 = () => {
    setEditBookingId(null);
  }

  //TABLE DELETE

  const handleDeleteClick4 = (booking_id) => {
    const newBookings = [...bookings];

    const index = bookings.findIndex((booking) => booking.id === booking_id);

    newBookings.splice(index, 1);

    setBookings(newBookings);
  }

  //Router
  //...Context.Provider ... provides global context for the tag children

  return (
    <EmployeeContext.Provider value={{employees, setEmployees, //original objects

                                      addEmployeeData, setAddEmployeeData, //add entries
                                      handleFormChange, handleFormSubmit, 

                                      handleEditClick, //edit entries
                                      editEmployeeId, setEditEmployeeId,
                                      editEmployeeFormData, setEditEmployeeFormData,
                                      handleEditFormChange, handleEditFormSubmit,
                                      handleCancelClick,
                                      
                                      handleDeleteClick}}>
      <CustomerContext.Provider value={{customers, setCustomers, //original objects

                                      addCustomerData, setAddCustomerData, //add entries
                                      handleFormChange2, handleFormSubmit2,
                                      
                                      handleEditClick2, //edit entries
                                      editCustomerId, setEditCustomerId,
                                      editCustomerFormData, setEditCustomerFormData,
                                      handleEditFormChange2, handleEditFormSubmit2,
                                      handleCancelClick2,
                                      
                                      handleDeleteClick2}}>
        <PropertyContext.Provider value={{properties, setProperties, //original objects

                                        addPropertyData, setAddPropertyData, //add entries
                                      handleFormChange3, handleFormSubmit3,
                                      
                                      handleEditClick3, //edit entries
                                      editPropertyId, setEditPropertyId,
                                      editPropertyFormData, setEditPropertyFormData,
                                      handleEditFormChange3, handleEditFormSubmit3,
                                      handleCancelClick3,
                                      
                                      handleDeleteClick3}}>
          <BookingContext.Provider value={{bookings, setBookings, //original objects

                                        addBookingData, setAddBookingData, //add entries
                                        handleFormChange4, handleFormSubmit4,
                                        
                                        handleEditClick4, //edit entries
                                        editBookingId, setEditBookingId,
                                        editBookingFormData, setEditBookingFormData,
                                        handleEditFormChange4, handleEditFormSubmit4,
                                        handleCancelClick4,
                                        
                                        handleDeleteClick4}}>
          <main>
            <header>
              <Navbar />
            </header>
            <div className="container" >
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
