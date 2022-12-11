import React from "react"
import './Contact.css';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact(){
    return(
        <div className="contact-info">
            <div className="card">
                <FontAwesomeIcon icon={faEnvelope} className="card-icon far fa-envelope" size="lg"  />
                <p>email@domain.com</p>
            </div>
            
            <div className="card">
                <FontAwesomeIcon icon={faPhone} className="card-icon fas fa-phone" size="fas" />
                <p>+639000000000</p>
            </div>
            
            <div className="card">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="card-icon fas" />
                <p>Quezon City, Philippines</p>
            </div>
            
        </div>
    )
}