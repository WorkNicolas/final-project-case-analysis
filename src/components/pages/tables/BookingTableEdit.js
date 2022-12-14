import React from "react";

export const BookingTableEdit = ({editBookingFormData, handleEditFormChange4, handleCancelClick4}) => {
    return(
        <tr>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Title"
                    onChange={handleEditFormChange4}
                    value={editBookingFormData.title}
                    name="title"></input>
            </td>
            <td>
                <input 
                    type="date" 
                    required 
                    onChange={handleEditFormChange4}
                    value={editBookingFormData.schedule}
                    name="schedule"></input>
            </td>
            <td>
            <input 
                    type="text" 
                    required 
                    placeholder="Enter Customer"
                    onChange={handleEditFormChange4}
                    value={editBookingFormData.name}
                    name="name"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Agent"
                    onChange={handleEditFormChange4}
                    value={editBookingFormData.agent}
                    name="agent"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Address"
                    onChange={handleEditFormChange4}
                    value={editBookingFormData.address}
                    name="address"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Commision"
                    onChange={handleEditFormChange4}
                    value={editBookingFormData.price}
                    name="price"></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button style={{width: '48px'}} type="button" onClick={handleCancelClick4}>Cancel</button>
            </td>
        </tr>
    )
}