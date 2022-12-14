import React, { useState, useContext, Fragment } from 'react';
import './tables.css';
import data from './CUSTOMER_MOCK_DATA.json';
import { CustomerContext } from '../../GlobalContext';
import { CustomerTableRead } from './CustomerTableRead';
import { CustomerTableEdit } from './CustomerTableEdit';

export default function CustomerTable() {
    const {customers, setCustomers} = useContext(CustomerContext);
    const {editCustomerId, setEditCustomerId} = useContext(CustomerContext);
    const {handleEditClick2} = useContext(CustomerContext);
    const {editCustomerFormData, setEditCustomerFormData} = useContext(CustomerContext);
    const {handleEditFormChange2} = useContext(CustomerContext);
    const {handleEditFormSubmit2} = useContext(CustomerContext);
    const {handleCancelClick2} = useContext(CustomerContext);
    const {handleDeleteClick2} = useContext(CustomerContext);
    
    return(
        <div className="table-wrapper">
            <form onSubmit={handleEditFormSubmit2} >
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Balance</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>


                    <tbody>
                        {customers.map((customer) => (
                            <Fragment>
                                    { editCustomerId === customer.id ? 
                                        <CustomerTableEdit 
                                            editCustomerFormData={editCustomerFormData}
                                            handleEditFormChange2={handleEditFormChange2}
                                            handleCancelClick2={handleCancelClick2}
                                        />
                                        :
                                        <CustomerTableRead
                                            customer={customer}
                                            handleEditClick2={handleEditClick2}
                                            handleDeleteClick2={handleDeleteClick2}

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