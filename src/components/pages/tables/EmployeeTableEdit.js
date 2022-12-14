import React from "react";

export const EmployeeTableEdit = ({editEmployeeFormData, handleEditFormChange, handleCancelClick}) => {
    return(
        <tr>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter First Name"
                    onChange={handleEditFormChange}
                    value={editEmployeeFormData.fname}
                    name="fname"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Last Name"
                    onChange={handleEditFormChange}
                    value={editEmployeeFormData.lname}
                    name="lname"></input>
            </td>
            <td>
                <input 
                    type="date" 
                    required 
                    onChange={handleEditFormChange}
                    value={editEmployeeFormData.age}
                    name="age"></input>
            </td>
            <td>
                <select 
                    name="gender"
                    onChange={handleEditFormChange} 
                    value={editEmployeeFormData.gender}
                    required>
                    <option value="none" hidden selected>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </td>
            <td>
            <input 
                    type="text" 
                    required 
                    placeholder="Enter Position"
                    onChange={handleEditFormChange}
                    value={editEmployeeFormData.position}
                    name="position"></input>
            </td>
            <td>
                <input 
                    type="number" 
                    required 
                    placeholder="Enter Salary"
                    onChange={handleEditFormChange}
                    value={editEmployeeFormData.salary}
                    name="salary"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Contact"
                    onChange={handleEditFormChange}
                    value={editEmployeeFormData.contact}
                    name="contact"></input>
            </td>
            <td>
                <input 
                    type="email" 
                    required 
                    placeholder="Enter Email"
                    onChange={handleEditFormChange}
                    value={editEmployeeFormData.email}
                    name="email"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Address"
                    onChange={handleEditFormChange}
                    value={editEmployeeFormData.address}
                    name="address"></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button style={{width: '48px'}} type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}