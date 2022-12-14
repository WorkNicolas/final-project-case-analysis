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
                <div className="left manage">
                    <h2>Manage Properties</h2>
                    <button onClick={() => setButtonPopup(true)} style={buttonStyles}>Create Property</button>
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <PropertyAddInfo />
                        </Popup>
                    <div style={{textAlign: "left"}}>
                    <h2>Functions:</h2>
                        <p><strong>Create Property</strong>: Creates a property with the following parameters ID, Prices, Address, Size, Organization, Bedrooms, and Bathrooms.</p>
                        <p><strong>Edit</strong>: Edits a property's parameters.</p>
                        <p><strong>Delete</strong>: Deletes a property entry.</p>
                    </div>  
                </div>
                <div className="right manage">
                <PropertyTable />
                </div>
            </div>
        </div>
    )
}