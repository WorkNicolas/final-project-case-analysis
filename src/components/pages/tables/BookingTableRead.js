import React from "react";

export const BookingTableRead = ({booking, handleEditClick4, handleDeleteClick4}) => {
    return(
        <tr>
            <td>{booking.title}</td>
            <td>{booking.schedule}</td>
            <td>{booking.name}</td>
            <td>{booking.agent}</td>
            <td>{booking.address}</td>
            <td>Php {booking.price}</td>
            <td>
                <button 
                    type="button"
                    onClick={(event) => handleEditClick4(event, booking)} 
                    >
                    Edit
                </button>
                <button 
                    style={{width: '42px'}}
                    type="button"
                    onClick={() => handleDeleteClick4(booking.id)}
                    >
                    Delete
                </button>
            </td>
        </tr>
    )
}