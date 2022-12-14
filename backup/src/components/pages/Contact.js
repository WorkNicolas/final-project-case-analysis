import React from "react"
import './Contact.css';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact(){
    return(
        <div>
            <h1 style={{color: 'black'}}>Contacts</h1>
            <div className="contact-info">
                <div className="card">
                    <FontAwesomeIcon icon={faEnvelope} className="card-icon far fa-envelope" size="lg"  />
                    <p>contact@builddev.com</p>
                </div>
                
                <div className="card">
                    <FontAwesomeIcon icon={faPhone} className="card-icon fas fa-phone" size="fas" />
                    <p>+82-7-515-7225</p>
                </div>
                
                <div className="card">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="card-icon fas" />
                    <p>2943-7, Topyeong-dong, Seogwipo-si, Jeju-do</p>
                </div>
                
            </div>
        </div>
    )
}