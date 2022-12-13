import React, { useContext } from "react";
import './CustomerAddInfo.css';
import { CustomerContext } from '../GlobalContext';

export default function CustomerAddInfo(){
    const {customers, setCustomers} = useContext(CustomerContext);
    const { handleFormChange2 } = useContext(CustomerContext);
    const { handleFormSubmit2 } = useContext(CustomerContext);

    return(
        <form onSubmit={handleFormSubmit2}>
            <div className="container-customer">
                
                <div className="h1box">
                    <h1>Customer Profile</h1>
                </div>

                <div className="Customer">

                    <div className="personal-info-customer">

                        <div>
                        <input 
                            type="text" 
                            name="fname"
                            onChange={handleFormChange2}
                            placeholder="First Name"
                            required/><br />
                        </div>

                        <div>
                        <select 
                            name="gender" 
                            onChange={handleFormChange2}
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
                            onChange={handleFormChange2}
                            required/>
                        </div>

                    </div>

                    

                    <div className="contact-info-customer">

                        <div>
                        <input 
                            type="text" 
                            name="lname"
                            onChange={handleFormChange2}
                            placeholder= "Last Name"
                            required/><br />
                        </div>

                        <div>
                        <input 
                            type="tel" 
                            name="contact" 
                            onChange={handleFormChange2}
                            placeholder="Phone Number"
                            required/><br />
                        </div>

                        <div>
                        <input 
                            type="text"
                            name="address"
                            onChange={handleFormChange2}
                            placeholder="Address" 
                            required />
                        </div>

                    </div>

                </div>
                
            
                <div className="Costumer-Balance">

                    <div>
                        <input
                            style={{fontSize: '16px', height: '36px'}}
                            type="text"
                            name="balance"
                            onChange={handleFormChange2}
                            placeholder="Balance"
                            required
                            />
                    </div>

                    <div style={{marginTop: '10px'}}>
                        <input 
                            style={{height: '36px', width: '215px', borderRadius: '9px', fontSize: '16px'}}
                            type="email" 
                            name="email"
                            onChange={handleFormChange2}
                            placeholder= "@email.com"
                            required/><br />
                    </div>

                    <div>
                    <button 
                        type="submit" 
                        value="submit" 
                        style={{width: '213px'}} >→</button>
                    </div>

                </div>
                

            </div>
        </form>
    )
}