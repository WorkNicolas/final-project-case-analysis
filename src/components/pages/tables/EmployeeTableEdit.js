import React from "react";

export const EmployeeTableEdit = () => {
    return(
        <tr>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter First Name"
                    name="fname"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Last Name"
                    name="lname"></input>
            </td>
            <td>
                <input 
                    type="date" 
                    required 
                    name="age"></input>
            </td>
            <td>
                <select 
                    name="gender" 
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
                    name="position"></input>
            </td>
            <td>
                <input 
                    type="number" 
                    required 
                    placeholder="Enter Salary"
                    name="salary"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Contact"
                    name="contact"></input>
            </td>
            <td>
                <input 
                    type="email" 
                    required 
                    placeholder="Enter Email"
                    name="email"></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required 
                    placeholder="Enter Address"
                    name="address"></input>
            </td>
        </tr>
    )
}