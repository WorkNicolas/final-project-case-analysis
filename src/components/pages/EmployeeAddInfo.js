import React, { useContext } from "react";
import './EmployeeAddInfo.css';
import { EmployeeContext } from '../GlobalContext';

export default function EmployeeAddInfo() {
    const {employees, setEmployees} = useContext(EmployeeContext)
    return(
        <div className="container-employee">
            <h1>Personal Information</h1>

            <div className="Employee">

                <div className="personal-info-employee">

                    <div>
                    <input type="text" name="fname" placeholder="Full Name" required/><br />
                    </div>

                    <div>
                    <select name="gender" name="gender" required>
                        <option value="none" hidden selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    </div>

                    <div>
                    <input type="date" name="dateOfBirth" value="Date of Birth" required/>
                    </div>

                </div>

                

                <div className="contact-info-employee">

                    <div>
                    <input type="email" name="email" placeholder= "@email.com" required/><br />
                    </div>

                    <div>
                    <input type="tel" name="contact" placeholder="#xxx-xxx-xxxx" required/><br />
                    </div>

                    <div>
                    <input type="text" name="address" placeholder="Address" required />
                    </div>

                </div>

            </div>
            
            <hr />
          
            <div className="Employee-details">

                <div>
                    <h1>Employee Details</h1>
                </div>

                <div>
                <input type="text" id="boss" placeholder="Employer" required />
                </div>

                <div>
                <input type="text" id="job" placeholder="Position" required />
                </div>

                <div>
                <input type="text" id="salary" placeholder="Salary" required />
                </div>

                <div>
                <button type="submit" value="submit" style={{width: '200px'}}>→</button>
                </div>

            </div>
        </div>
    )
}