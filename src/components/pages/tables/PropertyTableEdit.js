import React from "react";

export const PropertyTableEdit = ({editPropertyFormData, handleEditFormChange3, handleCancelClick3}) => {
    return(
        <tr>
            <td>
                <input 
                    type="number" 
                    required 
                    placeholder="Enter Price"
                    onChange={handleEditFormChange3}
                    value={editPropertyFormData.price}
                    name="price"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Address"
                    onChange={handleEditFormChange3}
                    value={editPropertyFormData.address}
                    name="address"></input>
            </td>
            <td>
                <input 
                    type="number" 
                    required 
                    placeholder="Enter Size"
                    onChange={handleEditFormChange3}
                    value={editPropertyFormData.size}
                    name="size"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Organization"
                    onChange={handleEditFormChange3}
                    value={editPropertyFormData.org}
                    name="org"></input>
            </td>
            <td>
                <input 
                    type="number" 
                    required 
                    placeholder="Enter No. of Bedrooms"
                    onChange={handleEditFormChange3}
                    value={editPropertyFormData.bds}
                    name="bds"></input>
            </td>
            <td>
            <input 
                    type="number" 
                    required 
                    placeholder="Enter No. of Bathrooms"
                    onChange={handleEditFormChange3}
                    value={editPropertyFormData.ba}
                    name="ba"></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button style={{width: '48px'}} type="button" onClick={handleCancelClick3}>Cancel</button>
            </td>
        </tr>
    )
}