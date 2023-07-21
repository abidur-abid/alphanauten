import React from 'react';
import logo8 from '../Images/logo8.png'
import logo9 from '../Images/logo9.png'
import logo10 from '../Images/logo10.png'
import logo11 from '../Images/logo11.png'
import logo12 from '../Images/logo12.png'
import logo13 from '../Images/logo13.png'

import logo15 from '../Images/logo15.png'
import Marquee from 'react-fast-marquee';

const Compnay = () => {
    return (
       <section className='mt-24'>
        <div className="custom-container">
            <div className="">
                <p className='tracking-widest text-center'>Lerne unsere Kunden kennen</p>
                <h3 className='text-center'>They believe in us</h3>
                <p className='text-center font-bold'>Wir sind stolz, dass wir mit unseren Kernkompetenzen großartige <br /> Unternehmen noch großartiger machen durften.</p>
            </div>
            <div className=" custom-background company mt-8">
            <Marquee>
                        <img src={logo8} className=' mx-4' />
                        <img src={logo9} className=' mx-4' />
                        <img src={logo10} className=' mx-4' />
                        <img src={logo11} className=' mx-4' />
                        <img src={logo12} className=' mx-4' />
                        <img src={logo13} className=' mx-4' />
                        
                        <img src={logo15} className=' mx-4' />
            </Marquee>
            </div>
            
        </div>
       </section>
    );
};

export default Compnay;