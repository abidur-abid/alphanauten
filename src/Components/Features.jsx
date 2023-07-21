import React from 'react';
import s from '../Images/s.png'
import w from '../Images/w.png'
import s2 from '../Images/s2.png'
import o from '../Images/o.png'
import w2 from '../Images/w2.png'
import a from '../Images/a.png'
const Features = () => {
    return (
        <section className='mt-24'>
            <div className="custom-container">

                <div className="custom-row">
                    <div className="custom-column">
                        <p className=''>Wir lösen Probleme und sind erfolgreich</p><h4>Unsere Digitale Kompetenzen</h4>

                    </div>
                    <div className="custom-column alpha-button">
                        <button className=' custom-background text-white text-center rounded py-2 px-8 mt-8'>zum galaktischen Leistungsportfolio</button>
                    </div>
                </div>
                <div className="custom-row">

                    <div className="custom-column custom-border rounded w-96 h-40 m-4 p-4 flex justify-between items-center">
                        <img src={s} className='w-32 h-32' />
                        <div className=''>
                            <h4 className='alpha-text'>Strategieberatung</h4>
                            <p className='text-justify font-bold alpha-text'>Wir lieben Konzepte, Strategien und all das, was daraus entstehen kann!</p>
                        </div>
                    </div>
                    <div className="custom-column custom-border rounded w-96 h-40 m-4 p-4 flex justify-between items-center">
                        <img src={w} className='w-32 h-32' />
                        <div className=''>
                            <h4 className='alpha-text'>Web Design</h4>
                            <p className='font-bold alpha-text'>FUCKING AWESOME Designs bekommt ihr nur von uns. Immer zielgruppengenau!</p>
                        </div>
                    </div>
                    <div className="custom-column custom-border rounded w-96 h-40 m-4 p-4 flex justify-between items-center">
                        <img src={s2} className='w-32 h-32' />
                        <div className=''>
                            <h4 className='alpha-text'>Social Media & SEO</h4>
                            <p className='text-justify font-bold alpha-text'>Wir spielen Online-Marketing. Nicht nur halb. Wir haben den Endgegner besiegt!</p>
                        </div>
                    </div>

                    
                </div>


                <div className="custom-row">

                    <div className="custom-column custom-border rounded w-96 h-40 m-4 p-4 flex justify-between items-center">
                        <img src={o} className='w-32 h-32' />
                        <div className=''>
                            <h4 className='alpha-text'>Online-Shops</h4>
                            <p className='text-justify font-bold alpha-text'>Performant, sexy und gewinnbringend: Unsere galaktischen Shops</p>
                        </div>
                    </div>
                    <div className="custom-column custom-border rounded w-96 h-40 m-4 p-4 flex justify-between items-center">
                        <img src={w2} className='w-32 h-32' />
                        <div className=''>
                            <h4 className='alpha-text'>Websites</h4>
                            <p className='text-justify font-bold alpha-text'>Egal ob klein oder komplex, großartig sind sie alle! Check it out!</p>
                        </div>
                    </div>
                    <div className="custom-column custom-border w-96 h-40  rounded m-4 p-4 flex justify-between items-center">
                        <img src={a} className='w-32 h-32' />
                        <div className=''>
                            <h4 className='alpha-text'>Apps</h4>
                            <p className='text-justify font-bold alpha-text'>Zu jeder guten Digital Agentur gehören auch Apps. Auf iOS oder Android. Scheißegal!</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default Features;