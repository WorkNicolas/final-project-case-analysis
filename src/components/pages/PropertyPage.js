import React from "react"
import PropertyTable from "./tables/PropertyTable"
import './Page.css';
import { buttonStyles } from '../styles/styles.js';
import PropertyAddInfo from "./PropertyAddInfo";
import { useState, useEffect } from 'react';
import Popup from "./Popup";

export default function PropertyPage(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        setPopupOpen(false);
        console.log("popupOpen")
    }, [buttonPopup])

    return(
        <div>
            <h1 style={{color: 'black'}}>Property Management</h1>
            <div className="page-flex">
                <div className="left">
                    <h2>Manage Properties</h2>
                    <div className="page-flex">
                        <div className="left">
                            <button onClick={() => setButtonPopup(true)} style={buttonStyles}>Create Property</button>
                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <PropertyAddInfo />
                            </Popup>
                            <button style={buttonStyles}>Delete Property</button>
                            <button style={buttonStyles}>Edit Property</button>
                        </div>
                        <div className="right">
                        </div>
                    </div>
                    <div style={{textAlign: "left"}}>
                    <h2>Functions:</h2>
                        <p><strong>Create Property</strong>: Creates a property with the following parameters ID, First Name, Last Name, Age, Gender, Position, Salary, Contact, Email, and Address</p>
                        <p><strong>Delete Property</strong>: Deletes a property entry.</p>
                    </div>  
                </div>
                <div className="right">
                <PropertyTable />
                </div>
            </div>
        </div>
    )
}