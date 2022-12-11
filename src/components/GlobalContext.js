import { useState, useEffect, createContext, useContext } from 'react';
import Employee from './objects/Employee';
import Customer from './objects/Customer';
import Property from './objects/Property';
import Booking from './objects/Booking';

export const EmployeeContext = createContext();
export const CustomerContext = createContext();
export const PropertyContext = createContext();
export const BookingContext = createContext();