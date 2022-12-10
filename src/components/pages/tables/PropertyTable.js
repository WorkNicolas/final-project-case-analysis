import React, { useState } from 'react';
import './tables.css';
import data from './PROPERTY_MOCK_DATA.json'

export default function PropertyTable() {
    const [properties, setProperties] = useState(data);
    return(
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Price</th>
                    <th>Address</th>
                    <th>Size</th>
                    <th>Organization</th>
                    <th>Bedrooms</th>
                    <th>Bathrooms</th>
                    </tr>
                </thead>

                <tbody>
                    {properties.map((property) => (
                    <tr>
                        <td>{property.id}</td>
                        <td>Php {property.price}</td>
                        <td>{property.address}</td>
                        <td>{property.size} sqft</td>
                        <td>{property.org}</td>
                        <td>{property.bds}</td>
                        <td>{property.ba}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}