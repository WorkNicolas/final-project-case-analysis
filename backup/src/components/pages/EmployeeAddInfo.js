import React, { useContext } from "react";
import './EmployeeAddInfo.css';
import { EmployeeContext } from '../GlobalContext';

export default function EmployeeAddInfo({editEmployeeForm, handleEditFormChange}) {
    const {employees, setEmployees} = useContext(EmployeeContext)
    const { handleFormChange } = useContext(EmployeeContext)
    const { handleFormSubmit } = useContext(EmployeeContext)
    return(
        <div className="container-employee">
            <form onSubmit={handleFormSubmit}>
                <h1>Personal Information</h1>

                <div className="Employee">

                    <div className="personal-info-employee">

                        <div>
                        <input 
                            type="text" 
                            name="fname" 
                            placeholder="First Name" 
                            onChange={handleFormChange}
                            required/><br />
                        </div>

                        <div>
                        <input 
                            type="text" 
                            name="lname" 
                            placeholder="Last Name" 
                            onChange={handleFormChange}
                            required/><br />
                        </div>

                        <div>
                        <select 
                            name="gender" 
                            onChange={handleFormChange}
                            required>
                            <option value="none" hidden selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select><br />
                        </div>

                        <div>
                        <input 
                            type="date" 
                            name="age" 
                            placeholder="Age"
                            onChange={handleFormChange}
                            required/>
                        </div>

                    </div>

                    

                    <div className="contact-info-employee">

                        <div>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="@email.com" 
                            onChange={handleFormChange}
                            required/><br />
                        </div>

                        <div>
                        <input 
                            type="tel" 
                            name="contact" 
                            placeholder="Phone Number" 
                            onChange={handleFormChange}
                            required/><br />
                        </div>

                        <div>
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Address" 
                            onChange={handleFormChange}
                            required />
                        </div>

                    </div>

                </div>

                <hr />

                <div className="Employee-details">

                    <div>
                        <h1>Employee Details</h1>
                    </div>
                    {/*
                    <div>
                    <input 
                        type="text" 
                        id="boss" 
                        placeholder="Employer" 
                        required />
                    </div>*/}

                    <div>
                    <input 
                        style={{fontSize: '16px'}}
                        type="text" 
                        name="position"
                        placeholder="Position" 
                        onChange={handleFormChange}
                        required />
                    </div>

                    <div>
                    <input 
                        type="number" 
                        name="salary"
                        placeholder="Salary" 
                        onChange={handleFormChange}
                        required />
                    </div>

                    <div>
                    <button 
                        type="submit" 
                        value="submit" 
                        style={{width: '200px'}}>→</button>
                    </div>

                </div>
            </form>
        </div>
    )
}