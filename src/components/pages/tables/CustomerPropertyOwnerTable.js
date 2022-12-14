import React from "react";
import { CustomerContext, PropertyContext } from "../../GlobalContext";

export default function CustomerPropertyOwnerTable() {
    const {customers, setCustomers} = useContext(CustomerContext);
    const {properties, setProperties} = useContext(PropertyContext);
    return(
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {customers.map((customer) => (
                            <td>{customer.fname} {customer.lname}</td>
                        ))}
                        {properties.map((property) => (
                            <td>{property.address}</td>
                        ))}
                    </tr>
                </tbody>
                </table>
        </div>
    )
}