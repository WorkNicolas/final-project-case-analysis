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

    return(
        <div>
            <h1 style={{color: 'black'}}>Employee Management</h1>
            <div className="page-flex">
                <div className="left manage">
                    <h2>Manage Employees</h2>
                    <button onClick={() => setButtonPopup(true)} style={buttonStyles}>Create Employee</button>
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <EmployeeAddInfo />
                        </Popup>
                    <div style={{textAlign: "left"}}>
                        <h2>Functions:</h2>
                        <p><strong>Create Employee</strong>: Creates an employee with the following parameters ID, First Name, Last Name, Age, Gender, Position, Salary, Contact, Email, and Address.</p>
                        <p><strong>Delete</strong>: Deletes an employee entry.</p>
                        <p><strong>Edit</strong>: Edit the employee's parameters</p>
                    </div>
                </div>
                <div className="right manage">
                <EmployeeTable popupOpen={popupOpen}/>
                </div>
            </div>
        </div>
    )
}

