import React, { useState, useContext, Fragment } from 'react';
import './tables.css';
import data from './BOOKING_MOCK_DATA.json'
import { BookingContext } from '../../GlobalContext';
import { BookingTableRead } from './BookingTableRead';
import { BookingTableEdit } from './BookingTableEdit';
import { EmployeeTableRead } from './EmployeeTableRead';

export default function BookingTable() {
    const {bookings, setBookings} = useContext(BookingContext);
    const {editBookingId, setEditBookingId} = useContext(BookingContext);
    const {handleEditClick4} = useContext(BookingContext);
    const {editBookingFormData, setEditBookingFormData} = useContext(BookingContext);
    const {handleEditFormChange4} = useContext(BookingContext);
    const {handleEditFormSubmit4} = useContext(BookingContext);
    const {handleCancelClick4} = useContext(BookingContext);
    const {handleDeleteClick4} = useContext(BookingContext);

    return(
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Schedule</th>
                    <th>Customer</th>
                    <th>Agent</th>
                    <th>Address</th>
                    <th>Commission</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {bookings.map((booking) => (
                        <Fragment>
                        { editBookingId === booking.id ?
                                <BookingTableEdit
                                    editBookingFormData={editBookingFormData}
                                    handleEditFormChange4={handleEditFormChange4}
                                    handleCancelClick4={handleCancelClick4}
                                />
                                :
                                <BookingTableRead
                                    booking={booking}
                                    handleEditClick4={handleEditClick4}
                                    handleDeleteClick4={handleDeleteClick4}
                                />
                            }
                        </Fragment>
                    ))}
                </tbody>
                </table>
        </div>
    )
}