import React, {useContext} from "react";
import './PropertyAddInfo.css';
import { PropertyContext } from '../GlobalContext';

export default function PropertyAddInfo() {
    const {properties, setProperties} = useContext(PropertyContext)
    const { handleFormChange3 } = useContext(PropertyContext);
    const { handleFormSubmit3 } = useContext(PropertyContext);

    return(
        <form onSubmit={handleFormSubmit3} className="property-details">
            <h1>Property Details</h1>
            <div className="page-flex">
                <div className="left property"> 
                    <label htmlFor="name">Price:</label>
                    <input 
                        type="number" 
                        name="price" 
                        onChange={handleFormChange3}
                        className="form-control" 
                        required />

                    <label htmlFor="name">Address:</label>
                    <input 
                        type="phone" 
                        name="address" 
                        onChange={handleFormChange3}
                        className="form-control" 
                        required />

                    <label htmlFor="name">Organization:</label>
                    <input 
                        type="text" 
                        name="org" 
                        onChange={handleFormChange3}
                        className="form-control" 
                        required />
                </div>
                <div className="right property">
                <label htmlFor="date">Size:</label>
                    <input 
                        type="number" 
                        name="size" 
                        onChange={handleFormChange3}
                        className="form-control" 
                        required />

                    <label htmlFor="name">Bedrooms:</label>
                    <input 
                        type="number" 
                        name="bds" 
                        onChange={handleFormChange3}
                        className="form-control" 
                        required />

                    <label htmlFor="guests">Bathrooms:</label>
                    <input 
                        type="number" 
                        name="ba" 
                        onChange={handleFormChange3}
                        className="form-control" 
                        required />
                </div>
                
            </div>
            <button type="submit" value="submit" style={{width: '240px', marginLeft: 'auto', marginRight: 'auto', marginTop: '-10px'}} >→</button>
        </form>
        
        
    )
}