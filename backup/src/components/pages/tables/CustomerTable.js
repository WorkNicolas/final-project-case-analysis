import React, { useState, useContext } from 'react';
import './tables.css';
import data from './CUSTOMER_MOCK_DATA.json';
import { CustomerContext } from '../../GlobalContext';

export default function CustomerTable() {
    const {customers, setCustomers} = useContext(CustomerContext);
    return(
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Balance</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>


                <tbody>
                    {customers.map((customer) => (
                        <tr>
                            <td>{customer.id}</td>
                            <td>{customer.fname}</td>
                            <td>{customer.lname}</td>
                            <td>{customer.age}</td>
                            <td>{customer.gender}</td>
                            <td>Php {customer.balance}</td>
                            <td>{customer.contact}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}