import React from "react";
import './General.css';

export default function About(){
    return(
        <div className="about" style={{color: 'white', backgroundColor: '#333'}}>
		<h1 style={{backgroundColor: '#222', padding: '10px'}}>About Us</h1>
        <p >Build Dev is a small building company based in Korea. We specialize in constructing small houses and villas in rural areas. In an effort to streamline our operations and improve our customer service, we are developing a proof-of-concept software to manage our employees, customers, and services. By implementing this automated system, we hope to reduce our operational costs, gain a better understanding of our customer base, and enhance the quality of our services.</p>
            <div class="page-flex" style={{height: '44vh'}}>
                <div class="left-general" style={{backgroundColor: "#333"}}>
                    <h1 style={{backgroundColor: '#222', padding: '10px', color: 'orange'}}>Vision</h1>
                    <p style={{margin: '10px'}}>Build Dev's vision is to be a leading builder of small houses and villas in rural areas, known for providing high-quality services and building lasting relationships with our customers.</p>
                </div>
                <div class="right-general" style={{backgroundColor: "#333"}}>
                    <h1 style={{backgroundColor: '#222', padding: '10px', color: 'orange'}}>Mission</h1>
                    <p style={{margin: '10px'}}>Our mission is to provide our customers with affordable, well-constructed homes, and to use technology to improve our operations and enhance the overall experience for both our employees and customers. We aim to achieve this by using software that will help us manage our employees, customers, and services more efficiently.</p>
                </div>
            </div>
	</div>
    )
}