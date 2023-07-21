
import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
//   const { user } = useAuth();

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  };

  return (
    <div className="sticky top-0">
    <header className="mobile-menu-parent-position laptop-header-position z-30 sticky top-0 ">
      <div className="custom-container sticky top-0">
        <div className="header-custom-row">
          <div className="custom-column mt-4">
            <img src={logo} className="custom-logo" alt="Logo" />
          </div>
          <div className="custom-column">
            <ul className="custom-laptop-menu">
              <Link to="/">
                <i className="fa-solid fa-house mr-2"></i> Home
              </Link>
              
              <Link to="/">
              <i class="fa-solid fa-address-card mr-2"></i> Agentur
              </Link>
              <Link to="/">
                <i className="fa-solid fa-phone mr-2"></i> Kontakt
              </Link>
              <Link to="/">
                <i className="fa-solid fa-right-to-bracket mr-2"></i> Log In
              </Link>
            </ul>
          </div>
          <div>
            {mobileMenu ? (
              <button onClick={handleMobileMenu} className="flex justify-center items-center custom-mobile-menu">
                <i className="fa-solid fa-bars text-white"></i>
              </button>
            ) : (
              <div className="mobile-menu-position w-60 h-80 pl-12 pr-20 rounded z-30">
                <div onClick={handleMobileMenu}>
                  <button>
                    <i className="fa-solid fa-minus text-white"></i>
                  </button>
                  <div className="grid grid-cols-1 justify-start gap-4 mt-4 mobile-menu overflow-auto">
                  <Link className='text-white' to="/">
                        <i className="fa-solid fa-house mr-2"></i> Home
                    </Link>
                    
                    <Link className='text-white' to="/">
                    <i class="fa-solid fa-address-card mr-2"></i> Agentur
                    </Link>
                    <Link className='text-white' to="/">
                        <i className="fa-solid fa-phone mr-2"></i> Kontakt
                    </Link>
                    <Link className='text-white' to="/">
                        <i className="fa-solid fa-right-to-bracket mr-2"></i> Log In
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  </div>
  );
};

export default Header;