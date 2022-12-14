import React from "react";

export const PropertyTableRead = ({property, handleEditClick3, handleDeleteClick3}) => {
    return(
        <tr>
            <td>Php {property.price}</td>
            <td>{property.address}</td>
            <td>{property.size} sqft</td>
            <td>{property.org}</td>
            <td>{property.bds}</td>
            <td>{property.ba}</td>
            <td>
                <button 
                    type="button"
                    onClick={(event) => handleEditClick3(event, property)} 
                    >
                    Edit
                </button>
                <button 
                    style={{width: '42px'}}
                    type="button"
                    onClick={() => handleDeleteClick3(property.id)}
                    >
                    Delete
                </button>
            </td>
        </tr>
    )
}