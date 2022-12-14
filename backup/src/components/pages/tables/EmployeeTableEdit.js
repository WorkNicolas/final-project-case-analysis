import React, { useContext } from "react";

export const EmployeeTableEdit = ({editEmployeeForm, handleEditFormChange, handleCancelClick}) => {
    
    return(
        <tr>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter First Name"
                    value={editEmployeeForm.fname}
                    onChange={handleEditFormChange}
                    name="fname"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    value={editEmployeeForm.lname}
                    placeholder="Enter Last Name"
                    onChange={handleEditFormChange}
                    name="lname"></input>
            </td>
            <td>
                <input 
                    type="date" 
                    required 
                    value={editEmployeeForm.age}
                    onChange={handleEditFormChange}
                    name="age"></input>
            </td>
            <td>
                <select 
                    name="gender" 
                    onChange={handleEditFormChange}
                    value={editEmployeeForm.gender}
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
                    value={editEmployeeForm.position}
                    onChange={handleEditFormChange}
                    name="position"></input>
            </td>
            <td>
                <input 
                    type="number" 
                    required 
                    placeholder="Enter Salary"
                    value={editEmployeeForm.salary}
                    onChange={handleEditFormChange}
                    name="salary"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Contact"
                    value={editEmployeeForm.contact}
                    onChange={handleEditFormChange}
                    name="contact"></input>
            </td>
            <td>
                <input 
                    type="email" 
                    required 
                    placeholder="Enter Email"
                    value={editEmployeeForm.email}
                    onChange={handleEditFormChange}
                    name="email"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Address"
                    value={editEmployeeForm.address}
                    onChange={handleEditFormChange}
                    name="address"></input>
            </td>
            <td>
                <button type="submit"
                style={{height: '24px', width: '32px', fontSize: '12px', padding: '0px', margin: '0px'}}>Save</button>
                <button type="button" onClick={handleCancelClick}
                style={{height: '24px', width: '32px', fontSize: '12px', padding: '0px', margin: '0px'}}>Cancel</button>
            </td>
        </tr>
    )
}