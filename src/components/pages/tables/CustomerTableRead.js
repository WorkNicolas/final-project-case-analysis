import React from "react";

export const CustomerTableRead = ({customer, handleEditClick2, handleDeleteClick2}) => {
    return(
        <tr>
            <td>{customer.fname}</td>
            <td>{customer.lname}</td>
            <td>{customer.age}</td>
            <td>{customer.gender}</td>
            <td>{customer.balance}</td>
            <td>{customer.contact}</td>
            <td>{customer.email}</td>
            <td>{customer.address}</td>
            <td>
                <button 
                    type="button"
                    onClick={(event) => handleEditClick2(event, customer)} 
                    >
                    Edit
                </button>
                <button 
                    style={{width: '42px'}}
                    type="button"
                    onClick={() => handleDeleteClick2(customer.id)}
                    >
                    Delete
                </button>
            </td>
        </tr>
    )
}