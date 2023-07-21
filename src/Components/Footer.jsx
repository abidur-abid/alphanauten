import React from 'react';
import logo from '../Images/logo.png'
import footer1 from '../Images/footerImg1.webp'
import footer2 from '../Images/footerImg2.webp'
import footer3 from '../Images/footerImg3.webp'
import { Link } from 'react-router-dom';
import SocialLink from './SocialLink';
// import SocialLink from './SocialLink';


const Footer = () => {
    return (
        <footer>
            <div className="custom-container">
                <div className="custom-row my-8">
                    <div className="custom-column alhpa-column">
                       <img src={logo} className='custom-logo mx-auto'/>

                       <h4 className='text-white'>alphanauten GmbH & Co. KG</h4>
                       <div className='alpha-link'>
                       <SocialLink></SocialLink>
                       </div>
                       <p className='text-white '>Viktoriastraße 25</p>
                       <p className='text-white '>59425 Unna</p>
                       <p className='text-white '>02303 / 92 95 000</p>
                    </div>
                    <div className="custom-column alhpa-column">
                        <h4 className='text-white'>Seiten</h4>
                    
                            <p><Link className='block text-white page'>Projekte</Link></p>
                            <p><Link className='block text-white page'>Agentur</Link></p>
                            <p><Link className='block text-white page'>Kontakt</Link></p>
                            <p><Link className='block text-white page'>Shopware</Link></p>
                            <p><Link className='block text-white page'>Werbeagentur Unna</Link></p>
                            
                        
                    </div>
                    <div className="custom-column alhpa-column">
                        <h4 className='text-white'>Projekte</h4>
                       
                            <p><Link className='block text-white page'>Backyard Design</Link></p>
                            <p><Link className='block text-white page'>Cave</Link></p>
                            <p><Link className='block text-white page'>Festo</Link></p>
                            <p><Link className='block text-white page'>Wilo</Link></p>
                            <p><Link className='block text-white page'>Vogtland</Link></p>
                            
                        
                    </div>
                    <div className="custom-column alhpa-column">
                        <h4 className='text-white'>Rechtliches</h4>
                        
                            <p><Link className='block text-white page'>Impressum</Link></p>
                            <p><Link className='block text-white page'>Datenschutz</Link></p>
                            
                            
                        
                    </div>
                </div>
                <div className="custom-row my-8">
                    <img src={footer1} className='custom-logo  alpha-img' />
                    <img src={footer2} className='custom-logo  alpha-img' />
                    <img src={footer3} className='custom-logo  alpha-img' />
                    
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;