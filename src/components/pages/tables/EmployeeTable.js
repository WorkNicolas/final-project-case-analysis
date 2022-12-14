import React, { useState, useContext, Fragment } from 'react';
import './tables.css';
import data from './EMPLOYEE_MOCK_DATA.json'
import { EmployeeContext } from '../../GlobalContext';
import { EmployeeTableRead } from './EmployeeTableRead';
import { EmployeeTableEdit } from './EmployeeTableEdit';

export default function EmployeeTable(props) {
    const {employees, setEmployees} = useContext(EmployeeContext);
    const {editEmployeeId, setEditEmployeeId} = useContext(EmployeeContext);
    const {handleEditClick} = useContext(EmployeeContext);
    const {editEmployeeFormData, setEditEmployeeFormData} = useContext(EmployeeContext);
    const {handleEditFormChange} = useContext(EmployeeContext);
    const {handleEditFormSubmit} = useContext(EmployeeContext);
    const {handleCancelClick} = useContext(EmployeeContext);
    const {handleDeleteClick} = useContext(EmployeeContext);

    return(
        <div className="table-wrapper">
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr style={props.popupOpen ? {position: 'static'} : {position: 'static'}}>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Position</th>
                            <th>Salary</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>


                    <tbody>
                        {employees.map((employee) => (
                            <Fragment>
                                { editEmployeeId === employee.id ? 
                                    <EmployeeTableEdit 
                                        editEmployeeFormData={editEmployeeFormData} 
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    /> 
                                    : 
                                    <EmployeeTableRead 
                                        employee={employee}
                                        handleEditClick={handleEditClick} 
                                        handleDeleteClick={handleDeleteClick}

                                    />}
                                
                            </Fragment>
                            
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    )
}