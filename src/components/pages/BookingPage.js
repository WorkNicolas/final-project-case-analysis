import React from "react"
import BookingTable from "./tables/BookingTable"
import './Page.css';
import { buttonStyles } from '../styles/styles.js';
import BookingAddInfo from "./BookingAddInfo";
import { useState, useEffect } from 'react';
import Popup from "./Popup";

export default function BookingPage(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        setPopupOpen(false);
        console.log("popupOpen")
    }, [buttonPopup])

    return(
        <div>
            <h1 style={{color: 'black'}}>Inspection Booking</h1>
            <div className="page-flex">
                <div className="left manage">
                    <h2>Manage Bookings</h2>
                    <button onClick={() => setButtonPopup(true)} style={buttonStyles}>Create Booking</button>
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <BookingAddInfo />
                        </Popup>
                    <div style={{textAlign: "left"}}>
                        <p><strong>Create Booking</strong>: Creates a booking with the following parameters ID, Title, Schedule, Customer, Agent, Address, and Price.</p>
                        <p><strong>Edit Booking</strong>: Edit the booking's parameters</p>
                        <p><strong>Delete</strong>: Deletes a booking entry.</p>
                        
                    </div>
                </div>
                <div className="right manage">
                <BookingTable />
                </div>
            </div>
        </div>
    )
}