import React from "react"
import CustomerTable from "./tables/CustomerTable"
import './Page.css';
import { buttonStyles } from '../styles/styles.js';
import Popup from "./Popup";
import { useState, useEffect } from 'react';
import CustomerAddInfo from "./CustomerAddInfo";

export default function CustomerPage(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        setPopupOpen(false);
        console.log("popupOpen")
    }, [buttonPopup])

    return(
        <div>
            <h1 style={{color: 'black'}}>Customer Management</h1>
            <div className="page-flex">
                <div className="left manage">
                    <h2>Manage Customers</h2>
                    <button onClick={() => setButtonPopup(true)} style={buttonStyles}>Create Customer</button>
                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <CustomerAddInfo />
                            </Popup>

                    <div style={{textAlign: "left"}}>
                        <h2>Functions:</h2>
                        <p><strong>Create Customer</strong>: Creates acustomer with the following parameters ID, First Name, Last Name, Age, Gender, Balance, Contact, and Email.</p>
                        <p><strong>Delete</strong>: Deletes a customer entry.</p>
                        <p><strong>Edit</strong>: Edit the customer's parameters.</p>
                    </div>
                </div>
                <div className="right manage">
                <CustomerTable />
                </div>
            </div>
        </div>
    )
}