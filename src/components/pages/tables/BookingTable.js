import React, { useState, useContext } from 'react';
import './tables.css';
import data from './BOOKING_MOCK_DATA.json'
import { BookingContext, EmployeeContext, CustomerContext } from '../../GlobalContext';

export default function BookingTable() {
    const {bookings, setBookings} = useContext(BookingContext);
    const {employees, setEmployees} = useContext(EmployeeContext);
    const {customers, setCustomers} = useContext(CustomerContext);
    return(
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Schedule</th>
                    <th>Customer</th>
                    <th>Agent</th>
                    <th>Address</th>
                    <th>Commission</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                    <tr>
                        <td>{booking.title}</td>
                        <td>{booking.schedule}</td>
                        <td>{booking.name}</td>
                        <td>{booking.agent}</td>
                        <td>{booking.address}</td>
                        <td>{booking.price}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
        </div>
    )
}