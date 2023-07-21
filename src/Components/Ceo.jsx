import React from 'react';
import thomas from '../Images/thomas.jpg'
import niclas from '../Images/niclas.jpg'

const Ceo = () => {
    return (
       <section className='mt-24'>
        <div className="custom-container">
            <div className="custom-row">
                <div className="custom-column w-1/3">
                    <img src={thomas} className='custom-image rounded' />
                    <h4 className='text-center'>Thomas Barwinski</h4>
                    <p className='text-center'>Strategiewunder</p>
                </div>
                <div className="custom-column w-1/3">
                    <img src={niclas} className='custom-image rounded'/>
                    <h4 className='text-center'>Niklas Fechner</h4>
                    <p className='text-center'>Technikpapst</p>
                </div>
                <div className="custom-column w-1/3 ml-8 last-column">
                    <p className='tracking-widest'>Unsere Arbeit erzeugt Lächeln</p>
                    <h3>Die Gesichter hinter den alphanauten</h3>
                    <div className='alpha-button'>
                    <button className='button custom-border text-center rounded py-0 px-8 bg-transparent color mt-8'> <i class="fa-solid fa-handshake mr-2"></i> Meet The Team</button>
                    </div>
                </div>
            </div>
        </div>
       </section>
    );
};

export default Ceo;