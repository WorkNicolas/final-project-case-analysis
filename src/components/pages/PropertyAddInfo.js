import React from "react";
import './PropertyAddInfo.css';

export default function PropertyAddInfo() {
    return(
        <form className="property-details">
            <h1>Property Details</h1>
            <div className="page-flex">
                <div className="left property">
                    <label for="name">Name:</label>
                    <input type="text" id="name" className="form-control" required />

                    <label for="name">Price:</label>
                    <input type="number" id="price" className="form-control" required />

                    <label for="name">Address:</label>
                    <input type="phone" id="address" className="form-control" required />

                    <label for="name">Organization:</label>
                    <input type="text" id="organization" className="form-control" required />
                </div>
                <div className="right property">
                <label for="date">Size:</label>
                    <input type="number" id="size" className="form-control" required />

                    <label for="name">Bedrooms:</label>
                    <input type="number" id="bedrooms" className="form-control" required />

                    <label for="guests">Bathrooms:</label>
                    <input type="number" id="bathrooms" className="form-control" required />

                    <button type="submit" value="submit" style={{width: '240px'}} >→</button>
                </div>
            </div>
        </form>
        
    )
}