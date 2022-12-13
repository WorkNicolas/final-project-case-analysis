import React from "react"
import EmployeeTable from "./tables/EmployeeTable"
import './Page.css';
import { buttonStyles } from '../styles/styles.js';
import Popup from "./Popup";
import { useState, useEffect } from 'react';
import EmployeeAddInfo from "./EmployeeAddInfo";
import EmployeeDelInfo from "./EmployeeDelInfo";

export default function EmployeePage(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        setPopupOpen(false);
        console.log("popupOpen")
    }, [buttonPopup])

    const [buttonPopup2, setButtonPopup2] = useState(false);
    
    useEffect(() => {
        setPopupOpen(false);
        console.log("popupOpen")
    }, [buttonPopup2])

    return(
        <div>
            <h1>Employee Management</h1>
            <div className="page-flex">
                <div className="left">
                    <h2>Manage Employees</h2>
                    <div className="page-flex">
                        <div className="left">
                            <button onClick={() => setButtonPopup(true)} style={buttonStyles}>Create Employee</button>
                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <EmployeeAddInfo />
                            </Popup>
                            <button onClick={() => setButtonPopup2(true)} style={buttonStyles}>Delete Employee</button>
                            <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
                                <EmployeeDelInfo />
                            </Popup>
                            <button style={buttonStyles}>Edit Employee</button>
                        </div>
                        <div className="right">
                            <button style={buttonStyles}>Add Customer</button>
                            <button style={buttonStyles}>Remove Customer</button>
                        </div>
                    </div>
                    <div style={{textAlign: "left"}}>
                        <h2>Functions:</h2>
                        <p><strong>Create Employee</strong>: Creates an employee with the following parameters ID, First Name, Last Name, Age, Gender, Position, Salary, Contact, Email, and Address.</p>
                        <p><strong>Delete Employee</strong>: Deletes an employee entry.</p>
                        <p><strong>Edit Employee</strong>: Edit the employee's parameters</p>
                        <p><strong>Add Customer</strong>: Adds a customer that the employee will handle.</p>
                        <p><strong>Remove Customer</strong>: Removes a customer that the employee will handle.</p>
                    </div>
                </div>
                <div className="right">
                <EmployeeTable popupOpen={popupOpen}/>
                </div>
            </div>
        </div>
    )
}

