import React from 'react';
import web from '../Images/section picture/laptop.png'
import award from '../Images/award.png'
const Banner = () => {
    return (
       <section>
        <div className="custom-container">
            <div className="custom-row">
                <div className="custom-column w-1/2 alpha-column">
                    <img src={award} className='custom-logo alpha-logo' />
                    <p className='tracking-widest mt-8 alpha-text'>FULL SERVICE WEBAGENTUR AUS UNNA</p>
                    <h4 className='text-white custom-background text-center rounded py-0 px-8 mt-8'>Agentur für Web Design, Apps, Seo, Shops</h4>
                    <p className='mt-8 text-justify font-bold'>Kreative IT-Dienstleistungen “Made in Ruhrpott”. Starte jetzt die Triebwerke und kontaktiere die Full Service Webagentur mit der Dein Projekt nicht nur gut, sondern F*CKING AWESOME wird!</p>
                    <div className='alpha-button'>
                    <button className=' button custom-border text-center rounded py-0 px-8 bg-transparent color mt-8 alpha-button'><i class="fa-solid fa-handshake mr-2"></i>Jetzt unverbindliches Gespräch vereinbaren</button>
                    </div>
                </div>
                <div className="custom-column w-1/2">
                    <img src={web} className='custom-image' />
                </div>
            </div>
        </div>
       </section>
    );
};

export default Banner;