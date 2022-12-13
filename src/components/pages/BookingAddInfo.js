import React from "react";
import './BookingAddInfo.css'
import { BookingContext } from '../GlobalContext';

export default function BookingAddInfo() {
    const {bookings, setBookings} = useContext(BookingContext);
    const { handleFormChange4 } = useContext(BookingContext);
    const { handleFormSubmit4 } = useContext(BookingContext);
    
    return(
        <form className="booking-form" onSubmit={handleFormSubmit4} >
            <h1>Booking Details</h1>
            <div className="page-flex">
                <div className="left booking">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={handleFormChange4}
                        class="form-control" 
                        required />

                    <label htmlFor="name">Address:</label>
                    <input 
                        type="phone" 
                        name="address" 
                        onChange={handleFormChange4}
                        class="form-control" 
                        required />

                    
                </div>
                <div className="right booking">
                    <label htmlFor="name">Customer:</label>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={handleFormChange4}
                        className="form-control" 
                        required />

                    <label htmlFor="date">Date or Schedule:</label>
                    <input 
                        type="date" 
                        name="schedule" 
                        onChange={handleFormChange4}
                        className="form-control" 
                        required />
                </div>
            </div>
            <button type="submit" className="button-booking">Book Now</button>
        </form>
    )
}