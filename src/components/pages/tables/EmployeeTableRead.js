import React from "react";

export const EmployeeTableRead = ({employee}) => {
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
        </tr>
    )
}