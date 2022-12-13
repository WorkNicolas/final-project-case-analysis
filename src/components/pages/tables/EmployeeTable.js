import React, { useState, useContext } from 'react';
import './tables.css';
import data from './EMPLOYEE_MOCK_DATA.json'
import { EmployeeContext } from '../../GlobalContext';

export default function EmployeeTable(props) {
    const {employees, setEmployees} = useContext(EmployeeContext);
    return(
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr style={props.popupOpen ? {position: 'static'} : {position: 'static'}}>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>


                <tbody>
                    {employees.map((employee) => (
                        <tr>
                            <td>{employee.id}</td>
                            <td>{employee.fname}</td>
                            <td>{employee.lname}</td>
                            <td>{employee.age}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.position}</td>
                            <td>Php {employee.salary}</td>
                            <td>{employee.contact}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}