import React, { useState, useContext, Fragment } from 'react';
import './tables.css';
import data from './PROPERTY_MOCK_DATA.json'
import { PropertyContext } from '../../GlobalContext';
import { PropertyTableRead } from './PropertyTableRead';
import { PropertyTableEdit } from './PropertyTableEdit';
import Employee from '../../objects/Employee';

export default function PropertyTable() {
    const {properties, setProperties} = useContext(PropertyContext);
    const {editPropertyId, setEditPropertyId} = useContext(PropertyContext);
    const {handleEditClick3} = useContext(PropertyContext);
    const {editPropertyFormData, setEditPropertyFormData} = useContext(PropertyContext);
    const {handleEditFormChange3} = useContext(PropertyContext);
    const {handleEditFormSubmit3} = useContext(PropertyContext);
    const {handleCancelClick3} = useContext(PropertyContext);
    const {handleDeleteClick3} = useContext(PropertyContext);
    return(
        <div className="table-wrapper">
            <form onSubmit={handleEditFormSubmit3}>
                <table>
                    <thead>
                        <tr>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Size</th>
                        <th>Organization</th>
                        <th>Bedrooms</th>
                        <th>Bathrooms</th>
                        <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {properties.map((property) => (
                            <Fragment>
                                { editPropertyId === property.id ?
                                    <PropertyTableEdit
                                        editPropertyFormData={editPropertyFormData}
                                        handleEditFormChange3={handleEditFormChange3}
                                        handleCancelClick3={handleCancelClick3}
                                    />
                                    :
                                    <PropertyTableRead
                                        property={property}
                                        handleEditClick3={handleEditClick3}
                                        handleDeleteClick3={handleDeleteClick3}
                                    />
                                }
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    )
}