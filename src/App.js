import React from 'react';
import './App.css';
import './styles.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/commons/Header'
import Home from './components/pages/Home';
import Test from './Test';
import Navbar from './components/Navbar';
import EmployeePage from './components/pages/EmployeePage';
import CustomerPage from './components/pages/CustomerPage';
import PropertyPage from './components/pages/PropertyPage';
import BookingPage from './components/pages/BookingPage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = App
      break
    case "/employee":
      component = <EmployeePage />
      break
    case "/customer":
      component = <CustomerPage />
      break
    case "/property":
      component = <PropertyPage />
      break
    case "/booking":
      component = <BookingPage />
      break
    case "/about":
      component = <About />
      break
    case "/contact":
      component = <Contact />
      break
    default: 
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        {component}
      </div>
      
    </div>
  );
}

/*
<Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/' elememnt={<Test />}></Route>
      </Routes>
*/

//To see how routes work, check out this link:
//https://github.com/WorkNicolas/register-form
//save anywhere, and npm start register-form

export default App;
