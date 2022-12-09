import React from "react";
import Employee from "./components/objects/Employee";
//Testing how objects work
function Test(){
    const employee = new Employee("Carl", 18, 30000)
    return(
        <div>
            Test <br />
            {employee.name} <br />
            {employee.age} <br />
            {employee.salary} <br />
        </div>
    )
}

export default Test