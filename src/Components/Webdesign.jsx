import React from 'react';
import webdesign from '../Images/section picture/webdesign.png'

const Webdesign = () => {
    return (
        <section className='mt-24'>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column w-1/2">
                        <img src={webdesign} className='custom-image'/>
                    </div>
                    <div className="custom-column w-1/2">
                        <p className='tracking-widest'>WEBDESIGN MADE IN RUHRPOTT!</p>
                        <h3>Full Service Agentur für Online-Shops, Websites & Online-Marketing</h3>
                        <p className='font-bold alpha-text'>Als Digital-Agentur sind wir spezialisiert auf alle Arten von Online-Shops, Websites und Online-Marketing-Dienstleistungen wie Suchmaschinenoptimierung (SEO) oder Social Media Marketing (SMM). </p>
                       <div className='alpha-button'>
                       <button className=' button custom-border text-center rounded py-0 px-8 bg-transparent color mt-8'> <i class="fa-solid fa-address-card mr-2"></i>Lerne uns kennen!</button>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Webdesign;