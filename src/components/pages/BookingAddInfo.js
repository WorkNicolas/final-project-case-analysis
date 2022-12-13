import React from "react";
import './BookingAddInfo.css'

export default function BookingAddInfo() {
    return(
        <form className="booking-form">
            <h1>Booking Details</h1>
            <div className="page-flex">
                <div className="left booking">
                    <label for="name">Name:</label>
                    <input type="text" id="name" class="form-control" required />

                    <label for="name">Property:</label>
                    <input type="name" id="property" class="form-control" required />

                    <label for="name">Address:</label>
                    <input type="phone" id="adress" class="form-control" required />

                    <label for="date">Date or Schedule:</label>
                    <input type="date" id="date" class="form-control" required />
                </div>
                <div className="right booking">
                    <label for="name">Customer:</label>
                    <input type="text" id="customer" class="form-control" required />

                    <label for="name">Agent:</label>
                    <input type="text" id="agent" class="form-control" required />

                    <label for="guests">Number of Guests:</label>
                    <input type="number" id="guests" class="form-control" required />
                </div>
            </div>
            <button type="submit" className="button-booking">Book Now</button>
        </form>
    )
}