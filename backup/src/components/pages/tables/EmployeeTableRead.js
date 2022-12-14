import React from "react";

export const EmployeeTableRead = ({employee, handleEditClick}) => {
    let id = JSON.parse(employee.id);
    return(
        <tr>
            <td>{employee.fname}</td>
            <td>{employee.lname}</td>
            <td>{employee.age}</td>
            <td>{employee.gender}</td>
            <td>{employee.position}</td>
            <td>Php {employee.salary}</td>
            <td>{employee.contact}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>
                <button style={{height: '24px', width: '32px', fontSize: '12px', padding: '0px', margin: '0px'}} 
                    type="button" 
                    onClick={(event) => handleEditClick(event, id, employee)}>
                    Edit
                </button>
            </td>
        </tr>
    )
}