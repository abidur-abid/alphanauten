import React from 'react';
import app from '../Images/section picture/app.png'

const App = () => {
    return (
        <section className='mt-24'>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column w-1/2">
                        <p className='tracking-widest'>Möchtest Du jetzt die Triebwerke für Dein Unternehmen starten?</p>
                        <h3>Droppe uns gerne ein paar Zeilen und nehme mit uns Kontakt auf.</h3>
                        <div className='alpha-button'>
                        <button className=' button custom-border text-center rounded py-0 px-8 bg-transparent color mt-8'> <i className="fa-solid fa-phone mr-2"></i> Jetzt die Galaktischen kontaktieren</button>
                        </div>
                    </div>
                <div className="custom-column w-1/2">
                    <img src={app} className='custom-image' />
                </div>
                </div>
            </div>
        </section>
    );
};

export default App;