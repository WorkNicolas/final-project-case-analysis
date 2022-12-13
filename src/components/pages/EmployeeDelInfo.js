import React from "react";

export default function EmployeeDelInfo() {
    return(
        <div className="container-employee">
            <h1>Delete Employee</h1>
            <div className="Employee">
                <form>
                    <select name="id" required>
                        
                    </select>
                    <button type="submit" value="submit" style={{width: '200px', marginLeft: 'auto', marginRight: 'auto'}}>→</button>
                </form>
            </div>
        </div>
    )
}