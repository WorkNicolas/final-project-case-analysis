import React from "react";
import { EmployeeContext, CustomerContext, PropertyContext, BookingContext } from "../../GlobalContext";
import Property from "../../objects/Property";

export default function BookingInteractionTable(){
    const {bookings, setBookings} = useContext(BookingContext);
    const {employees, setEmployees} = useContext(EmployeeContext);
    const {customers, setCustomers} = useContext(CustomerContext);
    const {properties, setProperties} = useContext(PropertyContext);

    return(
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Booking</th>
                        <th>Schedule</th>
                        <th>Employee</th>
                        <th>Customer</th>
                        <th>Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {bookings.map((booking) => (
                            <tr>
                                <td>{booking.title}</td>
                                <td>{booking.schedule}</td>
                            </tr>
                        ))}
                        {employees.map((employee) => (
                            <td>{employee.fname} {employee.lname}</td>
                        ))}
                        {customers.map((customer) => (
                            <td>{customer.fname} {customer.lname}</td>
                        ))}
                        {properties.map((property) => (
                            <td>{property.address}</td>
                        ))}
                    </tr>
                </tbody>
                </table>
        </div>
    )
}