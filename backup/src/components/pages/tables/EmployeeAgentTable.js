import React from "react";
import { EmployeeContext, CustomerContext } from "../../GlobalContext";

export default function EmployeeAgentTable(){
    const {employees, setEmployees} = useContext(EmployeeContext);
    const {customers, setCustomers} = useContext(CustomerContext);
    return(
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Customer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {employees.map((employee) => (
                            <td>{employee.fname} {employee.lname}</td>
                        ))}
                        {customers.map((customer) => (
                            <td>{customer.fname} {customer.lname}</td>
                        ))}
                    </tr>
                </tbody>
                </table>
        </div>
    )
}