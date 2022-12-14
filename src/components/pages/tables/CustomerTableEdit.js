import React from "react";

export const CustomerTableEdit = ({editCustomerFormData, handleEditFormChange2, handleCancelClick2}) => {
    return(
        <tr>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter First Name"
                    onChange={handleEditFormChange2}
                    value={editCustomerFormData.fname}
                    name="fname"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Last Name"
                    onChange={handleEditFormChange2}
                    value={editCustomerFormData.lname}
                    name="lname"></input>
            </td>
            <td>
                <input 
                    type="date" 
                    required 
                    onChange={handleEditFormChange2}
                    value={editCustomerFormData.age}
                    name="age"></input>
            </td>
            <td>
                <select 
                    name="gender"
                    onChange={handleEditFormChange2} 
                    value={editCustomerFormData.gender}
                    required>
                    <option value="none" hidden selected>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </td>
            <td>
                <input 
                    type="number" 
                    required 
                    placeholder="Enter Balance"
                    onChange={handleEditFormChange2}
                    value={editCustomerFormData.balance}
                    name="balance"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Contact"
                    onChange={handleEditFormChange2}
                    value={editCustomerFormData.contact}
                    name="contact"></input>
            </td>
            <td>
                <input 
                    type="email" 
                    required 
                    placeholder="Enter Email"
                    onChange={handleEditFormChange2}
                    value={editCustomerFormData.email}
                    name="email"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Address"
                    onChange={handleEditFormChange2}
                    value={editCustomerFormData.address}
                    name="address"></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button style={{width: '48px'}} type="button" onClick={handleCancelClick2}>Cancel</button>
            </td>
        </tr>
    )
}