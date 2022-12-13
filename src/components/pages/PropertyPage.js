import React from "react"
import PropertyTable from "./tables/PropertyTable"
import './Page.css';
import { buttonStyles } from '../styles/styles.js';

export default function PropertyPage(){
    return(
        <div>
            <h1>Property Management</h1>
            <div className="page-flex">
                <div className="left">
                    <h2>Manage Properties</h2>
                    <div className="page-flex">
                        <div className="left">
                            <button style={buttonStyles}>Create Property</button>
                            <button style={buttonStyles}>Delete Property</button>
                            <button style={buttonStyles}>Edit Property</button>
                        </div>
                        <div className="right">
                        </div>
                    </div>
                    <div style={{textAlign: "left"}}>
                    <h2>Functions:</h2>
                        <p><strong>Create Property</strong>: Creates a property with the following parameters ID, First Name, Last Name, Age, Gender, Position, Salary, Contact, Email, and Address</p>
                        <p><strong>Delete Property</strong>: Deletes a property entry.</p>
                    </div>  
                </div>
                <div className="right">
                <PropertyTable />
                </div>
            </div>
        </div>
    )
}