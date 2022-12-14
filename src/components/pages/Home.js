import React from "react";
import Main from "../commons/Main";
import Footer from "../commons/Footer";

export default function Home() {
    return(
        <div>
            <div style={headStyles}>
                <h1 style={{color: 'white', fontSize: '64px'}}>Build</h1>
                <h1 style={{color: 'orange', fontSize: '64px'}}>Dev</h1>
            </div>
            <div className='page-flex-general' style={{backgroundColor: '#333', height: '63vh'}}>
                <div className='left-general' style={{backgroundColor: '#333', color: 'white'}}>
                    <div style={{marginTop: '60px', textAlign: 'left', marginLeft: '20px', display: 'flex'}}>
                        <h1>Welcome to Build</h1><h1 style={{color: 'orange'}}>Dev!</h1>
                    </div>
                    <p style={{fontSize: '20px', marginTop: '-10px', marginLeft: '20px'}}>We are a small building company based in Korea, specializing in constructing small houses and villas in rural areas. Our mission is to provide our customers with affordable, well-constructed homes, and to use technology to improve our operations and enhance the overall experience for both our employees and customers.</p>
                    <p style={{fontSize: '20px', marginTop: '10px', marginLeft: '20px'}}>On our website, you can learn more about our services, view examples of our work, and contact us to schedule an inspection or discuss your building needs. We look forward to working with you!</p>
                </div>
                <div className='right-general' style={{backgroundColor: '#333', color: 'white'}}>
                    Test
                </div>
            </div>
        </div>
    )
}

const headStyles= {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#222',
    margin: '0px',
    padding: '0px',
    
}

const mainStyles={
    backgroundColor: '#333'
}