import React from "react"
import CustomerTable from "./tables/CustomerTable"
import './Page.css';
import { buttonStyles } from '../styles/styles.js';

export default function CustomerPage(){
    return(
        <div>
            <h1>Customer Management</h1>
            <div className="page-flex">
                <div className="left">
                    <h2>Manage Customers</h2>
                    <div className="page-flex">
                        <div className="left">
                            <button style={buttonStyles}>Create Customer</button>
                            <button style={buttonStyles}>Delete Customer</button>
                            <button style={buttonStyles}>Edit Customer</button>
                        </div>
                        <div className="right">
                            <button style={buttonStyles}>Add Property</button>
                            <button style={buttonStyles}>Remove Property</button>
                        </div>
                    </div>
                    <div style={{textAlign: "left"}}>
                        <h2>Functions:</h2>
                        <p><strong>Create Customer</strong>: Creates acustomer with the following parameters ID, First Name, Last Name, Age, Gender, Balance, Contact, and Email.</p>
                        <p><strong>Delete Customer</strong>: Deletes a customer entry.</p>
                        <p><strong>Edit Customer</strong>: Edit the customer's parameters.</p>
                        <p><strong>Add Property</strong>: Adds a property that the customer owns.</p>
                        <p><strong>Remove Property</strong>: Remove a property that the customer owns.</p>
                    </div>
                </div>
                <div className="right">
                <CustomerTable />
                </div>
            </div>
        </div>
    )
}