import { useState, useEffect, createContext, useContext } from 'react';
import Employee from './objects/Employee';
import Customer from './objects/Customer';
import Property from './objects/Property';
import Booking from './objects/Booking';
import employeeData from './pages/tables/EMPLOYEE_MOCK_DATA.json';
import customerData from './pages/tables/CUSTOMER_MOCK_DATA.json';
import propertyData from './pages/tables/PROPERTY_MOCK_DATA.json';
import bookingData from './pages/tables/BOOKING_MOCK_DATA.json';


export const EmployeeContext = createContext();
export const CustomerContext = createContext();
export const PropertyContext = createContext();
export const BookingContext = createContext();

