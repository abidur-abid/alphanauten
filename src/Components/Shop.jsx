import React from 'react';
import shop from '../Images/section picture/onlineshop.png'

const Shop = () => {
    return (
        <section className='mt-24'>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column w-1/2">
                        <img src={shop} className='custom-image'/>
                    </div>
                    <div className="custom-column w-1/2">
                        <p className='tracking-widest'>DIE AGENTUR FÜR E-COMMERCE</p>
                        <h3>Shopware Partner aus Unna</h3>
                        <p className='font-bold text-justify'>Lokaler als wir geht kaum! Unsere Basis ist in Unna angedockt und auf unserer Brust tragen wir das Shopware-Partner Logo. Wir sind aber nicht einfach nur eine Shopware-Agentur. Unsere Crew entwickelt Shopware-Plugins, Schnittstellen und Produktkonfiguratoren. Aber nicht nur das. Als Full Service Webagentur haben wir galaktische Webdesigner, SEO- und Social Media Experten in unseren Reihen. Lerne uns doch einfach kennen, damit Dein Projekt nicht nur gut, sondern F*CKING AWESOME wird!</p>
                        <div className='alpha-button'>
                        <button className=' button custom-border text-center rounded py-0 px-8 bg-transparent color mt-8'> <i class="fa-solid fa-address-card mr-2"></i> Lerne uns kennen!</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;