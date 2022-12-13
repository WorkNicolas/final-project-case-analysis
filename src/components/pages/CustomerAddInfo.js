import React from "react";
import './CustomerAddInfo.css';

export default function CustomerAddInfo(){
    return(
        <div className="container-customer">
            
            <div className="h1box">
                <h1>Customer Profile</h1>
            </div>

            <div className="Customer">

                <div className="personal-info-customer">

                    <div>
                    <input type="text" id="FN" placeholder="Full Name" required/><br />
                    </div>

                    <div>
                    <select name="gender" id="gender" required>
                        <option value="none" hidden selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    </div>

                    <div>
                    <input type="date" id="bday" value="Date of Birth" required/>
                    </div>

                </div>

                

                <div className="contact-info-customer">

                    <div>
                    <input type="email" id="email" placeholder= "@email.com" required/><br />
                    </div>

                    <div>
                    <input type="tel" id="number" placeholder="#xxx-xxx-xxxx" required/><br />
                    </div>

                    <div>
                    <input type="text" id="address" placeholder="Address" required />
                    </div>

                </div>

            </div>
            
          
            <div className="Costumer-Balance">

                <div>
                    <select name="Price" id="Price" required>
                        <option value="none" hidden selected>Price Range</option>
                        <option value="100,000">100,000</option>
                        <option value="500,000">500,000</option>
                        <option value="1,000,000">1,000,000+</option>
                        <option value="50,000,000+">50,000,000+</option>
                        <option value="1,00,000,000+">100,000,000+</option>
                    </select>
                </div>

                <div>
                    <select name="Type-of-House" id="Houses" required>
                        <option value="none" hidden selected>Preferred Architecture</option>
                        <option value="Cape Cod">Cape Cod</option>
                        <option value="Colonial">Colonial</option>
                        <option value="Contemporary">Contemporary</option>
                        <option value="Craftsman">Craftsman</option>
                        <option value="Greek Revival">Greek Revival</option>
                        <option value="Farmhouse">Farmhouse</option>
                        <option value="French Country">French Country</option>
                        <option value="Mediterranean">Mediterranean</option>
                        <option value="Midcentury Modern">Midcentury Modern</option>
                        <option value="Ranch"> Ranch</option>
                        <option value="Split-Level">Split-Level</option>
                        <option value="Tudor">Tudor</option>
                        <option value="Victorian">Victorian</option>
                    </select><br />
                </div>

                <div>
                <button type="submit" value="submit" style={{width: '213px'}} >→</button>
                </div>

            </div>
            

        </div>
    )
}